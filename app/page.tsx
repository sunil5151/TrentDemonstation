"use client"

import { useState } from "react"
import PaymentModeScreen from "@/components/payment-mode-screen"
import CardDetailsScreen from "@/components/card-details-screen"
import BottomNavigation from "@/components/bottom-navigation"

export default function YoloPayApp() {
  const [currentScreen, setCurrentScreen] = useState<"payment" | "details">("payment")
  const [isFrozen, setIsFrozen] = useState(false)

  return (
    <div className="bg-[#0d0d0d] min-h-screen flex flex-col max-w-sm mx-auto relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-white text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
          <svg className="w-4 h-4 ml-1" fill="white" viewBox="0 0 24 24">
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
          </svg>
          <div className="w-6 h-3 border border-white rounded-sm ml-1">
            <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {currentScreen === "payment" ? (
          <PaymentModeScreen onNavigateToDetails={() => setCurrentScreen("details")} />
        ) : (
          <CardDetailsScreen
            isFrozen={isFrozen}
            onToggleFreeze={() => setIsFrozen(!isFrozen)}
            onBack={() => setCurrentScreen("payment")}
          />
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
    </div>
  )
}
