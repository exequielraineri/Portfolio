import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="footer__meta">Construido con React y Vite · {profile.location}</p>
    </footer>
  );
}
