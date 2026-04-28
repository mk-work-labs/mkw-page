// Layout variations for the project menu page

const ACCENT_VAR = { cyan: 'var(--cyan)', magenta: 'var(--magenta)', lime: 'var(--lime)' };

// Hologram / Glass
function V3Hologram({ projects, density, radius }) {
  const cols = density === 'loose' ? 2 : 3;
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

Object.assign(window, { V3Hologram });
