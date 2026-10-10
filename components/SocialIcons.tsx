import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { PROFILE } from "@/content";

config.autoAddCss = false;

/** Shared FontAwesome social row — footer + slim mode. */
export const SOCIALS = [
  { label: "GitHub", href: PROFILE.github, icon: faGithub },
  { label: "LinkedIn", href: PROFILE.linkedin, icon: faLinkedin },
  { label: "X", href: PROFILE.twitter, icon: faXTwitter },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: faEnvelope },
];

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <>
      {SOCIALS.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={`opacity-60 transition-all hover:-translate-y-0.5 hover:text-bronze hover:opacity-100 dark:hover:text-sand ${className}`}
        >
          <FontAwesomeIcon icon={icon} fixedWidth />
        </a>
      ))}
    </>
  );
}
