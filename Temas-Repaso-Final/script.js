// ===================================
// TEMA 1: UNIDADES DE LONGITUD
// ===================================

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
  };

  // Event listener para el slider
  htmlFontSizeInput.addEventListener("input", (e) => {
    updateFontSize(e.target.value);
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

// Simulador de ancho de viewport
const viewportWidthInput = document.getElementById("viewport-width");
const viewportWidthLabel = document.getElementById("viewport-width-label");
const responsiveDemo = document.getElementById("demo-responsive");

if (viewportWidthInput) {
  viewportWidthInput.addEventListener("input", (e) => {
    const value = parseInt(e.target.value);
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
  });

  // Inicializar
  const initialValue = parseInt(viewportWidthInput.value);
  let initialBreakpoint = "📱 Mobile (<768px)";
  let initialBgColor = "#fff3cd";

  if (initialValue >= 768 && initialValue < 1024) {
    initialBreakpoint = "📱 Tablet (768–1023px)";
    initialBgColor = "#cfe2ff";
  } else if (initialValue >= 1024) {
    initialBreakpoint = "🖥️ Desktop (≥1024px)";
    initialBgColor = "#d1e7dd";
  }

  viewportWidthLabel.textContent = initialValue + "px · " + initialBreakpoint;
  viewportWidthLabel.style.background = initialBgColor;
  viewportWidthLabel.style.padding = "0.5rem 1rem";
  viewportWidthLabel.style.borderRadius = "4px";
  viewportWidthLabel.style.fontWeight = "bold";
  viewportWidthLabel.style.display = "inline-block";
  viewportWidthLabel.style.marginTop = "0.5rem";

  if (responsiveDemo) {
    responsiveDemo.style.width = initialValue + "px";
    responsiveDemo.style.margin = "0 auto";
    responsiveDemo.style.border = "3px solid #999";
    responsiveDemo.style.borderRadius = "8px";
  }
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
  flexGapInput.addEventListener("input", (e) => {
    const value = e.target.value;
    flexGapLabel.textContent = value + "px";
    flexContainer.style.gap = value + "px";
  });
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

if (gridColumnsSelect && gridContainer) {
  gridColumnsSelect.addEventListener("change", (e) => {
    gridContainer.style.gridTemplateColumns = e.target.value;
  });
  // Inicializar
  gridContainer.style.gridTemplateColumns = gridColumnsSelect.value;
}

if (gridGapInput && gridContainer) {
  gridGapInput.addEventListener("input", (e) => {
    const value = e.target.value;
    gridGapLabel.textContent = value + "px";
    gridContainer.style.gap = value + "px";
  });
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
console.log("   9-10. Accesibilidad (semántica + ARIA)");
