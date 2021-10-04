function filterPlansByFloor() {
  document.querySelector(".floors").addEventListener("click", (event) => {
    if (!event.target.closest("li")) return;

    document.querySelectorAll(".floors li").forEach((floorRef) => {
      floorRef.classList.remove("select");
    });

    document
      .querySelector(".section-clients .area")
      .classList.add("select-plants");

    document.querySelector(".col-plants").classList.remove("d-none");

    document.querySelectorAll(".wrapper").forEach((elemRef) => {
      elemRef.classList.remove("show");

      if (event.target.classList.contains(elemRef.dataset.anchor)) {
        document
          .querySelector(`.floors li[class*='${elemRef.dataset.anchor}']`)
          .classList.add("select");
        elemRef.classList.add("show");
      }
    });
  });

  document.querySelector(".btn-back").addEventListener("click", () => {
    document
      .querySelector(".section-clients .area")
      .classList.remove("select-plants");

    document.querySelector(".col-plants").classList.add("d-none");
    document.querySelector(".col-building").classList.remove("opacity-0");

    document.querySelectorAll(".floors li").forEach((floorRef) => {
      floorRef.classList.remove("select");
    });
  });

  document.querySelectorAll(".floors li").forEach((floorRef) => {
    if (floorRef.classList.contains("select")) {
      document
        .querySelectorAll(
          `.wrapper[data-anchor='${floorRef.classList.item(0)}']`
        )
        .forEach((elemRef) => {
          elemRef.classList.add("show");
        });

      document
        .querySelector(".section-clients .area")
        .classList.add("select-plants");
    }
  });
}

filterPlansByFloor();
