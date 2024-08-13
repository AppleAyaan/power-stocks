import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#" },
  { label: "FAQ", href: "#" },
];

export const testimonials = [
  {
    user: "Junda Chen",
    company: "Year 13 Student @ Jumeirah College",
    image: user1,
    text: "I recently had the chance to play Power Stocks and it was a very unique experience. The powerups add playability and excitement to stock investing.",
  },
  {
    user: "Samarvir Garg",
    company: "Grade 12 at White Oaks",
    image: user2,
    text: "Truly a distinctive experience. The game adds a exciting and fresh twist to the traditional approach of investing in stocks, making it entertaining.",
  },
  {
    user: "Izaan Faisal",
    company: "Grade 7 at Dr David R Williams",
    image: user3,
    text: "This game makes stock investing more kid-friendly, and I love playing it especially with all the powerups!! :)",
  },
  
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "...",
    description:
      "...",
  },
  {
    icon: <Fingerprint />,
    text: "...",
    description:
      "...",
  },
  {
    icon: <ShieldHalf />,
    text: "...",
    description:
      "...",
  },
  {
    icon: <BatteryCharging />,
    text: "...",
    description:
      "...",
  },
  {
    icon: <PlugZap />,
    text: "...",
    description:
      "...",
  },
  {
    icon: <GlobeLock />,
    text: "...",
    description:
      "...",
  },
];

export const checklistItems = [
  {
    title: "...",
    description:
      "...",
  },
  {
    title: "...",
    description:
      "...",
  },
  {
    title: "...",
    description:
      "...",
  },
  {
    title: "...",
    description:
      "...",
  },
];

export const callToActionOptions = [
  {
    title: "Join the DEV TEAM",
    price: "$TBD",
    features: [
      "Access to Source Code",
      "Network with peers",
      "Work alongside Founder",
      "Gain experience",
    ],
  },
  {
    title: "Join the Mailing List",
    price: "$0",
    features: [
      "Access to Newsletter",
      "Find out features before they roll out",
      "Get a Mailing List Badge",
    ],
  },
  {
    title: "Power VIP",
    price: "$5",
    features: [
      "Power Stocks VIP Badge",
      "Access to BETA Features",
      "2x chance of powerups",
      "Provide input to DEV TEAM",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Contact Us" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "GitHub Repo" },
  { href: "#", text: "About Me" },
  { href: "#", text: "Jobs" },
];
