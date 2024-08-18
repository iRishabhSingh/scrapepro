"use client";

import * as React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

// Define the Country type
export type Country = {
  value: string;
  label: string;
};

interface CountryCodeProps {
  countries: Country[];
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country | null) => void;
}

// CountryCode component with accurate TypeScript typings
export function CountryCode({
  countries,
  selectedCountry,
  setSelectedCountry,
}: CountryCodeProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="min-w-[70px] max-w-[192px] justify-start"
          >
            {selectedCountry ? (
              <>{selectedCountry.label}</>
            ) : (
              <span className="text-opacity-[0.6]">Code</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0" align="start">
          <CountryList
            countries={countries}
            setOpen={setOpen}
            setSelectedCountry={setSelectedCountry}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="min-w-[70px] justify-start">
          {selectedCountry ? (
            <>{selectedCountry.label}</>
          ) : (
            <span className="text-opacity-[0.6]">Code</span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <CountryList
            countries={countries}
            setOpen={setOpen}
            setSelectedCountry={setSelectedCountry}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface CountryListProps {
  countries: Country[];
  setOpen: (open: boolean) => void;
  setSelectedCountry: (country: Country | null) => void;
}

// CountryList component with accurate TypeScript typings
function CountryList({
  countries,
  setOpen,
  setSelectedCountry,
}: CountryListProps) {
  return (
    <Command>
      <CommandInput placeholder="Search country by name or code..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {countries.map((country) => (
            <CommandItem
              key={country.value}
              value={country.value}
              onSelect={(value) => {
                const selected = countries.find((c) => c.value === value);
                setSelectedCountry(selected || null);
                setOpen(false);
              }}
            >
              {country.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
