export interface BusinessDay {
  day: string;
  /** Displayed hours, or null when closed. */
  hours: string | null;
}

/**
 * Opening hours, Monday first. `null` marks a closed day rather than the
 * string "Closed", so the component decides how to present it and a screen
 * reader is never handed a time range that is not one.
 */
export const businessHours: BusinessDay[] = [
  { day: "Monday", hours: "09:00 AM – 06:00 PM" },
  { day: "Tuesday", hours: "09:00 AM – 06:00 PM" },
  { day: "Wednesday", hours: "09:00 AM – 06:00 PM" },
  { day: "Thursday", hours: "09:00 AM – 06:00 PM" },
  { day: "Friday", hours: "09:00 AM – 06:00 PM" },
  { day: "Saturday", hours: "09:00 AM – 02:00 PM" },
  { day: "Sunday", hours: null },
];
