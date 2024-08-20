"use client";

import React from "react";
import { Card } from "@/components/ui/apple-cards-carousel";

export function ServiceCards() {
  return (
    <div className="flex h-full w-full flex-wrap justify-between gap-6">
      {data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ))}
    </div>
  );
}

const data = [
  {
    title: "Business Directory",
    description:
      "Providing services for collecting business directory data efficiently and accurately.",
    src: "https://via.placeholder.com/96?text=Business+Directory",
  },
  {
    title: "Email Scraping",
    description:
      "Specialized in scraping email addresses from various sources, ensuring accuracy.",
    src: "https://via.placeholder.com/96?text=Email+Scraping",
  },
  {
    title: "Google Scraper",
    description:
      "Expert in extracting valuable data from Google search results and other Google services.",
    src: "https://via.placeholder.com/96?text=Google+Scraper",
  },
  {
    title: "Product Scraper",
    description:
      "Efficiently scrape product data from various eCommerce websites with detailed information.",
    src: "https://via.placeholder.com/96?text=Product+Scraper",
  },
  {
    title: "Scraping ECommerce",
    description:
      "Offering comprehensive eCommerce data scraping for product details, reviews, and pricing.",
    src: "https://via.placeholder.com/96?text=Scraping+ECommerce",
  },
  {
    title: "Social Media Scraping",
    description:
      "Collect data from social media platforms, including profiles, posts, and engagement metrics.",
    src: "https://via.placeholder.com/96?text=Social+Media+Scraping",
  },
  {
    title: "Web Data Extraction",
    description:
      "Extract structured data from any website, regardless of the complexity or format.",
    src: "https://via.placeholder.com/96?text=Web+Data+Extraction",
  },
  {
    title: "Web Screen Scraping",
    description:
      "Capture data directly from web pages, including images and content, for various uses.",
    src: "https://via.placeholder.com/96?text=Web+Screen+Scraping",
  },
  {
    title: "Web Scraping Real Estate",
    description:
      "Gather detailed property listings, market trends, and real estate data from relevant websites.",
    src: "https://via.placeholder.com/96?text=Web+Scraping+Real+Estate",
  },
  {
    title: "Scrape Airline Websites",
    description:
      "Extract flight data, pricing, and schedules from major airline websites for analysis.",
    src: "https://via.placeholder.com/96?text=Scrape+Airline+Websites",
  },
  {
    title: "Hotel & Travel Data Scraping",
    description:
      "Collect data from hotel and travel booking sites, including availability, pricing, and reviews.",
    src: "https://via.placeholder.com/96?text=Hotel+%26+Travel+Data+Scraping",
  },
  {
    title: "Stock Market & Financial Data",
    description:
      "Retrieve real-time financial data, stock prices, and market trends from financial websites.",
    src: "https://via.placeholder.com/96?text=Stock+Market+%26+Financial+Data",
  },
];
