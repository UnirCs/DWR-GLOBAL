// Aplica cambios de propiedad en ítems flex (order, grow, shrink, etc.)
document.querySelectorAll("[data-item-control]").forEach((control) => {
  const targetId = control.dataset.target;
  const prop = control.dataset.prop;
  const itemIndex = parseInt(control.dataset.item, 10);

  const applyValue = () => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const items = target.querySelectorAll(".item");
    const item = items[itemIndex - 1];
    if (!item) return;

    const value = control.value;

    if (prop === "flex") {
      // shorthand
      item.style.flex = value;
    } else {
      item.style.setProperty(prop, value);
    }

    // Actualizar etiqueta de los sliders de grow
    if (control.type === "range") {
      const label = control.parentElement.querySelector("[data-range-label]");
      if (label) {
        label.textContent = value;
      }
    }
  };

  control.addEventListener("change", applyValue);
  control.addEventListener("input", applyValue);
  applyValue();
});

// Control del ancho del contenedor (mini viewport responsive)
document.querySelectorAll("input[data-resize-target]").forEach((slider) => {
  const targetId = slider.dataset.resizeTarget;

  const applyWidth = () => {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.style.width = slider.value + "px";
  };

  slider.addEventListener("input", applyWidth);
  applyWidth();
});
