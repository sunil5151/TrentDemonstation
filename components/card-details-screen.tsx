"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { faker } from '@faker-js/faker'

interface CardDetailsScreenProps {
  isFrozen: boolean
  onToggleFreeze: () => void
  onBack: () => void
}

// Use faker.js for random data generation
const generateCardData = () => {
  // Generate a realistic card number format
  const cardNumber = `${faker.finance.creditCardNumber('####')}`

  // Generate expiry date
  const expiryMonth = faker.date.future().getMonth() + 1
  const expiryYear = faker.date.future().getFullYear().toString().slice(-2)

  return {
    cardNumber: `**** **** **** ${cardNumber.slice(-4)}`,
    fullCardNumber: cardNumber,
    expiry: `${String(expiryMonth).padStart(2, '0')}/${expiryYear}`,
    cvv: faker.finance.creditCardCVV(),
  }
}

export default function CardDetailsScreen({ isFrozen, onToggleFreeze, onBack }: CardDetailsScreenProps) {
  const [cardData] = useState(generateCardData())
  const [showCopied, setShowCopied] = useState(false)

  const copyDetails = () => {
    navigator.clipboard.writeText(cardData.fullCardNumber)
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 2000)
  }

  return (
    <div className="px-6 py-8 text-white">
      <h1 className="text-xl font-medium mb-2">select payment mode</h1>
      <p className="text-gray-400 text-sm mb-8">choose your preferred payment method to make payment.</p>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8">
        <Button
          variant="outline"
          className="px-6 py-2 rounded-full border bg-transparent text-gray-400 border-gray-600"
          onClick={onBack}
        >
          pay
        </Button>
        <Button variant="outline" className="px-6 py-2 rounded-full border bg-[#ed1c24] text-white border-[#ed1c24]">
          card
        </Button>
      </div>

      {/* Card Section */}
      <div className="mb-4">
        <p className="text-gray-400 text-xs uppercase tracking-wide mb-4">YOUR DIGITAL DEBIT CARD</p>

        <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 mb-6">
          {/* Freeze Overlay - Enhanced Animation */}
          <AnimatePresence>
            {isFrozen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm z-10 flex items-center justify-center"
              >
                {/* Ice crystal pattern overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0 L60 15 L50 30 L40 15 Z" fill="#ffffff" />
                  <path d="M0 50 L15 40 L30 50 L15 60 Z" fill="#ffffff" />
                  <path d="M100 50 L85 40 L70 50 L85 60 Z" fill="#ffffff" />
                  <path d="M50 100 L40 85 L50 70 L60 85 Z" fill="#ffffff" />
                </svg>
                
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 30 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.1
                  }}
                  className="text-blue-100 text-6xl"
                >
                  ❄️
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card Details */}
          <motion.div
            className="p-6 h-full flex flex-col justify-between"
            animate={{
              filter: isFrozen ? "blur(3px)" : "blur(0px)",
              opacity: isFrozen ? 0.7 : 1,
              scale: isFrozen ? 0.98 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[#ed1c24] text-sm font-medium mb-1">YOLO</div>
                <div className="text-white text-xs">YES BANK</div>
              </div>
              <div className="text-right">
                <div className="text-blue-400 text-xs">PREPAID</div>
              </div>
            </div>

            <div>
              <div className="text-white text-lg font-mono tracking-wider mb-2">{cardData.cardNumber}</div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-gray-400 text-xs">VALID THRU</div>
                  <div className="text-white text-sm">{cardData.expiry}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-xs">CVV</div>
                  <div className="text-white text-sm">{cardData.cvv}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card Controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white text-sm">freeze</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleFreeze}
              className={`w-12 h-6 rounded-full p-0 ${isFrozen ? "bg-blue-500" : "bg-gray-600"}`}
            >
              <motion.div
                className="w-5 h-5 bg-white rounded-full"
                animate={{ x: isFrozen ? 24 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </Button>
          </div>

          <Button
            variant="ghost"
            onClick={copyDetails}
            className="flex items-center gap-2 text-[#ed1c24] hover:text-[#ed1c24]/80 p-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            </svg>
            <span className="text-sm">copy details</span>
            {showCopied && <span className="text-green-400 text-xs">copied!</span>}
          </Button>
        </div>

        {/* RuPay Branding */}
        <div className="mt-8 flex justify-end items-center">
          <div>
            <div className="text-white text-lg font-bold">RuPay</div>
            <div className="text-blue-400 text-xs">PREPAID</div>
          </div>
        </div>
      </div>
    </div>
  )
}
