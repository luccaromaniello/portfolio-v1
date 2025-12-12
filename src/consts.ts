import GithubIcon from "@assets/icons/github.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";
import type { Link } from "@typeDefs/link";

export const SITE_TITLE = "Lucca Romaniello";
export const SITE_DESCRIPTION =
  "Full Stack Engineer with 6+ years experience and a design background, creating scalable, user-friendly products for startups and global companies.";

export const GITHUB_URL = "https://www.github.com/luccaromaniello/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/luccaromaniello/";
export const MAIL_URL = "contact@luccaromaniello.com";
export const WEBSITE_URL = "https://www.luccaromaniello.com";

// projects
export const PROJECT_ODIN_SITE_TITLE = "Lucca Romaniello — The Odin Project";
export const PROJECT_ODIN_SITE_DESCRIPTION =
  "Full Stack Engineer Lucca Romaniello presents a collection of 27 full-stack web development challenges completed during The Odin Project curriculum, showcasing practical skills and coding solutions.";
export const PROJECT_ODIN_LIVE_URL = "/theodinproject/";
export const PROJECT_ODIN_REPO_URL =
  "https://github.com/luccaromaniello/theodinproject";

export const PROJECT_PORTFOLIO_V0_URL = "https://www.v0.luccaromaniello.com";

export const SOCIAL_ICONS = {
  github: {
    alt: "GitHub icon",
    icon: GithubIcon,
    link: {
      label: "GitHub",
      url: GITHUB_URL,
    } as Link,
  },
  linkedin: {
    alt: "LinkedIn icon",
    icon: LinkedinIcon,
    link: {
      label: "LinkedIn",
      url: LINKEDIN_URL,
    } as Link,
  },
};

// styles
export const baseLayout =
  "px-8 md:px-20 lg:px-16 xl:px-72 grid grid-cols-1 gap-16 md:gap-4 max-w-[1440px] mx-auto my-16";
