"use client";

import { z } from "zod";
import axios from "axios";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GlobeContactUs } from "./GlobeContactUs";
import { Textarea } from "@/components/ui/textarea";
import { Country, CountryCode } from "./CountryCode";

// Define form schema using Zod
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  countryCode: z.string().min(1, { message: "Country code is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactUs() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const fetchedCountries = response.data.map((country: any) => {
          const code = country.idd?.root + country.idd?.suffixes?.[0] || "";
          return {
            value: country.name.common + code,
            label: `${country.flag} ${country.name.common} ${
              code ? `(${code})` : ""
            }`,
          };
        });
        setCountries(fetchedCountries);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex w-full flex-wrap">
      <div className="relative flex w-full max-w-[500px] flex-shrink-0 flex-col flex-wrap py-12 md:w-1/2">
        <div className="before:bg-gradient-radial after:bg-gradient-conic absolute left-[10%] top-[20%] z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-blue-300 before:to-transparent before:opacity-70 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[480px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:opacity-40 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-50 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        <h2 className="relative z-20 bg-clip-text py-8 pt-0 text-2xl font-bold text-black dark:text-white sm:text-4xl">
          Contact Us
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-sm">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Chandler" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-sm">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Bing" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="username@email.com" {...field} />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            <div className="flex justify-between gap-4">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="mt-auto flex w-[40%] flex-col">
                    <FormLabel className="overflow-hidden text-nowrap text-sm">
                      Country Code
                    </FormLabel>
                    <FormControl>
                      <CountryCode
                        countries={countries}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={(country) => {
                          setSelectedCountry(country);
                          field.onChange(country?.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mt-auto w-[60%]">
                    <FormLabel className="text-sm">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="89 567 01234" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <div className="items flex flex-grow justify-center">
        <GlobeContactUs />
      </div>
    </div>
  );
}
