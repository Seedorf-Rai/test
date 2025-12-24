// Homepage TypeScript Interfaces

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  suitableFor: string;
  highlights: string[];
  link: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels" | "Easy";
  actionLabel: string;
}

export interface Accommodation {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  type:
    | "Luxury Resort"
    | "Homestay"
    | "Adventure Lodge"
    | "Eco Resort"
    | "Hostel"
    | "Heritage Hotel";
  rating: number;
  pricePerNight: number;
  amenities: string[];
}

export interface CultureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  experience: string;
  comment: string;
}

export interface TravelTip {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EmergencyContact {
  service: string;
  number: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  location: string;
  image: string;
  category: "All Photos" | "Landscapes" | "Culture" | "Wildlife" | "Adventure";
  likes: number;
  views: number;
}

export interface QuickLink {
  label: string;
  href: string;
}
