"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./button";
import { X, Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface NavigatorStandalone extends Navigator {
  standalone?: boolean;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches || 
        (window.navigator as NavigatorStandalone).standalone === true) {
      setIsInstalled(true);
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // Hide for 7 days
    localStorage.setItem('installPromptDismissed', Date.now().toString());
  };

  // Check if prompt was recently dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('installPromptDismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - dismissedTime < sevenDays) {
        setShowInstallPrompt(false);
      }
    }
  }, []);

  if (isInstalled || !showInstallPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <>
      {/* Mobile Prompt - Bottom Banner */}
      <div className="md:hidden fixed bottom-20 left-0 right-0 z-50 mx-4 mb-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Vigneshwara Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  Install Vigneshwara Piercing App
                </h3>
                <p className="text-xs text-gray-600">
                  Get fast access to doorstep piercing services
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                onClick={handleInstallClick}
                size="sm"
                className="bg-primary hover:bg-[#CA8A04] hover:text-white text-[#1B0A3A] font-bold text-xs px-3 py-1 transition-colors"
              >
                Install
              </Button>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-primary p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Prompt - Top Banner */}
      <div className="hidden md:block fixed top-20 left-0 right-0 z-50 mx-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-orange-100 border border-primary/20 rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Vigneshwara Logo"
                    width={44}
                    height={44}
                    className="w-11 h-11 object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Install Vigneshwara Ear & Nose Piercing App
                  </h3>
                  <p className="text-sm text-gray-600">
                    Download our app for quick access to doorstep ear and nose piercing services
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button
                  onClick={handleInstallClick}
                  className="bg-primary hover:bg-[#CA8A04] hover:text-white text-[#1B0A3A] font-bold px-6 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Install App
                </Button>
                <button
                  onClick={handleDismiss}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
