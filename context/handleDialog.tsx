"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type DialogIntent = "sell" | "sell-pledged" | "release" | undefined;

type DialogContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  intent: DialogIntent;
  setIntent: (intent: DialogIntent) => void;
  openWithIntent: (intent: DialogIntent) => void; // Helper function
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState<DialogIntent>(undefined);

  const openWithIntent = (intentValue: DialogIntent) => {
    setIntent(intentValue);
    setOpen(true);
  };

  return (
    <DialogContext.Provider value={{ open, setOpen, intent, setIntent, openWithIntent }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) throw new Error("useDialog must be used within a DialogProvider");
  return context;
};
