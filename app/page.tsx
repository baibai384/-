import type { Metadata } from "next";
import "./tutorial.css";

export const metadata: Metadata = {
  title: "苹果键盘皮肤制作｜零基础图文教程",
  description: "从打开底包到替换背景、按键、动效和音效的图文教程。",
};

export default function Home() {
  return (
    <main>
      <nav className="top-nav" aria-label="教程章节导航"><a href="#top" className="brand">键盘皮肤教程</a><div><a href="#prepare">准备</a><a href="#background">换背景</a><a href="#layouts">按键图</a><a href="#replace">完整流程</a><a href="#trouble">排错</a></div></nav>
      <header className="hero" id="top">
        <div className="eyebrow">APPLE KEYBOARD SKIN · BEGINNER GUIDE</div>
        <h1>苹果键盘皮肤制作<br /><span>零基础图文教程</span></h1>
        <p>先认识底包，再一次只改一项。每一步都告诉你改什么、在哪里改、怎么检查。</p>
        <div className="hero-actions">
          <a className="primary" href="#background">先学更换背景</a>
          <a className="secondary" href="#roadmap">查看学习路线</a>
        </div>
      </header>
      <section className="quick-grid" id="roadmap">
        <article><b>01</b><h2>打开底包</h2><p>下载、改名、解压，找到 skin。</p></article>
        <article><b>02</b><h2>认识素材</h2><p>分清面板、前景、动效与音效。</p></article>
        <article><b>03</b><h2>逐项替换</h2><p>保持文件名、尺寸与目录不变。</p></article>
        <article><b>04</b><h2>打包测试</h2><p>浅色、深色、横竖屏逐一检查。</p></article>
      </section>
      <section className="chapter featured" id="background">
        <div className="chapter-kicker">最常问的问题</div>
        <h2>如果要更换背景，需要换哪些文件？</h2>
        <p className="lead">主背景文件是 <code>abj.png</code>。资料明确标注：<strong>abj = 背景＋顶栏</strong>，顶栏通常已经贴在背景图上方。</p>
        <div className="path-card required"><span>必须替换 · 浅色模式</span><code>底包 / skin / light / res / abj.png</code></div>
        <div className="path-card conditional"><span>有深色模式时也要替换</span><code>底包 / skin / dark / res / abj.png</code></div>
        <div className="note"><strong>仍需检查：</strong>如果底包在 <code>land</code> 或 <code>port</code> 中还有同名 <code>abj.png</code>，它们分别控制横屏或竖屏，也要制作对应尺寸的版本。最稳妥的方法是在底包内搜索“abj”，把实际存在且被使用的版本全部列出来。</div>
        <ol className="steps">
          <li><span>1</span><div><h3>备份原图</h3><p>复制原来的 <code>abj.png</code>，不要直接在唯一原件上修改。</p></div></li>
          <li><span>2</span><div><h3>用原图当模板</h3><p>导入 Procreate，保持画布宽高不变。顶栏若已在图上，不要把它裁掉。</p></div></li>
          <li><span>3</span><div><h3>放入新背景</h3><p>让新图铺满画布；背景太花时降低饱和度或加半透明浅色层。</p></div></li>
          <li><span>4</span><div><h3>原名导出并覆盖</h3><p>导出 PNG，仍命名为 <code>abj.png</code>，放回原目录并选择替换。</p></div></li>
          <li><span>5</span><div><h3>重新打包测试</h3><p>检查顶栏、候选栏、按键文字、横竖屏及深色模式是否清晰。</p></div></li>
        </ol>
        <figure><img src="/tutorial/file-map.jpg" alt="底包图片文件命名注释表，其中 abj 表示背景加顶栏" /><figcaption>底包命名辅助图：第 15 行标注“abj = 背景＋顶栏”。</figcaption></figure>
      </section>
      <section className="chapter ruled" id="prepare"><div className="chapter-kicker">开始之前</div><h2>先把底包看成一套“可替换零件”</h2><div className="definition-grid"><article><code>PNG</code><h3>图片零件</h3><p>背景、按键、人物、Logo 和装饰。</p></article><article><code>default.css</code><h3>样式说明书</h3><p>文字颜色、音效路径和状态设置。</p></article><article><code>anim.ini</code><h3>动效说明书</h3><p>漂浮图片、速度、数量和显示方式。</p></article><article><code>AIFF / OGG</code><h3>声音零件</h3><p>普通键、删除、空格和发送音效。</p></article></div><div className="rule-banner">核心规则：只替换内容，不随便改变文件名、扩展名、尺寸和目录位置。</div><h3 className="subhead">准备工具</h3><ul className="check-list"><li>可正常导入的键盘底包</li><li>解压专家（DZip）</li><li>苹果“文件”App</li><li>Procreate</li><li>有授权的图片、字体和音效</li></ul><h3 className="subhead">打开底包</h3><ol className="compact-steps"><li>从 QQ 或网盘下载底包。</li><li>分享到解压专家。</li><li>在“我的文件夹”找到 ZIP，执行解压缩。</li><li>进入解压后的目录，找到 <code>skin</code>。</li><li>先复制原包，保留一个禁止修改的备份。</li></ol><pre className="tree">{`底包
└─ skin
   ├─ light
   │  ├─ land
   │  ├─ port
   │  └─ res
   │     ├─ logo
   │     ├─ abj.png
   │     ├─ default.css
   │     └─ anim.ini
   └─ dark（如果有）`}</pre></section>
      <section className="wide-section" id="layouts"><div className="section-heading"><div><div className="chapter-kicker">底包按键辅助图</div><h2>先认位置，再画贴图</h2></div><p>文件名代表一整块面板，图中的 KEY 编号代表具体按键。辅助图放在 Procreate 最底层，成品导出前要隐藏。</p></div><div className="image-grid"><figure><img src="/tutorial/keyboard-26.png" alt="26键键盘KEY辅助图" /><figcaption><b>26 键</b>：26.png；按下状态是 26a.png。</figcaption></figure><figure><img src="/tutorial/keyboard-9.png" alt="九宫格键盘KEY辅助图" /><figcaption><b>九宫格</b>：9.png；按下状态是 9a.png。</figcaption></figure><figure><img src="/tutorial/numeric.png" alt="数字符号键盘KEY辅助图" /><figcaption><b>数字面板</b>：123.png；按下状态是 123a.png。</figcaption></figure><figure><img src="/tutorial/handwriting.png" alt="手写键盘KEY辅助图" /><figcaption><b>手写面板</b>：shouxie.png；KEY18 是主要书写区。</figcaption></figure><figure><img src="/tutorial/candidate-panel.png" alt="符号和候选字面板KEY辅助图" /><figcaption><b>符号和候选字面板</b>：axmb.png。</figcaption></figure><figure><img src="/tutorial/file-map.jpg" alt="底包素材文件命名说明" /><figcaption><b>文件命名表</b>：普通、按下、前景和动效名称速查。</figcaption></figure></div><div className="mini-note">同一个 KEY 编号在不同布局里可能是不同功能，必须对着当前布局的辅助图使用。</div></section>
      <section className="chapter ruled" id="replace"><div className="chapter-kicker">完整制作流程</div><h2>一次只替换一类素材</h2><div className="accordion-list">
        <details open><summary><span>01</span>更换按键面板与贴图</summary><div><p>在 <code>skin/light/res</code> 中找到要改的普通面板及对应按下状态：</p><div className="file-pairs"><code>9.png ↔ 9a.png</code><code>26.png ↔ 26a.png</code><code>123.png ↔ 123a.png</code><code>26y.png ↔ 26ya.png</code></div><ol><li>把原图导入 Procreate，当作尺寸模板。</li><li>辅助图放底层并降低透明度。</li><li>在新图层制作按键，不能越过对应 KEY 边界。</li><li>隐藏辅助图，按原文件名导出 PNG。</li><li>覆盖原文件，打包测试普通和按下状态。</li></ol></div></details>
        <details><summary><span>02</span>更换前景与按键文字</summary><div><p>前景负责字母、数字、符号和功能文字。常见名称：<code>qj</code>（字母/数字文字）、<code>gnqj</code>（功能键前景）、<code>qja</code>（按下状态字母前景）。</p><p>人物装饰不要挡住空格、删除、发送和中英文切换。导出时保留透明背景。</p></div></details>
        <details><summary><span>03</span>更换顶栏 Logo</summary><div><p>位置通常在 <code>skin/light/res/logo</code>。根目录直接看到的图片多为安卓 Logo；苹果图标常在里面的子文件夹。普通、按下及不同尺寸版本要成套替换。</p></div></details>
        <details><summary><span>04</span>更换漂浮动效</summary><div><p>先打开 <code>anim.ini</code>，找到 <code>PARTICLE_IMAGE</code> 引用的 PNG。新手先只换同名图片，不改参数。熟练后再逐个调整 <code>VELOCITY</code>、<code>BIRTH_RATE</code>、<code>LIFE</code> 和 <code>SCALE</code>。</p></div></details>
        <details><summary><span>05</span>更换音效</summary><div><p>试听 <code>res</code> 中的 AIFF/OGG，准备同格式短音效，改成原文件名覆盖。再检查 <code>default.css</code> 中的 <code>PRESS_SOUND_PATH</code>。只改后缀不等于转换格式。</p></div></details>
        <details><summary><span>06</span>修改文字颜色</summary><div><p>备份 <code>default.css</code>，搜索 <code>FONT_COLOR</code>、<code>HL_COLOR</code>、<code>NL_COLOR</code>。沿用原文件格式；原来是 8 位十六进制且没有 <code>#</code>，修改后也不要添加。</p></div></details>
        <details><summary><span>07</span>制作深色模式</summary><div><p>浅色版测试成功后，再制作 <code>skin/dark</code>。背景、按键、文字、图标和按下状态都要一起检查。若 dark 中有 <code>abj.png</code>，深色背景也必须单独替换。</p></div></details>
        <details><summary><span>08</span>压缩、导入与测试</summary><div><p>压缩时根目录必须直接看到 <code>skin</code>，不要额外套一层同名文件夹。测试中文、英文、数字、横屏、竖屏、浅色、深色、音效、动效和所有功能键。</p></div></details>
      </div></section>
      <section className="chapter ruled" id="trouble"><div className="chapter-kicker">故障排查</div><h2>出错时，从最常见原因开始</h2><div className="trouble-grid"><article><h3>皮肤无法导入</h3><p>检查压缩包是否多套一层目录、扩展名是否正确、配置文件是否被改坏。</p></article><article><h3>图片不显示</h3><p>检查文件名大小写、后缀、目录和配置引用；JPG 改名为 PNG 不会变成真正的 PNG。</p></article><article><h3>图片错位</h3><p>检查画布尺寸、横竖屏素材、人物是否超出画布，以及是否替换了错误分辨率版本。</p></article><article><h3>文字看不见</h3><p>检查背景对比度、颜色值格式，以及普通状态和按下状态是否都已修改。</p></article><article><h3>没有声音</h3><p>检查真实音频格式、文件名、PRESS_SOUND_PATH 和手机/输入法的按键音设置。</p></article><article><h3>动效不显示</h3><p>检查 anim.ini、被引用的 PNG、透明度和参数是否被改成 0。</p></article></div><div className="safety-card"><h3>不要直接删除“不喜欢”的素材</h3><p>先备份，再在 <code>default.css</code> 和 <code>anim.ini</code> 中搜索文件名。仍被引用时，优先换成透明占位图或正确移除引用。每次只处理一个素材并重新测试。</p></div></section>
      <footer><a href="#top">回到顶部 ↑</a><p>苹果键盘皮肤制作 · 零基础图文教程</p></footer>
    </main>
  );
}
