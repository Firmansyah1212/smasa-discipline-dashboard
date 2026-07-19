"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface SidebarContextType {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SidebarContext =
  createContext<SidebarContextType | null>(null);

export function SidebarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] =
    useState(false);

  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context =
    useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar harus dipakai di dalam SidebarProvider"
    );
  }

  return context;
}