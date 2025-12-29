"use client";

import { useState, useEffect, useCallback } from "react";

// Helper to safely get from localStorage
function safeGet<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return null;
  }
}

// Helper to safely set localStorage
function safeSet<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const stored = safeGet<T>(key);
    if (stored !== null) setValue(stored);
  }, [key]);

  const set = useCallback((v: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const next = typeof v === "function" ? (v as (prev: T) => T)(prev) : v;
      safeSet<T>(key, next);
      return next;
    });
  }, [key]);

  return { value, set };
}