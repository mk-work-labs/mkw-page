// Works page layout

function WorksPage() {
  return (
    <div className="subpage">
      <div className="eyebrow">// WORKS · 2026</div>
      <h1>Works</h1>
      <div className="body">
        <p>
          ここは Works ページのプレースホルダです。これまでの制作物や案件、
          実験的なプロトタイプなどを後ほど一覧化します。
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="back">
        <a href="../">← BACK TO INDEX</a>
      </div>
    </div>
  );
}

Object.assign(window, { WorksPage });
