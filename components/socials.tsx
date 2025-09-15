import Link from "next/link";

import { socialLinks } from "@/lib/data";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

export const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <ul className={containerStyles}>
      {socialLinks.map(({ name, path, icon: Icon }) => (
        <li key={name}>
          <Link
            href={path}
            className={iconStyles}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${name} link`}
          >
            <Icon size={20} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
