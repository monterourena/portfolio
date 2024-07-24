import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function style(...args: ClassValue[]) {
  return twMerge(clsx(args));
}