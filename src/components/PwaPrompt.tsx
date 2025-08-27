'use client'

import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

export default function PwaPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator as any).standalone

    setIsIOS(isIOSDevice)
    setIsStandalone(isInStandaloneMode)

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    const checkVisitCount = () => {
      const visitCount = parseInt(localStorage.getItem('visitCount') || '0') + 1
      localStorage.setItem('visitCount', visitCount.toString())
      
      if (visitCount >= 2 && !isInStandaloneMode && !localStorage.getItem('pwaPromptDismissed')) {
        setShowInstallPrompt(true)
      }
    }

    checkVisitCount()

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'pwa_install_prompt', {
          event_category: 'PWA',
          event_label: outcome,
          custom_parameter_1: 'android'
        })
      }
      
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleDismiss = () => {
    localStorage.setItem('pwaPromptDismissed', 'true')
    setShowInstallPrompt(false)
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'pwa_prompt_dismissed', {
        event_category: 'PWA',
        event_label: isIOS ? 'ios' : 'android'
      })
    }
  }

  if (!showInstallPrompt || isStandalone) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 shadow-lg z-50 lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-sm lg:rounded-lg">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <span className="text-2xl">📱</span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm mb-1">
            Install Our App
          </div>
          <div className="text-xs opacity-90 mb-3">
            {isIOS 
              ? 'Add to your home screen for quick access to quotes and support'
              : 'Get instant access to health insurance quotes and support'
            }
          </div>
          
          <div className="flex space-x-2">
            {isIOS ? (
              <div className="text-xs space-y-2">
                <div className="flex items-center space-x-1">
                  <span>1.</span>
                  <span>Tap the share button</span>
                  <span className="text-lg">⎙</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>2.</span>
                  <span>Tap "Add to Home Screen"</span>
                  <span className="text-lg">📱</span>
                </div>
                <button
                  onClick={handleDismiss}
                  className="bg-white bg-opacity-20 px-3 py-1 rounded text-xs hover:bg-opacity-30 transition-colors"
                >
                  Got it!
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={handleInstallClick}
                  className="bg-yellow-400 text-blue-800 px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors"
                >
                  Install App
                </button>
                <button
                  onClick={handleDismiss}
                  className="bg-white bg-opacity-20 px-3 py-2 rounded-lg text-sm hover:bg-opacity-30 transition-colors"
                >
                  Later
                </button>
              </>
            )}
          </div>
        </div>
        
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-white opacity-70 hover:opacity-100 text-lg"
        >
          ×
        </button>
      </div>
    </div>
  )
}