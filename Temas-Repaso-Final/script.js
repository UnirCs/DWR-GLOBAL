// ===================================
// TEMA 1: UNIDADES DE LONGITUD
// ===================================

let updateFontSizeScheduled = false;

// Control de tamaño base del HTML
const htmlFontSizeInput = document.getElementById("html-font-size");
const htmlFontSizeLabel = document.getElementById("html-font-size-label");
const resetFontSizeBtn = document.getElementById("reset-font-size");
const DEFAULT_FONT_SIZE = 16;

if (htmlFontSizeInput) {
  // Función para actualizar el tamaño
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

  // Event listener para el slider
  htmlFontSizeInput.addEventListener("input", (e) => {
    scheduleFontSizeUpdate(e.target.value);
  });

  // Botón de reset
  if (resetFontSizeBtn) {
    resetFontSizeBtn.addEventListener("click", () => {
      updateFontSize(DEFAULT_FONT_SIZE);
    });
  }

  // Inicializar
  updateFontSize(DEFAULT_FONT_SIZE);
}

// ===================================
// TEMA 2: MEDIA QUERIES & RESPONSIVE
// ===================================

let updateViewportScheduled = false;

// Simulador de ancho de viewport
const viewportWidthInput = document.getElementById("viewport-width");
const viewportWidthLabel = document.getElementById("viewport-width-label");
const responsiveDemo = document.getElementById("demo-responsive");

function updateViewportDisplay() {
  const value = parseInt(viewportWidthInput.value);
  let breakpoint = "📱 Mobile (<768px)";
  let bgColor = "#fff3cd"; // amarillo

  if (value >= 768 && value < 1024) {
    breakpoint = "📱 Tablet (768–1023px)";
    bgColor = "#cfe2ff"; // azul claro
  } else if (value >= 1024) {
    breakpoint = "🖥️ Desktop (≥1024px)";
    bgColor = "#d1e7dd"; // verde claro
  }

  viewportWidthLabel.textContent = value + "px · " + breakpoint;
  viewportWidthLabel.style.background = bgColor;
  viewportWidthLabel.style.padding = "0.5rem 1rem";
  viewportWidthLabel.style.borderRadius = "4px";
  viewportWidthLabel.style.fontWeight = "bold";
  viewportWidthLabel.style.display = "inline-block";
  viewportWidthLabel.style.marginTop = "0.5rem";

  if (responsiveDemo) {
    responsiveDemo.style.width = value + "px";
    responsiveDemo.style.margin = "0 auto";
    responsiveDemo.style.border = "3px solid #999";
    responsiveDemo.style.borderRadius = "8px";
  }

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

  // Inicializar
  updateViewportDisplay();
}

// ===================================
// TEMA 3: FLEXBOX - CONTENEDOR
// ===================================

// Controles para propiedades flex del contenedor
const flexControls = {
  "flex-direction": document.getElementById("flex-direction"),
  "justify-content": document.getElementById("justify-content"),
  "align-items": document.getElementById("align-items"),
  "flex-wrap": document.getElementById("flex-wrap"),
};

const flexGapInput = document.getElementById("flex-gap");
const flexGapLabel = document.getElementById("flex-gap-label");
const flexContainer = document.getElementById("pg-flex-container");

let updateFlexGapScheduled = false;

// Aplicar cambios de propiedades flex principales
Object.entries(flexControls).forEach(([prop, input]) => {
  if (input && flexContainer) {
    input.addEventListener("change", (e) => {
      flexContainer.style[prop] = e.target.value;
    });
    // Inicializar
    flexContainer.style[prop] = input.value;
  }
});

// Control del gap en flexbox
if (flexGapInput && flexContainer) {
  function updateFlexGap() {
    const value = flexGapInput.value;
    flexGapLabel.textContent = value + "px";
    flexContainer.style.gap = value + "px";
    updateFlexGapScheduled = false;
  }

  function scheduleFlexGapUpdate() {
    if (!updateFlexGapScheduled) {
      updateFlexGapScheduled = true;
      requestAnimationFrame(updateFlexGap);
    }
  }

  flexGapInput.addEventListener("input", scheduleFlexGapUpdate);
  // Inicializar
  flexContainer.style.gap = flexGapInput.value + "px";
}

// ===================================
// TEMA 4: GRID - PROPIEDADES CLAVE
// ===================================

const gridColumnsSelect = document.getElementById("grid-columns");
const gridGapInput = document.getElementById("grid-gap");
const gridGapLabel = document.getElementById("grid-gap-label");
const gridContainer = document.getElementById("pg-grid-container");

let updateGridGapScheduled = false;

if (gridColumnsSelect && gridContainer) {
  gridColumnsSelect.addEventListener("change", (e) => {
    gridContainer.style.gridTemplateColumns = e.target.value;
  });
  // Inicializar
  gridContainer.style.gridTemplateColumns = gridColumnsSelect.value;
}

if (gridGapInput && gridContainer) {
  function updateGridGap() {
    const value = gridGapInput.value;
    gridGapLabel.textContent = value + "px";
    gridContainer.style.gap = value + "px";
    updateGridGapScheduled = false;
  }

  function scheduleGridGapUpdate() {
    if (!updateGridGapScheduled) {
      updateGridGapScheduled = true;
      requestAnimationFrame(updateGridGap);
    }
  }

  gridGapInput.addEventListener("input", scheduleGridGapUpdate);
  // Inicializar
  gridContainer.style.gap = gridGapInput.value + "px";
}

// ===================================
// TEMA 5: LAYOUT RESPONSIVE CON GRID
// ===================================

const gridResponsiveWidthInput = document.getElementById(
  "grid-responsive-width",
);
const gridResponsiveWidthLabel = document.getElementById(
  "grid-responsive-width-label",
);
const gridResponsiveDemo = document.getElementById("demo-grid-responsive");

if (gridResponsiveWidthInput) {
  gridResponsiveWidthInput.addEventListener("input", (e) => {
    const value = e.target.value;
    gridResponsiveWidthLabel.textContent = value + "px";

    if (gridResponsiveDemo) {
      gridResponsiveDemo.style.width = value + "px";
      gridResponsiveDemo.style.margin = "0 auto";

      // Aplicar media queries simuladas
      const width = parseInt(value);

      if (width < 768) {
        // Mobile: 1 columna
        gridResponsiveDemo.style.gridTemplateColumns = "1fr";
        gridResponsiveDemo.style.gridTemplateRows = "auto auto auto auto";
      } else if (width < 1024) {
        // Tablet: 2 columnas
        gridResponsiveDemo.style.gridTemplateColumns = "200px 1fr";
        gridResponsiveDemo.style.gridTemplateRows = "auto auto auto";
      } else {
        // Desktop
        gridResponsiveDemo.style.gridTemplateColumns = "200px 1fr";
        gridResponsiveDemo.style.gridTemplateRows = "60px 1fr 60px";
      }
    }
  });

  // Inicializar
  const initialValue = gridResponsiveWidthInput.value;
  gridResponsiveWidthLabel.textContent = initialValue + "px";
  if (gridResponsiveDemo) {
    gridResponsiveDemo.style.width = initialValue + "px";
    gridResponsiveDemo.style.margin = "0 auto";
  }
}

// ===================================
// FORMULARIO ACCESIBLE - VALIDACIÓN
// ===================================

const accessibleForm = document.querySelector(".accessible-form");

if (accessibleForm) {
  accessibleForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores
    const name = document.getElementById("name").value;
    const activity = document.getElementById("activity").value;
    const date = document.getElementById("date").value;

    // Validar
    if (!name || !activity || !date) {
      alert("❌ Por favor, completa todos los campos marcados con *");
      return;
    }

    // Mostrar confirmación
    alert(
      `✅ Reserva confirmada para ${name}!\n\nActividad: ${activity}\nFecha: ${date}`,
    );

    // Opcional: resetear formulario
    accessibleForm.reset();
  });
}

// ===================================
// TEMA 6: BOOTSTRAP - GRID INTERACTIVO
// ===================================

let updateBootstrapScheduled = false;

// Slider para Bootstrap grid responsive
const bootstrapSlider = document.getElementById("bootstrapGridSlider");
const bootstrapContainer = document.getElementById("bootstrapGridContainer");
const bootstrapWidthDisplay = document.getElementById("bootstrapWidthDisplay");

function updateBootstrapGrid() {
  const width = parseInt(bootstrapSlider.value);

  // Actualizar ancho del contenedor
  bootstrapContainer.style.width = width + "px";
  bootstrapWidthDisplay.textContent = width + "px";

  // Actualizar spans de col-md-6 (6 en tablet+, 12 en móvil)
  const colMd6Elements = document.querySelectorAll(".bootstrap-col-md-6");
  colMd6Elements.forEach((el) => {
    const newSpan = width < 768 ? 12 : 6;
    el.style.gridColumn = `span ${newSpan}`;
  });

  // Actualizar spans de col-lg-4 (4 en desktop, 6 en tablet, 12 en móvil)
  const colLg4Elements = document.querySelectorAll(".bootstrap-col-lg-4");
  colLg4Elements.forEach((el) => {
    let newSpan = 12;
    if (width >= 768 && width < 992) {
      newSpan = 6;
    } else if (width >= 992) {
      newSpan = 4;
    }
    el.style.gridColumn = `span ${newSpan}`;
  });

  // Cambiar color según breakpoint
  if (width < 576) {
    bootstrapWidthDisplay.style.color = "#dc3545";
  } else if (width < 768) {
    bootstrapWidthDisplay.style.color = "#ffc107";
  } else if (width < 992) {
    bootstrapWidthDisplay.style.color = "#28a745";
  } else if (width < 1200) {
    bootstrapWidthDisplay.style.color = "#0d6efd";
  } else {
    bootstrapWidthDisplay.style.color = "#17a2b8";
  }

  updateBootstrapScheduled = false;
}

function scheduleBootstrapUpdate() {
  if (!updateBootstrapScheduled) {
    updateBootstrapScheduled = true;
    requestAnimationFrame(updateBootstrapGrid);
  }
}

if (bootstrapSlider) {
  bootstrapSlider.addEventListener("input", scheduleBootstrapUpdate);
  setTimeout(updateBootstrapGrid, 100);
}

// ===================================
// TEMA 7: TAILWIND - GRID INTERACTIVO
// ===================================

let updateTailwindScheduled = false;

// Slider para Tailwind grid responsive
const tailwindSlider = document.getElementById("tailwindGridSlider");
const tailwindContainer = document.getElementById("tailwindGridContainer");
const tailwindWidthDisplay = document.getElementById("tailwindWidthDisplay");

function updateTailwindGrid() {
  const width = parseInt(tailwindSlider.value);

  // Actualizar ancho del contenedor
  tailwindContainer.style.width = width + "px";
  tailwindWidthDisplay.textContent = width + "px";

  // Buscar la grilla dentro del contenedor
  const gridWrapper = tailwindContainer.querySelector(
    "div[style*='display: grid']",
  );
  let numCols = 1;
  let color = "#e74c3c"; // rojo: mobile

  // Determinar número de columnas según breakpoint
  if (width >= 1024) {
    numCols = 3;
    color = "#3b82f6"; // azul: desktop (lg)
  } else if (width >= 768) {
    numCols = 2;
    color = "#27ae60"; // verde: tablet (md)
  } else if (width >= 640) {
    numCols = 1;
    color = "#f39c12"; // naranja: sm
  }

  // Actualizar grid-template-columns
  if (gridWrapper) {
    const cols = Array(numCols).fill("1fr").join(" ");
    gridWrapper.style.gridTemplateColumns = cols;
  }

  tailwindWidthDisplay.style.color = color;

  updateTailwindScheduled = false;
}

function scheduleTailwindUpdate() {
  if (!updateTailwindScheduled) {
    updateTailwindScheduled = true;
    requestAnimationFrame(updateTailwindGrid);
  }
}

if (tailwindSlider) {
  tailwindSlider.addEventListener("input", scheduleTailwindUpdate);
  setTimeout(updateTailwindGrid, 100);
}

// ===================================
// FUNCIONALIDAD GENERAL
// ===================================

// Log de inicialización
console.log("✅ Playground de Repaso - Todos los controles cargados");
console.log("📚 Temas cubiertos:");
console.log("   1. Unidades de Longitud (px vs rem)");
console.log("   2. Media Queries & Responsive");
console.log("   3. Flexbox (propiedades del contenedor)");
console.log("   4. CSS Grid (propiedades clave)");
console.log("   5. Layout Responsive con Grid");
console.log("   6. Bootstrap Grid Interactivo");
console.log("   9-10. Accesibilidad (semántica + ARIA)");
