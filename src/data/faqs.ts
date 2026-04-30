import type { FAQ } from "@/types/content";
import { siteConfig } from "@/data/siteConfig";

export const faqs: FAQ[] = [
  {
    id: "recruiting-experience",
    category: "Recruiting",
    question: "Do I need previous consulting experience to apply?",
    answer:
      "No. We look for curiosity, reliability, communication, and a willingness to learn. Prior consulting, startup, or case interview experience can help, but it is not required.",
  },
  {
    id: "recruiting-majors",
    category: "Recruiting",
    question: "Which majors can join Limitless Consulting?",
    answer:
      "Students from all majors are encouraged to apply. Strong teams benefit from different perspectives across business, engineering, design, data, social science, and more.",
  },
  {
    id: "recruiting-timeline",
    category: "Recruiting",
    question: "When does recruitment happen?",
    answer:
      "Typical recruiting timelines begin in early fall and early spring. Stay connected with our social media for live updates.",
  },
  {
    id: "member-time",
    category: "Member Experience",
    question: "What is the expected time commitment?",
    answer:
      "Members should expect weekly meetings, project work, and occasional professional development events. A typical commitment may be 3-5 hours per week depending on project phase.",
  },
  {
    id: "member-development",
    category: "Member Experience",
    question: "What skills will I build?",
    answer:
      "Members practice structured problem solving, research, client communication, slide writing, financial thinking, interviewing, and project management.",
  },
  {
    id: "client-fit",
    category: "Client Services",
    question: "Who can work with Limitless Consulting?",
    answer:
      "The best fit is a student founder or early-stage campus venture with a clear business question and openness to working collaboratively with a student consulting team.",
  },
  {
    id: "client-cost",
    category: "Client Services",
    question: "Are consulting engagements paid?",
    answer:
      "No. Our consulting services are completely free of charge.",
  },
  {
    id: "client-duration",
    category: "Client Services",
    question: "How long does a project last?",
    answer:
      "A typical semester engagement may run 6-10 weeks, depending on scope, client availability, and the academic calendar.",
  },
  {
    id: "general-msu",
    category: "General",
    question: "Is Limitless Consulting affiliated with Michigan State University?",
    answer:
      "Limitless Consulting is a Broad student organization registered with Michigan State University.",
  },
  {
    id: "general-contact",
    category: "General",
    question: "How do I contact the team?",
    answer:
      `Use the contact page or email ${siteConfig.contact.email}.`,
  },
];
