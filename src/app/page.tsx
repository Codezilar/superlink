import styles from "./page.module.css";

const leftCards = ["CUSTOMER DATA", "MERCHANT DATA", "TRANSACTIO LOG"];
const rightCards = ["VECTOR DATABASE", "VECTOR DATABASE", "VECTOR DATABASE"];

export default function Home() {
  return (
    <div className={styles.viewport}>
      <div className={styles.outerFrame} />

      <main className={styles.console}>
        <header className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.brandIcon} />
            <span>Superlinked</span>
          </div>
          <nav className={styles.nav}>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">News</a>
          </nav>
        </header>

        <div className={styles.gridArea}>
          <aside className={styles.leftPanel}>
            <div className={styles.leftGhosts}>
              <span />
              <span />
              <span />
            </div>

            {leftCards.map((item) => (
              <article key={item} className={styles.leftCard}>
                <div className={styles.blackStrip}>
                  <span />
                  <span />
                </div>
                <span className={styles.orangeDot} />
                <p>{item}</p>
              </article>
            ))}
          </aside>

          <section className={styles.centerPanel}>
            <div className={styles.topMarks}>
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className={styles.traceLeft} />
            <div className={styles.traceRight} />

            <article className={styles.coreCard}>
              <div className={styles.coreAccent} />
              <h1>THE VECTOR COMPUTER</h1>
              <p>The only compute platform your vector retrieval stack needs.</p>
              <button>FRAUD DETECTION</button>
            </article>

            <div className={styles.coreBase} />
            <button className={styles.ghostAction}>GET EARLY ACCESS</button>
          </section>

          <aside className={styles.rightPanel}>
            {rightCards.map((item, i) => (
              <article key={`${item}-${i}`} className={styles.dbCard}>
                <div className={styles.dbTop}>
                  <p>{item}</p>
                  <div className={styles.dbControls}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className={styles.dbBar} />
              </article>
            ))}

            <div className={styles.rightGhost} />
          </aside>
        </div>
      </main>
    </div>
  );
}
