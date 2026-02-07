import ExternalLinkIcon from "@assets/icons/external-link.svg";
import GithubIcon from "@assets/icons/github.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";
import MailIcon from "@assets/icons/mail.svg";
import type { Link } from "@typeDefs/link";

export const SITE_TITLE = "Lucca Romaniello";
export const SITE_DESCRIPTION =
  "Full Stack Engineer with 6+ years experience and a design background, creating scalable, user-friendly products for startups and global companies.";

export const GITHUB_URL = "https://www.github.com/luccaromaniello/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/luccaromaniello/";
export const MAIL_URL = "contact@luccaromaniello.com";
export const WEBSITE_URL = "https://www.luccaromaniello.com";

// projects
export const YZZO_LIVE_URL = "https://yzzo.app";
export const YZZO_REPO_URL = "https://github.com/yzzoapps/yzzo";
export const NYX_REPO_URL = "https://github.com/luccaromaniello/nyx";

export const PROJECT_PORTFOLIO_V0_URL = "https://www.v0.luccaromaniello.com";

export const CREDIT_ALEX_URL = "https://www.instagram.com/clicksdoalex";
export const CREDIT_LOR_URL = "https://www.lorranebernardes.com/";
export const CREDIT_MOONLOIN_URL = "https://www.behance.net/moonloin";

export const SOCIAL_ICONS = {
  externalLink: {
    alt: "External link icon",
    icon: ExternalLinkIcon,
    link: {
      label: "External link",
      url: WEBSITE_URL,
    } as Link,
  },
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
  mail: {
    alt: "Mail icon",
    icon: MailIcon,
    link: {
      label: "Email",
      url: MAIL_URL,
    } as Link,
  },
};

// styles
export const baseSpacing = "px-8 md:px-20 lg:px-16 xl:px-20 2xl:px-24";
export const baseLayout = `grid grid-cols-1 gap-16 md:gap-4 mx-auto max-w-[1440px] px-6 md:px-16 xl:px-56`;
