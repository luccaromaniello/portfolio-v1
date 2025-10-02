import GithubIcon from "@assets/icons/github.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";
import type { Link } from "@typeDefs/link";

export const SITE_TITLE = "Lucca Romaniello";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const GITHUB_URL = "https://www.github.com/luccaromaniello/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/luccaromaniello/";
export const MAIL_URL = "contact@luccaromaniello.com";
export const WEBSITE_URL = "https://www.luccaromaniello.com";

// projects
export const PROJECT_ODIN_LIVE_URL =
  "https://github.com/luccaromaniello/theodinproject";
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
