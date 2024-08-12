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
    user: "Your Name Here!",
    company: "...",
    image: user1,
    text: "Your review!",
  },
  {
    user: "Your Name Here!",
    company: "...",
    image: user2,
    text: "Your review!",
  },
  {
    user: "Your Name Here!",
    company: "...",
    image: user3,
    text: "Your review!",
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
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
