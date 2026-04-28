// About page layout

function AboutPage() {
  return (
    <div className="subpage">
      <div className="eyebrow">// ABOUT · 2026</div>
      <h1>About</h1>
      <div className="body">
        <p>
          ここは About ページのプレースホルダです。プロフィールや活動の概要、
          連絡先などを後ほど差し込みます。
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="back">
        <a href="../">← BACK TO INDEX</a>
      </div>
    </div>
  );
}

Object.assign(window, { AboutPage });
