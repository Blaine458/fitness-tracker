"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Bell,
  Settings,
  Flame,
  Target,
  Trophy,
  Search,
  Menu,
  Dumbbell,
  Calendar,
  CreditCard,
  User,
  Apple,
  Users,
  Award,
  BarChart,
  Camera,
  ChevronRight,
  Home,
  Activity,
  LineChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link"
import { useEffect } from "react"

const dashboardItems = [
  {
    title: "Overview",
    href: "/",
    description: "View your fitness dashboard and daily progress",
    icon: Home,
  },
  {
    title: "Workouts",
    href: "/workouts",
    description: "Track and manage your workout routines",
    icon: Activity,
  },
  {
    title: "Nutrition",
    href: "/nutrition",
    description: "Monitor your daily nutrition and meals",
    icon: Apple,
  },
  {
    title: "Progress",
    href: "/progress",
    description: "Track your fitness journey and achievements",
    icon: LineChart,
  },
]

const communityItems = [
  {
    title: "Friends",
    href: "/friends",
    description: "Connect with friends and share progress",
    icon: Users,
  },
  {
    title: "Challenges",
    href: "/challenges",
    description: "Join fitness challenges and competitions",
    icon: Award,
  },
  {
    title: "Leaderboards",
    href: "/leaderboards",
    description: "View rankings and achievements",
    icon: BarChart,
  },
  {
    title: "Progress Photos",
    href: "/progress-photos",
    description: "Share and view transformation photos",
    icon: Camera,
  },
]

export function DashboardHeader() {
  const [streak, setStreak] = useState(7)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsSearchOpen(!isSearchOpen)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [isSearchOpen])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between p-6 bg-card/50 backdrop-blur-lg border border-border/50 rounded-2xl shadow-lg relative z-50"
    >
      <div className="flex items-center space-x-6">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Dumbbell className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            FitTracker
          </span>
        </Link>

        <div className="hidden md:block border-l pl-6">
          <h2 className="text-sm font-medium text-muted-foreground">Welcome back,</h2>
          <p className="text-base font-semibold">John</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Dumbbell className="h-6 w-6 text-primary mb-2" />
                        <div className="mb-2 mt-4 text-lg font-medium">FitTracker Pro</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Your personal fitness companion for tracking workouts, nutrition, and progress
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {dashboardItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="h-4 w-4" />
                            <span className="text-sm font-medium leading-none">{item.title}</span>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Community</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {communityItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="h-4 w-4" />
                            <span className="text-sm font-medium leading-none">{item.title}</span>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/settings" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="secondary" size="sm" className="flex items-center space-x-1">
          <Flame className="h-4 w-4 text-orange-500" />
          <span>{streak} day streak</span>
        </Button>

        <Button variant="outline" size="icon" onClick={() => setIsSearchOpen(true)}>
          <Search className="h-4 w-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start p-4 space-y-2 cursor-pointer">
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="font-medium">New achievement unlocked!</span>
              </div>
              <p className="text-sm text-muted-foreground">You've completed 7 workouts this week. Keep it up!</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start p-4 space-y-2 cursor-pointer">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-green-500" />
                <span className="font-medium">Daily goal reminder</span>
              </div>
              <p className="text-sm text-muted-foreground">You're 2,000 steps away from your daily goal.</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={() => setIsSearchOpen(true)}>
          <Search className="h-4 w-4" />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-6">
              {dashboardItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              {communityItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link href="/settings" className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Command Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Schedule Workout</span>
            </CommandItem>
            <CommandItem>
              <Apple className="mr-2 h-4 w-4" />
              <span>Log Meal</span>
            </CommandItem>
            <CommandItem>
              <Dumbbell className="mr-2 h-4 w-4" />
              <span>Start Workout</span>
            </CommandItem>
            <CommandItem>
              <Trophy className="mr-2 h-4 w-4" />
              <span>View Achievements</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </motion.header>
  )
}
