# CueCue Website Visual Redesign Exploration

## 1. 项目定位

本次项目是一轮首页视觉升级探索，目标不是做完整商业策略、UX 审计或数据分析，而是基于 CueCue 现有产品方向，重新建立更适合海外创作者市场的首页视觉语言。

核心定位：

- 原设计升级
- 新视觉方向探索
- 品牌表达统一
- 模块化卡片系统
- AI Native 设计工作流验证

最终页面目标是让用户在第一屏理解：CueCue 是一个从 card 出发，快速组合 creator bio、RSVP page、product drop、menu、waitlist 或 mini site 的工具。

## 2. 原网站视觉问题概括

原网站提供了清晰的产品事实，例如 Digital Business Card、Link in Bio、Events & RSVP、Web Card 等能力，但整体视觉表达更接近常规产品介绍页。

主要问题：

- 产品能力清楚，但视觉记忆点不足。
- 信息结构偏说明型，缺少强烈的模块拼装感。
- 创作者工具属性没有被充分放大。
- 海外市场下的年轻、动态、可分享感不够强。
- AI Native 和 modular system 的设计语言没有形成显性表达。

因此，本次升级没有改变产品本质，而是重新包装产品感知：从“一个 link/bio 工具”升级为“一个 modular card studio”。

## 3. 视觉升级方向

### 3.1 推荐风格判断

建议方向：70% Linear + 30% Framer。

但实际落地并不是传统 SaaS 风格，而是更偏：

- Editorial Creator Tool
- Modular Card Studio
- AI Modular Interface
- Playful Product System

这套方向比纯 Linear 更有创作者气质，比纯 Framer 更有系统感，也避免了过度营销页或过度装饰化。

### 3.2 设计关键词

- Card-first
- Modular
- Expressive
- Creator-native
- Template-first
- Product-real
- Playful but structured
- One link, many page types

## 4. 视觉系统方案

### 4.1 色彩方向

页面采用高亮色与浅纸感背景结合：

- Lime 用于主行动和高能量信号。
- Cyan 用于链接、页面生成和模块流动感。
- Pink / Coral 用于 product drop 和创作者内容。
- Yellow 用于 RSVP、event 和轻快的行动反馈。
- Ink 用于信息权重、黑色卡片和 CTA 收束。

这套色彩避免了常见 AI SaaS 的深蓝/紫色渐变套路，也避免了极简空白感，形成更年轻的创作者工具气质。

### 4.2 Typography

标题使用大字号、紧凑行高和高权重，建立强视觉锚点。正文保持短句化，降低解释成本。

文案策略：

- 首屏标题直接表达产品定位：Build expressive pages from cards.
- CTA 统一为 Start building。
- 模块标题保持短、具体、有动作感。
- 避免过度抽象的品牌口号。

### 4.3 Grid

页面整体采用大块 section + 内部 grid 的结构。

关键节奏：

- 首页 hero 保持沉浸式大视觉。
- 其他内容板块统一标题区到内容区 60px 间距。
- 卡片区使用错位、高低差和不同跨度制造节奏。
- 移动端收敛为单列或两列，避免横向溢出。

### 4.4 Card System

卡片系统是本次视觉升级的核心。

统一规则：

- 8px 圆角
- 统一边框粗细
- 轻量阴影
- 高饱和色块
- CSS 抽象产品缩略图
- 真实产品语义 + 图形化表达

模板墙的原则是 70% 真实产品、30% 图形化。它不是完整 UI 截图，而是抽象化真实产品缩略页，让用户能快速识别不同页面类型。

### 4.5 Motion

保留首屏视差、浮动卡片、磁吸按钮和 reveal 动效。

性能策略：

- pointermove 通过 requestAnimationFrame 节流。
- 保留 prefers-reduced-motion 支持。
- 不引入重型动画库。
- 所有动效服务于“卡片可以被组合、移动、发布”的产品隐喻。

## 5. 页面方案拆解

### 5.1 Hero

目标：让用户第一眼理解 CueCue 的核心产品模型。

核心表达：

- Card-built page
- Creator profile
- Floating modules
- RSVP / product / link hub / menu 等能力

设计重点：

- 左侧大标题建立定位。
- 右侧 mini-site preview 表达真实使用场景。
- 浮动卡片制造 modular system 的动态感。
- CTA 统一为 Start building。

### 5.2 Toolkit

目标：解释 CueCue 不是 blank canvas，而是可组合的 card toolkit。

模块表达：

- Page stack
- Creator / RSVP / product / menu 切换
- Collect / Style / Share
- Ready pages, flexible cards

设计重点是把工具能力变成可视化积木，而不是长文本功能列表。

### 5.3 Interactive Cards

目标：说明每张卡不只是链接入口，而是可执行动作。

最终 5 张卡：

1. Turn attention into action
2. Make quick pages feel designed
3. Launch tiny campaigns fast
4. Built for the link in your bio
5. Update without rebuilding

第 5 张卡补齐后，板块视觉重心更完整，也强化了“一个链接可持续更新”的产品价值。

### 5.4 Use Cases

目标：让用户看到适用人群。

三类场景：

- Designers
- Local shops
- Event hosts

每张卡都保留 40px 的标签、图形、标题节奏，降低视觉拥挤，同时让卡片像真实场景入口。

### 5.5 Template Wall

目标：展示 CueCue 可以从具体 page type 开始，而不是从空白画布开始。

模板类型：

- Creator bio
- Event RSVP
- Product drop
- Restaurant menu
- Digital card
- Waitlist

本轮强化点：

- Creator bio 加强头像、link rows、小 CTA。
- Event RSVP 加强封面、日期/时间、RSVP 胶囊、attendees。
- Product drop 加强商品主体、价格标签、Buy button。
- Restaurant menu 加强菜品行与价格行。
- Digital card 加强头像、QR code、contact CTA。
- Waitlist 加强 email input、join CTA、progress/count。

### 5.6 Final CTA

目标：把页面最后收束成一个清晰动作承诺。

最终文案：

- Start from a card. Publish one link.
- Build a creator bio, RSVP page, product drop, menu, or waitlist without rebuilding from zero.
- Start building

这个 CTA 比泛化的品牌收尾更直接，适合产品转化和演示交付。

## 6. AI Native 设计体系

本次项目的差异化不只在视觉结果，也在工作流：使用 AI 作为设计协作系统，而不是只做单次生成。

### 6.1 Agent Rules

在过程中建立了明确约束：

- 不改变当前整体风格。
- 不改变首屏核心交互动画。
- 不做 SaaS、电商、极简空白风。
- 不使用完整 UI 截图作为模板墙素材。
- 模板缩略图保持 70% 真实产品、30% 图形化。
- 所有 CTA 统一为 Start building。

### 6.2 Prompt Constraints

关键 prompt 约束包括：

- 保留模块化卡片系统。
- 每张缩略卡必须体现真实产品类型。
- 同一圆角、同一边距、同一阴影、同一线条粗细。
- 图形需要服务产品理解，不做纯装饰。
- 文案必须短、直接、适合海外市场。

### 6.3 Visual Governance

视觉治理方式：

- 通过逐屏评论收敛问题。
- 每次只处理明确的视觉问题。
- 先修正结构，再强化细节。
- 不在收尾阶段大改风格。
- 用代码系统保证一致性，而不是依赖手工截图。

### 6.4 Structured Prompting

AI 工作流从开放探索逐步收敛为结构化执行：

1. 确认目标用户和页面范围。
2. 定义风格方向和禁用风格。
3. 分解首页模块。
4. 针对浏览器评论逐项修复。
5. 建立最终设计评估标准。
6. 输出可交付版本和设计汇报文档。

## 7. 工具与工作流

### 7.1 AI Workflow

- 使用 Codex 进行代码级设计落地。
- 通过浏览器截图评论定位视觉问题。
- 使用计划模式定义阶段性目标。
- 使用实现模式完成代码修改、检查和 Git 交付。

### 7.2 Design Workflow

- 先确定视觉方向。
- 再搭建页面叙事。
- 再统一卡片系统。
- 再强化真实产品感。
- 最后做 CTA 收束和响应式检查。

### 7.3 Frontend Workflow

- 静态 HTML/CSS/JS 快速实现。
- CSS 负责视觉系统和抽象素材。
- JS 只承担交互切换、reveal 和动效节流。
- 不引入重型依赖，保持测试项目轻量。

### 7.4 插件与验证

- Browser / in-app browser：用于视觉定位和评论。
- Playwright：用于 1440、1024、390 视口布局检查。
- GitHub：用于最终代码交付。
- imagegen：本轮保留为可选，不作为默认方案，因为模板缩略卡更需要统一系统感。

## 8. Before / After 设计判断

### Before

原网站更像常规产品介绍页，信息清晰但视觉差异化不足。用户可以理解功能，但不一定记住 CueCue 的品牌气质。

### After

升级版将产品重新定义为 modular card studio：

- 更强的首屏记忆点。
- 更明确的 creator tool 气质。
- 更年轻的色彩与动效。
- 更完整的模块化系统。
- 更清楚的 page type 展示。
- 更统一的 CTA 和行动路径。

选择建议：以升级版作为主视觉方向，原站作为功能信息参考。

## 9. 最终设计评估

综合评分：8.5 / 10。

评估结论：

- 第一眼可以理解：CueCue 是从 card 出发搭建页面的工具。
- 第二眼可以识别：它可以做 bio、RSVP、product drop、menu、digital card、waitlist。
- 第三眼可以感受到：它比普通 link-in-bio 工具更有设计感和模块化气质。

当前版本已经可以作为测试项目主交付版本。

## 10. 后续建议

如果继续提升，不建议大改风格。建议只做小范围增强：

- 为首屏或模板墙生成 1-2 张高质感产品缩略素材。
- 将本 Markdown 转为 PPT、Figma Slides 或 Framer 页面。
- 增加 before / after 截图页。
- 如果进入真实上线阶段，再补充真实产品数据、用户案例和 SEO 文案。

当前阶段最重要的是保持方向稳定：Editorial + Modular + Creator Tool。
