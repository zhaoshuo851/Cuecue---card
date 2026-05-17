const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealItems = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const stackCopy = {
  creator: {
    tag: "Creator stack",
    title: "Profile, links, bookings, and updates in one polished page.",
    colors: ["#ff6fb1", "#ffd159", "#171717"]
  },
  event: {
    tag: "RSVP stack",
    title: "Invite guests, collect details, and keep the event vibe visible.",
    colors: ["#ffd159", "#55d9ff", "#c9ff38"]
  },
  shop: {
    tag: "Drop stack",
    title: "Launch a product, feature the story, and send buyers to checkout.",
    colors: ["#ff765f", "#cbb8ff", "#171717"]
  },
  menu: {
    tag: "Menu stack",
    title: "Turn menus, specials, maps, and contact details into a lively page.",
    colors: ["#58f3c2", "#c9ff38", "#55d9ff"]
  }
};

const stackButtons = document.querySelectorAll(".stack-item");
const stackPreview = document.querySelector("#stack-preview");
const stackPreviewTag = stackPreview?.querySelector(".preview-tag");
const stackPreviewTitle = stackPreview?.querySelector("h3");
const stackShapes = stackPreview?.querySelectorAll(".preview-composition span");

stackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const stack = button.dataset.stack;
    const nextCopy = stackCopy[stack];

    stackButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    if (!nextCopy || !stackPreviewTag || !stackPreviewTitle || !stackShapes) {
      return;
    }

    stackPreviewTag.textContent = nextCopy.tag;
    stackPreviewTitle.textContent = nextCopy.title;
    stackShapes.forEach((shape, index) => {
      shape.style.background = nextCopy.colors[index];
    });

    stackPreview.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-8px)" },
        { transform: "translateY(0)" }
      ],
      {
        duration: prefersReducedMotion ? 1 : 420,
        easing: "cubic-bezier(.2,.8,.2,1)"
      }
    );
  });
});

if (!prefersReducedMotion) {
  const heroStage = document.querySelector(".hero-stage");
  const layers = document.querySelectorAll(".layer");

  heroStage?.addEventListener("pointermove", (event) => {
    const rect = heroStage.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || 0.04);
      const moveX = x * depth;
      const moveY = y * depth;
      layer.style.setProperty("--move-x", `${moveX}px`);
      layer.style.setProperty("--move-y", `${moveY}px`);
      layer.style.translate = `${moveX}px ${moveY}px`;
    });
  });

  heroStage?.addEventListener("pointerleave", () => {
    layers.forEach((layer) => {
      layer.style.translate = "0 0";
    });
  });

  const magneticItems = document.querySelectorAll(".magnetic");

  magneticItems.forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
      item.style.transform = `translate(${x}px, ${y}px)`;
    });

    item.addEventListener("pointerleave", () => {
      item.style.transform = "";
    });
  });
}
