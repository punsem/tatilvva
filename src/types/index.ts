export interface Destination {
  id: number;
  name: string;
  slug: string;
  city: string;
  location: string;
  description: string;
  longDescription: string;
  price: number;
  days: number;
  rating: number;
  image: string;
  hotelName: string;
  features: string[];
  highlights: string[];
  category: "budget" | "mid" | "premium" | "luxury";
  categories: string[];
}

export interface FilterState {
  city: string;
  budgetRange: string;
  days: number | null;
  searchQuery: string;
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  notes: string;
}

export interface PlanningForm {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  routesSold: number;
  totalEarnings: number;
  photos: UserPhoto[];
  joinDate: string;
}

export interface UserPhoto {
  id: string;
  url: string;
  location: string;
  destinationSlug: string;
  likes: number;
  caption: string;
}

export interface EarningPlan {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnings: string;
  features: string[];
  highlighted: boolean;
}

export interface CampaignRegistration {
  name: string;
  email: string;
  phone: string;
}
