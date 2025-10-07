import signUpFormImage from "@assets/theodinproject/sign-up-form.png";
import adminDashboardImage from "@assets/theodinproject/admin-dashboard.png";
import { SECTIONS } from "@typeDefs/odinProject";

export const odinProjects = [
  {
    title: "Admin Dashboard",
    type: SECTIONS.INTERMEDIATE_HTML_CSS,
    description:
      "A collection of 27 challenges created during The Odin Project, a full‑stack web‑development curriculum.",
    website: "https://luccaromaniello.com/theodinproject/sign-up-form/",
    repository: "https://github.com/luccaromaniello/top-sign-up-form/",
    image: {
      src: adminDashboardImage,
      alt: "An overview of The Odin Project's website.",
    },
    tags: ["CSS Grid", "CSS", "HTML"],
  },
  {
    title: "Sign-up Form",
    type: SECTIONS.INTERMEDIATE_HTML_CSS,
    description:
      "UI implementation of a sign-up form. Focus on HTML5 form validations and CSS Flexbox layout.",
    website: "https://luccaromaniello.com/theodinproject/sign-up-form/",
    repository: "https://github.com/luccaromaniello/top-sign-up-form/",
    image: {
      src: signUpFormImage,
      alt: "An overview of The Odin Project's website.",
    },
    tags: ["CSS Flexbox", "CSS", "HTML"],
  },
];
