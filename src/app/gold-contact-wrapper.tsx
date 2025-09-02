"use client";

import { GoldHelpDialog } from "../../components/ui/gold-contact";
import { useDialog } from "../../context/handleDialog";

export default function GoldHelpDialogWrapper() {
  const { open, setOpen, intent } = useDialog();

  return <GoldHelpDialog open={open} onClose={() => setOpen(false)} 
       defaultIntent={intent}
  />;
}
