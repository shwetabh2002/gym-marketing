import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.heroBg} aria-hidden />
      <div className={styles.heroNoise} aria-hidden />

      <header className={styles.nav}>
        <div className={styles.brand}>GymFlow</div>
        <div className={styles.navActions}>
          <a
            className={styles.navGhost}
            href={`${process.env.NEXT_PUBLIC_CRM_URL || "http://localhost:3000"}/login`}
          >
            Staff login
          </a>
          <Link className={styles.navCta} href="/signup">
            Start free
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <p className={styles.kicker}>Membership software for gyms</p>
        <h1 className={styles.logoMark}>GymFlow</h1>
        <p className={styles.lede}>
          Collect renewals before they slip. Track payments, follow-ups, and
          staff actions — one gym, one workspace.
        </p>
        <div className={styles.ctaRow}>
          <Link className={styles.ctaPrimary} href="/signup">
            Create your gym
          </Link>
          <a
            className={styles.ctaSecondary}
            href={`${process.env.NEXT_PUBLIC_CRM_URL || "http://localhost:3000"}/login`}
          >
            I already have an account
          </a>
        </div>
      </section>

      <section className={styles.strip}>
        <div>
          <strong>Renewal queue</strong>
          <span>Who’s expiring, who promised, who’s lost</span>
        </div>
        <div>
          <strong>Payments + dues</strong>
          <span>Cash, UPI, card — with who collected it</span>
        </div>
        <div>
          <strong>Staff access</strong>
          <span>Trainer & sales permissions you control</span>
        </div>
      </section>
    </main>
  );
}
