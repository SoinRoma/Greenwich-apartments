$(document).ready(function () {
  const counterUp = $(".counter-up");
  const counterDown = $(".counter-down");
  const floorPath = $(".home-image path");
  const modal = $(".modal");
  const modalCloseButton = $(".modal-close");
  const flatPath = $(".flats path");
  const flatLink = $(".flat-link");
  const viewFlats = $(".view-flats");
  let currentFloor = 2;
  let currentFlat = 1;
  let currentLinkFlat = 1;

  // Функция при наведении на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
    usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false });
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  });

  // Функция на прибавления
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  // Функция на уменьшения
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })

  function toпgleModal() {
    modal.toggleClass("is-open");
  };

  // Открытие и закрытие модального окна
  floorPath.on("click", toпgleModal);
  viewFlats.on("click", toпgleModal);
  modalCloseButton.on("click", toпgleModal);

  // Функция при наведении на квартиру
  flatPath.on("mouseover", function () {
    flatPath.removeClass("current-flat");
    flatLink.removeClass("flatLinkHover");
    currentFlat = $(this).attr("data-flat");
    $(`[data-textFlat=${currentFlat}]`).toggleClass("flatLinkHover");
  });

  // Функция пр наведения на ссылку на квартиру
  flatLink.on("mouseover", function () {
    flatPath.removeClass("current-flat");
    flatLink.removeClass("flatLinkHover");
    currentLinkFlat = $(this).attr("data-textFlat");
    $(`[data-flat=${currentLinkFlat}]`).toggleClass("current-flat");
  });

});