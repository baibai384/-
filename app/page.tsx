import type { Metadata } from "next";
import "./tutorial.css";
import "./outline.css";

export const metadata: Metadata = {
  title: "苹果键盘皮肤制作｜零基础图文教程",
  description: "从打开底包到替换背景、按键、动效和音效的图文教程。",
};

export default function Home() {
  return (
    <main>
      <input className="theme-input" type="checkbox" id="theme-toggle" aria-label="切换白天或黑夜模式" />
      <nav className="top-nav" aria-label="教程章节导航"><a href="#top" className="brand">键盘皮肤教程</a><div><a href="#outline">总目录</a><a href="#prepare">准备</a><a href="#file-manifest">文件</a><a href="#background">背景</a><a href="#layouts">按键</a><a href="#day-night">日夜</a><a href="#animation">动效</a><a href="#trouble">排错</a></div><label className="theme-switch" htmlFor="theme-toggle"><span className="night-label">黑夜</span><span className="day-label">白天</span></label></nav>
      <header className="hero" id="top">
        <div className="hero-meta"><span>ISSUE 01 / 2026</span><span>DESIGN YOUR INPUT</span></div>
        <div className="eyebrow">APPLE KEYBOARD SKIN · BEGINNER GUIDE</div>
        <h1>键盘皮肤<br /><span>制作指南</span></h1>
        <p>从底包结构到视觉替换。用最清晰的路径，做出真正属于你的输入界面。</p>
        <div className="hero-actions">
          <a className="primary" href="#background">先学更换背景</a>
          <a className="secondary" href="#roadmap">查看学习路线</a>
        </div>
        <div className="key-orbit" aria-hidden="true">{Array.from({ length: 10 }).map((_, i) => <i key={i} />)}<b>CREATE<br/>YOUR KEY</b></div>
      </header>
      <section className="course-outline" id="outline">
        <div className="outline-heading"><div><span>COURSE MAP</span><h2>先看总纲，再开始制作</h2></div><p>这份教程按照真正的制作顺序排列。第一次学习建议从第 1 章开始；以后查文件时，可以直接点击对应章节。</p></div>
        <div className="outline-grid">
          <a href="#prepare"><b>01</b><span>准备与备份</span><small>工具、解压、目录结构、四条不能改的规则</small></a>
          <a href="#file-manifest"><b>02</b><span>认识文件</span><small>26键、九宫格、数字、背景、前景文件清单</small></a>
          <a href="#background"><b>03</b><span>更换背景</span><small>abj.png 的位置、制作方法和横竖屏检查</small></a>
          <a href="#layouts"><b>04</b><span>制作按键</span><small>看懂 KEY 辅助图，制作普通与按下状态</small></a>
          <a href="#sticker-tools"><b>05</b><span>处理贴纸</span><small>分层、移动缩放、调色、描边与阴影</small></a>
          <a href="#day-night"><b>06</b><span>白天与黑夜</span><small>light、dark 两套素材如何逐项对应</small></a>
          <a href="#animation"><b>07</b><span>制作动效</span><small>anim.ini、漂浮图、光波与飞起字母</small></a>
          <a href="#replace"><b>08</b><span>其他素材</span><small>前景、Logo、文字颜色、音效与完整替换流程</small></a>
          <a href="#trouble"><b>09</b><span>打包与排错</span><small>压缩、导入、测试和常见故障处理</small></a>
        </div>
        <div className="outline-route"><strong>推荐学习路线</strong><span>先备份</span><i>→</i><span>只改一类文件</span><i>→</i><span>立即测试</span><i>→</i><span>成功后再改下一类</span></div>
      </section>
      <section className="quick-grid" id="roadmap">
        <article><b>01</b><h2>打开底包</h2><p>下载、改名、解压，找到 skin。</p></article>
        <article><b>02</b><h2>认识素材</h2><p>分清面板、前景、动效与音效。</p></article>
        <article><b>03</b><h2>逐项替换</h2><p>保持文件名、尺寸与目录不变。</p></article>
        <article><b>04</b><h2>打包测试</h2><p>浅色、深色、横竖屏逐一检查。</p></article>
      </section>
      <section className="chapter featured" id="background">
        <div className="chapter-kicker">03 · 更换背景 / BACKGROUND</div>
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
      <section className="chapter file-manifest" id="file-manifest">
        <div className="chapter-kicker">02 · 认识文件 / FILE MANIFEST</div>
        <h2>想改哪一部分，就替换这些文件</h2>
        <p className="lead">下面的文件名来自你提供的底包注释图。先在 <code>skin/light</code> 中搜索文件名；如果还有 <code>skin/dark</code>，同名文件也要做一份深色版本。底包目录可能略有不同，所以最终以“搜索到的实际路径”为准。</p>
        <div className="reference-table-wrap"><h3>底包文件名总表</h3><p>表格由你提供的图片注释整理，名称后面的 <code>*</code> 表示底包中可能还有编号、尺寸或状态后缀。</p><div className="reference-table">
          <div className="reference-head"><b>分类</b><b>文件名</b><b>作用</b><b>配套或注意事项</b></div>
          <div><span>按键面板</span><code>9.png</code><p>九宫格普通面板</p><small>与 9a.png 配套</small></div>
          <div><span>按键面板</span><code>9a.png</code><p>九宫格按下状态</p><small>按下反馈</small></div>
          <div><span>按键面板</span><code>26.png / 26a.png</code><p>26 键中文普通／按下</p><small>必须成对替换</small></div>
          <div><span>按键面板</span><code>123.png / 123a.png</code><p>数字普通／按下</p><small>必须成对替换</small></div>
          <div><span>按键面板</span><code>26y.png / 26ya.png</code><p>26 键英文普通／按下</p><small>英文布局</small></div>
          <div><span>按键面板</span><code>shouxie.png</code><p>手写面板</p><small>参考尺寸 1080×595</small></div>
          <div><span>按键面板</span><code>axmb.png</code><p>符号和候选字面板</p><small>参考尺寸 1080×704</small></div>
          <div><span>背景</span><code>abj.png</code><p>背景＋顶栏</p><small>顶栏通常已经贴在背景上</small></div>
          <div><span>官方扩展</span><code>26sd.png / 26sda.png</code><p>26 键锁定普通／按下</p><small>只有部分官方方向底包存在</small></div>
          <div><span>官方扩展</span><code>26dx.png / 26dxa.png</code><p>26 键大写普通／按下</p><small>只有部分官方方向底包存在</small></div>
          <div><span>弹起气泡</span><code>ajgn* / aj* / pop* / hiht*</code><p>26 键飞起的按键和字母</p><small>先查看配置引用</small></div>
          <div><span>前景</span><code>qj*</code><p>字母键、数字键文字</p><small>可能存在多个尺寸版本</small></div>
          <div><span>前景</span><code>gnqj*</code><p>功能键前景</p><small>删除、发送、空格等</small></div>
          <div><span>前景</span><code>qja*</code><p>按下状态字母</p><small>与普通字母前景配套</small></div>
          <div><span>图标</span><code>dltb*</code><p>顶栏左右角图标</p><small>检查 iOS / Android 版本</small></div>
          <div><span>图标</span><code>atb*</code><p>按压图标／动效素材</p><small>不同底包用途可能不同</small></div>
          <div><span>图标</span><code>axxtb*</code><p>按下小图标</p><small>不需要时先确认引用再处理</small></div>
          <div><span>动效</span><code>aguangbo*</code><p>光波图片</p><small>保留透明画布</small></div>
          <div><span>动效</span><code>axtb*</code><p>漂浮以及小图标</p><small>不同尺寸不要混用</small></div>
          <div><span>Logo</span><code>logo / ios / 1.0</code><p>顶栏中间及苹果端 Logo</p><small>根层直接看到的图片可能是安卓版本</small></div>
        </div></div>
        <article className="manifest-card featured-manifest">
          <div className="manifest-title"><span>重点</span><h3>修改 26 键背景 / 按键面板</h3></div>
          <div className="manifest-grid">
            <div><b>26 键中文普通状态</b><code>26.png</code><p>键盘正常显示时看到的面板。</p></div>
            <div><b>26 键中文按下状态</b><code>26a.png</code><p>手指按下按键时显示的面板。</p></div>
            <div><b>26 键英文普通状态</b><code>26y.png</code><p>切换到英文输入时的面板。</p></div>
            <div><b>26 键英文按下状态</b><code>26ya.png</code><p>英文状态下按键按下的面板。</p></div>
            <div><b>26 键锁定普通状态</b><code>26sd.png</code><p>官方方向包才可能存在；搜不到就不用制作。</p></div>
            <div><b>26 键锁定按下状态</b><code>26sda.png</code><p>与 26sd.png 配套；搜不到就跳过。</p></div>
            <div><b>26 键大写普通状态</b><code>26dx.png</code><p>开启大写字母时显示；官方方向包才可能存在。</p></div>
            <div><b>26 键大写按下状态</b><code>26dxa.png</code><p>与 26dx.png 配套；搜不到就跳过。</p></div>
          </div>
          <div className="path-examples"><b>常见位置（每个实际存在的位置都要检查）</b><code>skin / light / res / 文件名.png</code><code>skin / light / port / res / 文件名.png　（竖屏，如存在）</code><code>skin / light / land / res / 文件名.png　（横屏，如存在）</code><code>skin / dark / … / 文件名.png　（深色模式，如存在）</code></div>
          <div className="manifest-answer"><strong>最简单的判断：</strong>只改中文 26 键，至少替换 <code>26.png + 26a.png</code>；中文和英文都要改，则至少替换 <code>26.png + 26a.png + 26y.png + 26ya.png</code>。如果搜索到 <code>26sd / 26sda / 26dx / 26dxa</code>，也要成对替换。</div>
        </article>
        <div className="manifest-list">
          <article><span>九宫格</span><h3>9 键面板</h3><code>9.png</code><code>9a.png</code><p>普通状态＋按下状态，两张必须配套。</p></article>
          <article><span>数字</span><h3>数字面板</h3><code>123.png</code><code>123a.png</code><p>数字键普通状态＋按下状态。</p></article>
          <article><span>手写</span><h3>手写面板</h3><code>shouxie.png</code><p>主要书写区域及周围功能键面板。</p></article>
          <article><span>候选</span><h3>符号与候选字</h3><code>axmb.png</code><p>符号页和候选字区域面板。</p></article>
          <article><span>背景</span><h3>整张背景＋顶栏</h3><code>abj.png</code><p>浅色与深色、横屏与竖屏中存在的同名文件都要替换。</p></article>
          <article><span>文字</span><h3>字母与功能键前景</h3><code>qj*.png</code><code>gnqj*.png</code><code>qja*.png</code><p>底包可能带尺寸后缀；搜索前缀并成套检查。</p></article>
          <article><span>图标</span><h3>顶栏与按键图标</h3><code>dltb*.png</code><code>atb*.png</code><code>axxtb*.png</code><p>星号表示可能有多个尺寸或状态版本。</p></article>
          <article><span>动效</span><h3>漂浮与光波</h3><code>axtb*.png</code><code>aguangbo*.png</code><p>先在 anim.ini 中确认实际引用的文件名。</p></article>
        </div>
        <div className="replace-checklist"><h3>每次替换前，按这 5 项核对</h3><ol><li>搜索文件名，记录它出现的全部目录。</li><li>普通状态和带 <code>a</code> 的按下状态成对替换。</li><li>检查 light 与 dark。</li><li>检查 port（竖屏）与 land（横屏）。</li><li>保持原尺寸、透明背景、文件名和 PNG 格式不变。</li></ol></div>
      </section>
      <section className="chapter animation-guide" id="animation">
        <div className="chapter-kicker">07 · 制作动效 / ANIMATION</div>
        <h2>动效要改配置，也要替换被引用的图片</h2>
        <p className="lead">不要只看到一张动效图片就直接覆盖。先打开 <code>anim.ini</code>，确认它实际调用了哪些图片；图片负责“长什么样”，配置文件负责“怎么飞、出现多少、显示多久”。</p>
        <div className="animation-files">
          <article><span>控制文件</span><h3><code>anim.ini</code></h3><p>记录动效图片名称、速度、数量、寿命和缩放。修改前必须备份。</p></article>
          <article><span>漂浮与小图标</span><h3><code>axtb*.png</code></h3><p>资料标注为漂浮以及小图标。星号表示底包中可能带编号或尺寸后缀。</p></article>
          <article><span>光波</span><h3><code>aguangbo*.png</code></h3><p>按键触发时出现的光波图片。透明区域和画布尺寸不能随意裁剪。</p></article>
          <article><span>26 键飞起效果</span><h3><code>ajgn* / aj* / pop* / hiht*</code></h3><p>你提供的注释把这些标为 pop 气泡，即 26 键飞起来的按键和字母。具体名称以底包实际文件为准。</p></article>
        </div>
        <div className="anim-paths"><h3>通常要检查的目录</h3><code>skin / light / res / anim.ini</code><code>skin / light / res / 动效图片.png</code><code>skin / dark / res / anim.ini　（如存在）</code><code>skin / dark / res / 动效图片.png　（如存在）</code><p>如果 <code>port</code> 或 <code>land</code> 中也有 <code>anim.ini</code> 或同名图片，竖屏和横屏版本也要分别检查。</p></div>
        <ol className="anim-steps">
          <li><span>01</span><div><h3>复制整个动效文件组</h3><p>先备份 <code>anim.ini</code> 和它所在目录里的所有 PNG。这样配置改坏时可以完整恢复。</p></div></li>
          <li><span>02</span><div><h3>打开 anim.ini 找图片名</h3><p>搜索 <code>.png</code> 或 <code>PARTICLE_IMAGE</code>。把找到的每个文件名记下来，不要凭感觉猜图片。</p></div></li>
          <li><span>03</span><div><h3>先只换同名图片</h3><p>新手第一次不要改参数。用原图当画布模板，保持尺寸和透明背景，导出后使用完全相同的文件名覆盖。</p></div></li>
          <li><span>04</span><div><h3>重新打包测试</h3><p>分别按字母、空格、删除和发送键，观察哪个操作触发动效；再检查 26 键中文、英文、横竖屏和深色模式。</p></div></li>
          <li><span>05</span><div><h3>确认图片正常后再调参数</h3><p>每次只改一个数值并记录原值。一次修改太多时，很难判断是哪一项导致动效消失或铺满屏幕。</p></div></li>
        </ol>
        <div className="parameter-table">
          <div><code>PARTICLE_IMAGE</code><b>使用哪张图片</b><p>图片名必须与实际文件完全一致，包括大小写和后缀。</p></div>
          <div><code>VELOCITY</code><b>移动速度</b><p>数值改变后先小范围测试，不要一次提高太多。</p></div>
          <div><code>BIRTH_RATE</code><b>出现数量/频率</b><p>太高会让画面拥挤，也可能影响流畅度。</p></div>
          <div><code>LIFE</code><b>显示时间</b><p>太短像没出现，太长会在屏幕上堆积。</p></div>
          <div><code>SCALE</code><b>显示大小</b><p>放大前注意图片清晰度和按键遮挡。</p></div>
        </div>
        <div className="anim-diagnosis"><h3>动效不显示时按顺序检查</h3><ol><li><code>anim.ini</code> 中的图片名是否与文件完全一致。</li><li>图片是否放回配置引用的原目录。</li><li>PNG 是否真的带透明通道，而不是只改了扩展名。</li><li><code>LIFE</code>、<code>SCALE</code> 或透明度是否被设为 0。</li><li>是否只改了 light，却正在使用 dark；或只改竖屏，却正在测试横屏。</li><li>恢复原始 <code>anim.ini</code> 测试：恢复后正常，说明问题在参数；仍不正常，重点检查图片和路径。</li></ol></div>
        <div className="optional-effects"><h3>如果不想要某一种动效</h3><div><article><b>不要漂浮</b><p>资料建议处理底包中的 <code>axtb</code>；不要直接删除前，先在 <code>anim.ini</code> 和 CSS 中搜索它是否仍被引用。</p></article><article><b>不要按压动效</b><p>检查 <code>atb</code>。有些底包把它作为按压图标或动效素材，确认用途后再换透明占位图或移除引用。</p></article><article><b>不要按下小漂浮</b><p>检查 <code>axxtb</code>。它与 <code>axtb</code> 可能尺寸不同，不能混用同一张图。</p></article><article><b>不要 26 键飞起气泡</b><p>检查 <code>port</code> 中的 <code>hiht.ini</code> 及其引用；不想显示字母时，再检查 CSS 的 <code>pop</code> 点击颜色。资料给出的透明色示例是 <code>00ffffff</code>，修改前必须保留原值。</p></article></div></div>
        <div className="static-warning"><strong>先确认底包类型：</strong>无动效键盘不能仅靠加入图片变成动效键盘。如果底包本身是静态的，添加动效素材通常不会生效。已有动效底包中的 <code>atb</code> 与 <code>axtb</code> 也可能画布尺寸不同，建议分别制作。</div>
      </section>
      <section className="chapter day-night-guide" id="day-night">
        <div className="chapter-kicker">06 · 白天与黑夜 / LIGHT &amp; DARK</div>
        <h2>白天和黑夜模式要分开制作</h2>
        <p className="lead">白天模式读取 <code>skin/light</code>，黑夜模式通常读取 <code>skin/dark</code>。它们是两套独立素材：修改了 light，不代表 dark 会自动变化。</p>
        <div className="mode-compare">
          <article className="light-mode-card"><span>白天模式</span><h3>skin / light</h3><p>适合明亮背景和深色文字。先完成这一套并测试成功，再制作黑夜模式。</p><code>skin / light / res / …</code></article>
          <article className="dark-mode-card"><span>黑夜模式</span><h3>skin / dark</h3><p>适合深色背景和浅色文字。不能只把背景变黑，还要检查文字、图标和按下状态。</p><code>skin / dark / res / …</code></article>
        </div>
        <div className="mode-file-table">
          <div className="table-head"><b>修改内容</b><b>白天模式</b><b>黑夜模式</b><b>必须同时检查</b></div>
          <div><strong>整张背景＋顶栏</strong><code>light/.../abj.png</code><code>dark/.../abj.png</code><p>背景与候选栏文字的对比度。</p></div>
          <div><strong>26 键中文</strong><code>light/.../26.png<br/>light/.../26a.png</code><code>dark/.../26.png<br/>dark/.../26a.png</code><p>普通状态和按下状态。</p></div>
          <div><strong>26 键英文</strong><code>light/.../26y.png<br/>light/.../26ya.png</code><code>dark/.../26y.png<br/>dark/.../26ya.png</code><p>英文普通状态和按下状态。</p></div>
          <div><strong>九宫格</strong><code>light/.../9.png<br/>light/.../9a.png</code><code>dark/.../9.png<br/>dark/.../9a.png</code><p>数字、字母和功能键是否清晰。</p></div>
          <div><strong>数字面板</strong><code>light/.../123.png<br/>light/.../123a.png</code><code>dark/.../123.png<br/>dark/.../123a.png</code><p>符号与按下反馈。</p></div>
          <div><strong>文字与功能键</strong><code>light/.../qj*<br/>light/.../gnqj*<br/>light/.../qja*</code><code>dark/.../qj*<br/>dark/.../gnqj*<br/>dark/.../qja*</code><p>浅底用深字，深底用浅字。</p></div>
          <div><strong>动效</strong><code>light/.../anim.ini<br/>light/.../动效图.png</code><code>dark/.../anim.ini<br/>dark/.../动效图.png</code><p>配置引用、透明度与可见度。</p></div>
          <div><strong>文字颜色与音效</strong><code>light/.../default.css</code><code>dark/.../default.css</code><p>颜色值、声音路径及引用文件。</p></div>
        </div>
        <ol className="mode-steps">
          <li><span>01</span><div><h3>先确认 dark 是否存在</h3><p>在 <code>skin</code> 下查找 <code>dark</code>。如果原底包没有，不要直接新建空文件夹；先确认该底包是否支持黑夜模式。</p></div></li>
          <li><span>02</span><div><h3>先完成 light</h3><p>把白天模式全部测试正常，保留一份完整备份，再复制设计思路制作 dark。</p></div></li>
          <li><span>03</span><div><h3>按同名文件逐项对应</h3><p>在 light 中改过什么，就到 dark 中搜索同名文件。只有实际存在的文件才需要替换。</p></div></li>
          <li><span>04</span><div><h3>重新调整颜色，不要机械变暗</h3><p>黑夜版应单独检查文字、图标、按键边界与图片透明度，避免黑字落在深色背景上。</p></div></li>
          <li><span>05</span><div><h3>真机切换测试</h3><p>分别在白天与黑夜模式中测试中文、英文、数字、横屏、竖屏、按下状态、动效和音效。</p></div></li>
        </ol>
        <div className="mode-warning"><strong>判断规则：</strong>如果 dark 目录存在，白天和黑夜必须当作两套皮肤分别完成；如果 dark 目录不存在，就先只做 light，不要复制一个空 dark 目录冒充支持。</div>
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
      <section className="chapter faq-section" id="faq"><div className="chapter-kicker">补充资料 / FAQ</div><h2>尺寸、兼容、Logo 和声音问题</h2><div className="faq-list">
        <details open><summary>为什么符号面板被裁掉一半？</summary><div><p>旧底包的符号面板可能使用了不同尺寸。把符号面板调整为 <code>1080×704</code> 后，再导入底包测试。</p></div></details>
        <details><summary>为什么图片贴进去后缺少一半？</summary><div><p>优先检查画布尺寸：按键面板参考 <code>1080×641</code>，手写面板参考 <code>1080×595</code>，符号面板参考 <code>1080×704</code>。尺寸不对应就可能被裁切。</p></div></details>
        <details><summary>为什么贴图边缘出现缝隙？</summary><div><p>常见原因是使用了半透明素材贴图。半透明边缘叠加后容易露出缝隙；检查边缘透明度，并在原尺寸画布中重新贴合。</p></div></details>
        <details><summary>不想要 Logo，或想让 Logo 透明怎么办？</summary><div><p>资料建议检查 <code>Port</code> 目录中的 <code>logo.ini</code>；也可以把 logo 文件夹里的对应图片制作成透明 PNG，或替换为透明 Logo 包。先备份配置，不要直接删除整个 logo 文件夹。</p></div></details>
        <details><summary>为什么转到苹果后 Logo 没变化？</summary><div><p>检查 <code>logo</code> 文件夹中的 <code>ios</code> 子文件夹，或 <code>1.0</code> 文件夹外层的 <code>pop</code> 图片是否也已替换。根层直接看到的 Logo 可能是安卓版本。</p></div></details>
        <details><summary>苹果端切换面板时闪退怎么办？</summary><div><p>检查 <code>logo/ios</code> 或 <code>logo/1.0</code> 内的图片尺寸。资料建议最大不要超过 <code>150×150</code>，过大的 Logo 可能导致切换面板闪退。</p></div></details>
        <details><summary>为什么转成安卓后不兼容？</summary><div><p>安卓使用时建议采用文件压缩方式，并确认压缩包打开后能直接看到 <code>skin</code>。还要检查 <code>info</code> 中的 <code>Auther</code> 一行是否等于 <code>1</code>；资料特别提醒不要随意修改这一行。</p></div></details>
        <details><summary>为什么 iOS 做完后仍显示原皮肤？</summary><div><p>检查压缩包：根层只能有一个名称完全为 <code>skin</code> 的文件夹，不能带符号、多余字母或再套一层目录。</p></div></details>
        <details><summary>开场动画换了，声音为什么没变？</summary><div><p>开场声音通常是底包中的 <code>ajtq.ogg</code> 和 <code>ajtq.aiff</code>。替换对应格式的音效，并控制在约 9 秒以内；不要只修改文件扩展名。</p></div></details>
        <details><summary>为什么转成安卓后没有声音？</summary><div><p>检查 CSS 中引用的 <code>aiff</code> 是否已改成 <code>ogg</code>，并放入真正转换过的 OGG 音频。AIFF 不能只改后缀后当作 OGG 使用。</p></div></details>
        <details><summary>26y、bh 和带 a 的文件代表什么？</summary><div><p><code>26y</code> 是 26 键英文面板，<code>bh</code> 是笔画面板；名称后带 <code>a</code> 通常表示按压后的状态面板。</p></div></details>
        <details><summary>底包下载失败怎么办？</summary><div><p>先确认文件是否仍可下载、存储空间是否足够；如果来源于群文件，再查看群文件中的离线下载说明或重新下载。</p></div></details>
      </div></section>
      <section className="chapter sticker-tools" id="sticker-tools"><div className="chapter-kicker">05 · 处理贴纸 / STICKER TOOLS</div><h2>把人物和装饰做得清楚、有层次</h2><p className="lead">视频使用绘画软件演示，按钮名称可能与 Procreate 略有不同，但操作逻辑相同：每张贴纸独立分层，先确定位置和大小，再调颜色、描边和阴影。</p>
        <div className="sticker-overview"><article><b>01</b><h3>分层</h3><p>人物、眼镜、装饰、按键和背景分别放在不同图层。</p></article><article><b>02</b><h3>变换</h3><p>移动、缩放和旋转贴纸，避免挡住重要功能键。</p></article><article><b>03</b><h3>统一颜色</h3><p>用自调颜色或色相调整，让素材融入整套键盘配色。</p></article><article><b>04</b><h3>增强边界</h3><p>增加描边与阴影，使浅色贴纸在复杂背景上仍然清楚。</p></article></div>
        <div className="tool-lessons">
          <article><span>第一步</span><h3>贴纸分层与组合</h3><ol><li>导入人物或装饰后，立即放到独立图层。</li><li>眼镜、发饰和小图标等部件继续单独建层。</li><li>使用移动/变换工具调整位置、大小和角度。</li><li>通过图层上下顺序决定遮挡关系。</li><li>组合完成前不要急着合并图层。</li></ol><div className="tool-tip">人物不能挡住删除、空格、发送、中英文切换和主要字母区域。</div></article>
          <article><span>第二步</span><h3>自调颜色</h3><ol><li>先选中贴纸图层，不要选到按键或背景。</li><li>开启透明锁定、剪贴蒙版或等效功能。</li><li>选择目标颜色，小范围试涂或填充。</li><li>调整图层透明度，保留原图明暗细节。</li><li>返回完整键盘画面检查整体效果。</li></ol><div className="tool-tip">适合把不同来源的素材统一为同一套主题色。</div></article>
          <article><span>第三步</span><h3>增加描边</h3><ol><li>复制贴纸图层，把复制层放在原贴纸下方。</li><li>选中下层贴纸的轮廓。</li><li>扩展选区，或使用描边/边界效果。</li><li>填入白色、深色或主题强调色。</li><li>缩小查看，避免描边过粗遮住细节。</li></ol><div className="tool-tip">复杂背景优先使用浅色描边；浅色背景可用深色描边。</div></article>
          <article><span>第四步</span><h3>色相、饱和度与亮度</h3><ol><li><b>色相：</b>改变整体颜色倾向。</li><li><b>饱和度：</b>控制鲜艳程度。</li><li><b>亮度：</b>控制明暗，并保证文字清楚。</li><li>一次只动一个参数，记录原值。</li><li>在白天和黑夜背景中分别检查。</li></ol><div className="tool-tip">建议顺序：先色相，再饱和度，最后用亮度微调。</div></article>
          <article><span>第五步</span><h3>添加阴影</h3><ol><li>复制贴纸图层并放到原图下方。</li><li>把下层填成深色或主题阴影色。</li><li>轻微移动，形成方向一致的投影。</li><li>适当模糊并降低透明度。</li><li>检查阴影是否越过按键边界。</li></ol><div className="tool-tip">阴影应帮助区分层次，避免过黑、过大或方向混乱。</div></article>
        </div>
        <div className="sticker-check"><h3>导出前检查</h3><ul><li>隐藏参考线和辅助图。</li><li>确认透明背景仍然透明。</li><li>检查误擦、白边和半透明缝隙。</li><li>按原画布尺寸导出 PNG。</li><li>先保存可编辑源文件，再合并导出副本。</li></ul></div>
      </section>
      <footer><a href="#top">回到顶部 ↑</a><p>苹果键盘皮肤制作 · 零基础图文教程</p></footer>
    </main>
  );
}
