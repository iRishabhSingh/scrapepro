import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <div className="relative flex w-full flex-col py-12">
      <h2 className="relative z-20 bg-clip-text p-8 py-8 pt-0 text-2xl font-bold text-black dark:text-white sm:text-4xl md:px-16 md:pr-0">
        Testimonials
      </h2>
      <div className="w-full overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      "ScrapePro has revolutionized our data collection process. Their API is incredibly user-friendly and the data accuracy is unmatched. We've seen a significant boost in our lead generation.",
    name: "John Doe",
    title: "Marketing Manager, Acme Corp",
  },
  {
    quote:
      "We were struggling to extract product data from multiple e-commerce platforms. ScrapePro's solution saved us countless hours and provided us with clean, structured data.",
    name: "Jane Smith",
    title: "Data Analyst, Tech Solutions",
  },
  {
    quote:
      "The customer support at ScrapePro is top-notch. They helped us customize our scraping process and were always available to assist. We're extremely satisfied with their service.",
    name: "Michael Johnson",
    title: "Director of Operations, Global Enterprises",
  },
  {
    quote:
      "ScrapePro has allowed us to scale our market research efforts efficiently. Their platform is reliable and delivers high-quality data consistently.",
    name: "Emily Brown",
    title: "Research Analyst, Market Insights",
  },
  {
    quote:
      "We were impressed by ScrapePro's ability to handle large-scale scraping projects. Their platform is robust and delivers results quickly. We've seen a significant ROI on our investment.",
    name: "David Lee",
    title: "CEO, DataDriven Solutions",
  },
];

export default Testimonials;
