"use client"

import { Button } from "@/components/ui/button"
import { Home, Grid3X3, CreditCard } from "lucide-react"

interface BottomNavigationProps {
  currentScreen: "payment" | "details"
  onScreenChange: (screen: "payment" | "details") => void
}

export default function BottomNavigation({ currentScreen, onScreenChange }: BottomNavigationProps) {
  return (
    <div className="relative">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden">
        <div className="w-full h-12 bg-[#111111] rounded-t-full transform translate-y-6"></div>
      </div>
      
      <div className="flex justify-around items-center py-4 px-6 bg-[#111111] pt-6 relative z-10">
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white p-2">
          <Home className="w-5 h-5" />
          <span className="text-xs">home</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center gap-1 text-white p-2"
          onClick={() => onScreenChange(currentScreen === "payment" ? "details" : "payment")}
        >
          <CreditCard className="w-5 h-5" />
          <span className="text-xs">yolo pay</span>
        </Button>

        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white p-2">
          <Grid3X3 className="w-5 h-5" />
          <span className="text-xs">grid</span>
        </Button>
      </div>
    </div>
  )
}
