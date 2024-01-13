gsap.registerPlugin(Draggable);

Draggable.create(".card-1", {
  type: "xy",
  bounds: ".canvas",
  throwProps: true,
  zIndexBoost: true,
});

Draggable.create(".card-2", {
  type: "xy",
  bounds: ".canvas",
  throwProps: true,
  zIndexBoost: true,
});
