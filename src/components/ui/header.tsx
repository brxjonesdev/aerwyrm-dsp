"use client"
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react";

export default function AppHeader() {
    const [open, setOpen] = useState(false);
     const navigationMenu = {
    items: [
      { title: "Latest", href: "/" },
      { title: "DSP", href: "/dsp-tutorial" },
      { title: "Audio Software", href: "?section=audio-software" },
      { title: "Music Production", href: "?section=music-production" },
      { title: "Sound Design", href: "?section=sound-design" },
    ],
  }
  return (
    <header className="flex items-center justify-between py-4 text-white/80 max-w-7xl mx-auto w-full">
              <Link 
              href="/" 
              className="font-aer text-2xl font-light hover:font-bold transition-all duration-700 cursor-pointer">
                Aerwyrm
              </Link>
    
              {/* Desktop Navigation */}
              <NavigationMenu className="hidden md:block">
                <NavigationMenuList className="font-mono text-white/80">
                  {navigationMenu.items.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href={item.href}>{item.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
    
              {/* Mobile Navigation */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="text-white/80">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background p-4">
                  <SheetHeader className='px-0'>
                    <SheetTitle className='font-aer text-2xl font-medium'>Aerwyrm</SheetTitle>
                  </SheetHeader>
                  <nav className="grid gap-4 font-mono">
                    {navigationMenu.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setOpen(false)} 
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </header>
  )
}
