// Aplica cambios de propiedad (flex-direction, flex-wrap, etc.)
document.querySelectorAll("[data-playground-select]").forEach((select) => {
  const targetId = select.dataset.target;
  const prop = select.dataset.prop;
  const target = document.getElementById(targetId);
  if (!target) return;

  const applyValue = () => {
    const value = select.value;
    target.style.setProperty(prop, value);
  };

  select.addEventListener("change", applyValue);
  // aplicar valor inicial
  applyValue();
});

// Controla el ancho del contenedor (mini viewport responsive)
document.querySelectorAll("input[data-resize-target]").forEach((slider) => {
  const targetId = slider.dataset.resizeTarget;
  const target = document.getElementById(targetId);
  if (!target) return;

  const applyWidth = () => {
    const value = slider.value;
    target.style.width = value + "px";
  };

  slider.addEventListener("input", applyWidth);
  // aplicar valor inicial
  applyWidth();
});
