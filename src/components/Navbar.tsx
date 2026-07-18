import styles from "./src/styles/Navbar.module.css";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  logoText?: string;
  links?: NavLink[];
  activeHref?: string;
  visitHref?: string;
  visitLabel?: string;
  onNavigate?: (href: string) => void;
}

const defaultLinks: NavLink[] = [
  { label: "Team", href: "#team" },
  { label: "Nutthawat", href: "#nutthawat" },
  { label: "Tanaphoom", href: "#tanaphoom" },
  { label: "Kasemsak", href: "#kasemsak" },
];

export default function Navbar({
  logoText = "Top Edge",
  links = defaultLinks,
  activeHref,
  visitHref = "https://github.com/linxlone666/portfolio-web-app",
  visitLabel = "Visit Github",
  onNavigate,
}: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a
          href="#team"
          className={styles.logoBox}
          aria-hidden="true"
          onClick={(event) => {
            event.preventDefault();
            onNavigate?.("#team");
          }}
        />
        <span className={styles.logoText}>{logoText}</span>
      </div>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={styles.link}
              aria-current={link.href === activeHref ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                onNavigate?.(link.href);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={visitHref}
        className={styles.visitBtn}
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.visitBtnText} data-text={visitLabel}>
          {visitLabel}
        </span>
      </a>
    </nav>
  );
}
