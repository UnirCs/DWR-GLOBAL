// ===================================
// TEMA 1: UNIDADES DE LONGITUD
// ===================================

let updateFontSizeScheduled = false;

const htmlFontSizeInput = document.getElementById("html-font-size");
const htmlFontSizeLabel = document.getElementById("html-font-size-label");
const resetFontSizeBtn = document.getElementById("reset-font-size");
const DEFAULT_FONT_SIZE = 16;

if (htmlFontSizeInput) {
  const updateFontSize = (value) => {
    document.documentElement.style.fontSize = value + "px";
    htmlFontSizeLabel.textContent = value + "px";
    htmlFontSizeInput.value = value;
    updateFontSizeScheduled = false;
  };

  const scheduleFontSizeUpdate = (value) => {
    if (!updateFontSizeScheduled) {
      updateFontSizeScheduled = true;
      requestAnimationFrame(() => updateFontSize(value));
    }
  };

  htmlFontSizeInput.addEventListener("input", (e) => {
    scheduleFontSizeUpdate(e.target.value);
  });

  if (resetFontSizeBtn) {
    resetFontSizeBtn.addEventListener("click", () => {
      updateFontSize(DEFAULT_FONT_SIZE);
    });
  }

  updateFontSize(DEFAULT_FONT_SIZE);
}

// ===================================
// TEMA 2: MEDIA QUERIES & RESPONSIVE
// ===================================

let updateViewportScheduled = false;

const viewportWidthInput = document.getElementById("viewport-width");
const viewportWidthLabel = document.getElementById("viewport-width-label");
const responsiveDemo = document.getElementById("demo-responsive");

// Colores por columna y breakpoint
const COLUMN_STYLES = {
  mobile: [
    { bg: "#ffe7e7", display: "flex" }, // col-1
    { bg: "", display: "none" }, // col-2
    { bg: "", display: "none" }, // col-3
  ],
  tablet: [
    { bg: "#cfe2ff", display: "flex", width: "50%" },
    { bg: "#ffd9d9", display: "flex", width: "50%" },
    { bg: "", display: "none" },
  ],
  desktop: [
    { bg: "#d1e7dd", display: "flex", width: "33.333%" },
    { bg: "#fbe7ff", display: "flex", width: "33.333%" },
    { bg: "#e7fff7", display: "flex", width: "33.333%" },
  ],
};

function getBreakpoint(value) {
  if (value < 768) return "mobile";
  if (value < 1024) return "tablet";
  return "desktop";
}

function applyColumnStyles(breakpoint) {
  if (!responsiveDemo) return;
  const columns = responsiveDemo.querySelectorAll(".column");
  const styles = COLUMN_STYLES[breakpoint];

  columns.forEach((col, i) => {
    col.style.display = styles[i].display;
    col.style.width = styles[i].width || "100%";
    col.style.background = styles[i].bg || "";
  });
}

function updateViewportDisplay() {
  const value = parseInt(viewportWidthInput.value);
  const breakpoint = getBreakpoint(value);

  const labels = {
    mobile: "📱 Mobile (<768px)",
    tablet: "📱 Tablet (768–1023px)",
    desktop: "🖥️ Desktop (≥1024px)",
  };
  const colors = {
    mobile: "#fff3cd",
    tablet: "#cfe2ff",
    desktop: "#d1e7dd",
  };

  viewportWidthLabel.textContent = value + "px · " + labels[breakpoint];
  Object.assign(viewportWidthLabel.style, {
    background: colors[breakpoint],
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    fontWeight: "bold",
    display: "inline-block",
    marginTop: "0.5rem",
  });

  if (responsiveDemo) {
    // Limitar el ancho al contenedor padre para que no desborde
    const maxWidth = responsiveDemo.parentElement.offsetWidth;
    responsiveDemo.style.width = Math.min(value, maxWidth) + "px";
    responsiveDemo.style.margin = "0 auto";
    responsiveDemo.style.border = "3px solid #999";
    responsiveDemo.style.borderRadius = "8px";
    responsiveDemo.style.overflow = "hidden";
  }

  applyColumnStyles(breakpoint);
  updateViewportScheduled = false;
}

function scheduleViewportUpdate() {
  if (!updateViewportScheduled) {
    updateViewportScheduled = true;
    requestAnimationFrame(updateViewportDisplay);
  }
}

if (viewportWidthInput) {
  viewportWidthInput.addEventListener("input", scheduleViewportUpdate);
  updateViewportDisplay();
}
