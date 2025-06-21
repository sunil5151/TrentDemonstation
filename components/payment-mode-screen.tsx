"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"

interface PaymentModeScreenProps {
  onNavigateToDetails: () => void
}

export default function PaymentModeScreen({ onNavigateToDetails }: PaymentModeScreenProps) {
  const [selectedMode, setSelectedMode] = useState<"pay" | "card">("card")

  return (
    <div className="px-6 py-8 text-white">
      <h1 className="text-xl font-medium mb-2">select payment mode</h1>
      <p className="text-gray-400 text-sm mb-8">choose your preferred payment method to make payment.</p>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8">
        <Button
          variant="outline"
          className={`px-6 py-2 rounded-full border ${
            selectedMode === "pay"
              ? "bg-[#ed1c24] text-white border-[#ed1c24]"
              : "bg-transparent text-gray-400 border-gray-600"
          }`}
          onClick={() => setSelectedMode("pay")}
        >
          pay
        </Button>
        <Button
          variant="outline"
          className={`px-6 py-2 rounded-full border ${
            selectedMode === "card"
              ? "bg-[#ed1c24] text-white border-[#ed1c24]"
              : "bg-transparent text-gray-400 border-gray-600"
          }`}
          onClick={() => setSelectedMode("card")}
        >
          card
        </Button>
      </div>

      {/* Card Section */}
      <div className="mb-4">
        <p className="text-gray-400 text-xs uppercase tracking-wide mb-4">YOUR DIGITAL DEBIT CARD</p>

        <motion.div 
          className="relative w-full h-48 rounded-2xl overflow-hidden cursor-pointer" 
          onClick={onNavigateToDetails}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Card Background with Abstract Design */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
            {/* Abstract geometric shapes */}
            <div className="absolute top-8 left-8 w-16 h-16 border-2 border-[#ed1c24] rotate-45 opacity-30"></div>
            <div className="absolute bottom-12 right-12 w-8 h-8 bg-[#ed1c24] rotate-12 opacity-40"></div>
            <div className="absolute top-16 right-16 w-12 h-12 border border-gray-500 rotate-12 opacity-20"></div>

            {/* Geometric lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 120">
              <path d="M20 60 L80 20 L140 80 L180 40" stroke="#ed1c24" strokeWidth="1" fill="none" />
              <path d="M40 100 L100 60 L160 100" stroke="#666" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* Card Content */}
          <div className="absolute top-6 left-6">
            <div className="text-[#ed1c24] text-sm font-medium mb-1">YOLO</div>
            <div className="text-white text-xs">YES BANK</div>
          </div>
          
          <div className="absolute bottom-6 left-6">
            <div className="w-8 h-8 bg-[#ed1c24] rounded flex items-center justify-center mb-2">
              <span className="text-white text-xs font-bold">*</span>
            </div>
            <p className="text-[#ed1c24] text-xs font-medium">activate</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
