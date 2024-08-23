"use client"
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconHistory,
  IconExchange,
  IconHome,
  IconAddressBook,
  IconTerminal2,
  IconUser
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Dashboard",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-300" />
      ),
      href: "Dashboard",
    },
    {
      title: "History",
      icon: (
        <IconHistory className="h-full w-full text-neutral-300" />
      ),
      href: "History",
    },
    {
      title: "Subscriptions",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-300" />
      ),
      href: "Subscriptions"
    },
    {
      title: "User",
      icon: (
        <IconUser className="h-full w-full text-neutral-300 min-w-" />
      ),
      href: "SignIn",
    },
  ];
  return (
      <FloatingDock
        items={links}
        desktopClassName="w-fit z-50 fixed bottom-0 mx-auto left-0 right-0"
        mobileClassName="w-fit z-50 fixed bottom-0 mx-auto right-0"
      />    
  );
}
