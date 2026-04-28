// Three variations of the GitHub Pages menu site

const ACCENT_VAR = { cyan: 'var(--cyan)', magenta: 'var(--magenta)', lime: 'var(--lime)' };

// ─── Variation 1: Terminal Grid ────────────────────────────────
function V1Terminal({ projects, density, radius }) {
  const cols = density === 'tight' ? 3 : density === 'normal' ? 3 : 2;
  const gap = density === 'tight' ? 10 : density === 'normal' ? 16 : 24;
  return (
    <div className="frame v1" style={{ '--cols': cols, '--gap': gap + 'px', '--radius': radius + 'px' }}>
      <div className="v1-bg" />
      <div className="v1-topbar">
        <div className="left">
          <div className="dot" />
          <span>~/INDEX.MENU</span>
          <span style={{ color: 'var(--fg-faint)' }}>·</span>
          <span>{projects.length} REPOSITORIES</span>
        </div>
        <div className="right">
          <span>NET ▮ ONLINE</span>
          <span>v0.3.1</span>
          <span style={{ color: 'var(--cyan)' }}>2026.04</span>
        </div>
      </div>
      <div className="v1-prompt">
        <div className="line1">// AVAILABLE EXPERIMENTS</div>
        <div className="line2">
          <span className="pre">user@github</span>
          <span style={{ color: 'var(--fg-dim)' }}>:~$ </span>
          ls --projects --interactive
          <span className="caret" />
        </div>
      </div>
      <div className="v1-grid">
        {projects.map(p => (
          <a
            key={p.id}
            className="v1-card"
            href={`https://${p.repo}.github.io/`}
            style={{ '--card-accent': ACCENT_VAR[p.accent] }}
          >
            <div className="row">
              <div className="v1-num">[{p.num}]</div>
              <div className={`v1-status ${p.status}`}>{p.status}</div>
            </div>
            <div className="v1-title">{p.title}</div>
            <div className="v1-desc">{p.desc}</div>
            <div className="v1-tags">
              {p.tags.map(t => <span key={t} className="v1-tag">#{t}</span>)}
            </div>
            <div className="v1-repo">→ {p.repo}<span className="v1-arrow" style={{ float: 'right' }}>↗</span></div>
          </a>
        ))}
      </div>
      <div className="v1-footer">
        <span>ESC TO EXIT</span>
        <span>↑↓ NAVIGATE · ENTER OPEN</span>
        <span>HOSTED ON GITHUB.IO</span>
      </div>
    </div>
  );
}

// ─── Variation 2: Glitch / CRT ────────────────────────────────
function V2Glitch({ projects, density, radius }) {
  const cols = density === 'tight' ? 3 : density === 'normal' ? 3 : 2;
  const gap = density === 'tight' ? 8 : density === 'normal' ? 14 : 22;
  return (
    <div className="frame v2" style={{ '--cols': cols, '--gap': gap + 'px', '--radius': radius + 'px' }}>
      <div className="v2-side">SIGNAL ··· REC ··· 04:27:26</div>
      <div className="v2-header">
        <div className="sys">// SYS.LOG · TRANSMISSION OK</div>
        <h1>INDEX</h1>
        <div className="meta">
          <div><span className="key">CHANNELS</span> <span className="val">/ {projects.length}</span></div>
          <div><span className="key">UPLINK</span> <span className="val">/ STABLE</span></div>
          <div><span className="key">FREQ</span> <span className="val">/ 102.4MHz</span></div>
        </div>
      </div>
      <div className="v2-grid">
        {projects.map(p => (
          <a key={p.id} className="v2-card" href={`https://${p.repo}.github.io/`}>
            <div className="num">CH.{p.num} ▮ {p.status}</div>
            <h3>{p.title}</h3>
            <div className="ja-title">プロジェクト名 / {p.title.toUpperCase()}</div>
            <div className="desc">{p.desc}</div>
            <div className="meta-row">
              <span className="repo">{p.repo}</span>
              <span className="arr">▶</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Variation 3: Hologram / Glass ────────────────────────────────
function V3Hologram({ projects, density, radius }) {
  const cols = density === 'tight' ? 3 : density === 'normal' ? 3 : 2;
  const gap = density === 'tight' ? 12 : density === 'normal' ? 18 : 28;
  return (
    <div className="frame v3" style={{ '--cols': cols, '--gap': gap + 'px', '--radius': radius + 'px' }}>
      <div className="v3-orbit" />
      <div className="v3-header">
        <div className="lhs">
          <div className="eyebrow">// PROJECTS · 2026</div>
          <h1>Index</h1>
        </div>
        <div className="rhs">
          <div className="live"><span className="pulse" /> ALL SYSTEMS NOMINAL</div>
          <div style={{ marginTop: 4 }}>{projects.length} repositories · github.io</div>
        </div>
      </div>
      <div className="v3-grid">
        {projects.map(p => (
          <a
            key={p.id}
            className="v3-card"
            href={`https://${p.repo}.github.io/`}
            style={{ '--card-accent': ACCENT_VAR[p.accent] }}
          >
            <div className="topline">
              <div className="num">{p.num} / {String(projects.length).padStart(2, '0')}</div>
              <div className={`status-pill ${p.status}`}>● {p.status}</div>
            </div>
            <h3>{p.title}</h3>
            <div className="desc">{p.desc}</div>
            <div className="footer-row">
              <div className="tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="go">↗</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { V1Terminal, V2Glitch, V3Hologram });
