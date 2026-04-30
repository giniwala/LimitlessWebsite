export type HeroImage = {
  src: string;
  alt: string;
  label?: string;
  objectPosition?: string;
};

// Homepage hero slideshow. These use approved team/event photos copied into public/images/team-photos.
export const heroImages: HeroImage[] = [
  {
    src: "/images/team-photos/team-group-photo.jpeg",
    alt: "Limitless Consulting group photo.",
    label: "Limitless team",
    objectPosition: "50% 42%",
  },
  {
    src: "/images/team-photos/team-03.jpeg",
    alt: "Limitless students collaborating in a workshop setting.",
    label: "Workshop",
    objectPosition: "50% 45%",
  },
  {
    src: "/images/team-photos/team-07.jpeg",
    alt: "Limitless members gathered around tables during an organization event.",
    label: "Student strategy",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/team-photos/team-10.jpeg",
    alt: "Limitless members listening during a founder-focused meeting.",
    label: "Townhall",
    objectPosition: "50% 42%",
  },
];

// Used when no local hero images have been added yet.
export const heroFallbackImage: HeroImage = {
  src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82",
  alt: "Students collaborating around a consulting project table",
  label: "Placeholder collaboration photo",
};
