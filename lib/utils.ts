import { customAlphabet } from "nanoid";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const genId = customAlphabet("1234567890abcdef", 8);
