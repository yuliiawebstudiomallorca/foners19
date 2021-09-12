function filterPlansByFloor() {
  document.querySelector(".floors").addEventListener("click", (event) => {
    if (!event.target.closest("li")) return;

    document.querySelectorAll(".floors li").forEach((floorRef) => {
      floorRef.classList.remove("select");
    });

    document
      .querySelector(".section-clients .area")
      .classList.add("select-plants");

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

    document.querySelectorAll(".floors li").forEach((floorRef) => {
      floorRef.classList.remove("select");
    });
  });
}

filterPlansByFloor();
