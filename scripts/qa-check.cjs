const path = require("node:path");
const fs = require("node:fs");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "qa-screenshots");

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 }
];

(async () => {
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  const browser = await chromium.launch({
    headless: true,
    executablePath: fs.existsSync(chromePath) ? chromePath : undefined
  });
  const results = [];

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const consoleIssues = [];

    page.on("console", (message) => {
      if (["error", "warning"].includes(message.type())) {
        consoleIssues.push(`${message.type()}: ${message.text()}`);
      }
    });

    await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(outDir, `${viewport.name}.png`),
      fullPage: true
    });

    const layoutIssues = await page.evaluate(() => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const all = Array.from(document.querySelectorAll("body *"));
      const overflowing = [];
      const offscreen = [];

      for (const el of all) {
        const rect = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        const visible =
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          Number(style.opacity) !== 0 &&
          rect.width > 0 &&
          rect.height > 0;

        if (!visible) {
          continue;
        }

        if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
          overflowing.push({
            tag: el.tagName.toLowerCase(),
            className: el.className,
            text: (el.textContent || "").trim().slice(0, 80)
          });
        }

        if (rect.left < -8 || rect.right > viewportWidth + 8) {
          offscreen.push({
            tag: el.tagName.toLowerCase(),
            className: el.className,
            text: (el.textContent || "").trim().slice(0, 80),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            viewportWidth
          });
        }

        if (rect.top < -viewportHeight * 3 || rect.bottom > document.documentElement.scrollHeight + 8) {
          offscreen.push({
            tag: el.tagName.toLowerCase(),
            className: el.className,
            text: (el.textContent || "").trim().slice(0, 80),
            top: Math.round(rect.top),
            bottom: Math.round(rect.bottom)
          });
        }
      }

      return {
        overflowing: overflowing.slice(0, 12),
        offscreen: offscreen.slice(0, 12),
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth
      };
    });

    results.push({
      viewport: viewport.name,
      size: `${viewport.width}x${viewport.height}`,
      consoleIssues,
      layoutIssues
    });

    await page.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
