import type { TeamPhoto } from "@/types/content";

// Approved group and event photos. Use these to make pages feel specific to Limitless.
// Files live in public/images/team-photos and should stay lowercase/hyphenated.
export const teamPhotos: TeamPhoto[] = [
  {
    src: "/images/team-photos/team-10.jpeg",
    alt: "Limitless members listening during a founder-focused meeting.",
    label: "Townhall energy",
    description: "Founders bring real startup questions into the room, and students pressure-test ideas together.",
    objectPosition: "50% 42%",
  },
  {
    src: "/images/team-photos/team-03.jpeg",
    alt: "Limitless students collaborating in a workshop setting.",
    label: "Workshop support",
    description: "Thursday Workshops give founders and consultants a place to turn quick ideas into focused next steps.",
    objectPosition: "50% 45%",
  },
  {
    src: "/images/team-photos/team-07.jpeg",
    alt: "Limitless members gathered around tables during an organization event.",
    label: "Student strategy",
    description: "Students from different majors bring fresh angles to market, model, finance, and launch questions.",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/team-photos/team-11.jpeg",
    alt: "A Limitless member speaking with students during a meeting.",
    label: "Founder questions",
    description: "Each Townhall centers on one to three current challenges that a student founder is actively working through.",
    objectPosition: "50% 42%",
  },
  {
    src: "/images/team-photos/team-04.jpeg",
    alt: "Limitless students working together in a classroom meeting.",
    label: "Member learning",
    objectPosition: "50% 45%",
  },
  {
    src: "/images/team-photos/team-group-photo.jpeg",
    alt: "Limitless Consulting group photo.",
    label: "Limitless team",
    objectPosition: "50% 42%",
  },
];

export const homepageTeamPhotos = [teamPhotos[0], teamPhotos[2], teamPhotos[3], teamPhotos[1]];
export const aboutTeamPhotos = [teamPhotos[5], teamPhotos[1], teamPhotos[2]];
export const joinTeamPhotos = [teamPhotos[4], teamPhotos[0], teamPhotos[3]];
