export type HeroImage = {
  src: string;
  alt: string;
  label?: string;
};

// Add group photos here after placing them in public/images/hero.
// Example:
// { src: "/images/hero/spring-2026-board.jpg", alt: "Limitless Consulting board in Spring 2026" }
export const heroImages: HeroImage[] = [];

// Used when no local hero images have been added yet.
export const heroFallbackImage: HeroImage = {
  src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82",
  alt: "Students collaborating around a consulting project table",
  label: "Placeholder collaboration photo",
};
