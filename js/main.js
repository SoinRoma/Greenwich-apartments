$(document).ready(function () {

  const counterUp = $(".counter-up");
  const counterDown = $(".counter-down");
  const modal = $(".modal");
  const modalCloseButton = $(".modal-close");
  const toggleButton = $(".toggleButton");
  const floorPath = $(".home-image path");
  const flatPath = $(".flats path");
  const flatLink = $(".flat-link");
  const viewFlats = $(".view-flats");

  let currentFloor = 2;
  let currentFlat = 1;
  let currentLinkFlat = 1;

  // Функция изменения номера этажа при прибавлении или уменьшении
  function changeNumber() {
    usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false });
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  }

  // Функция при наведении на этаж
  floorPath.on("mouseover", function () {
    currentFloor = $(this).attr("data-floor");
    changeNumber();
  });

  // Функция на прибавление
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      changeNumber();
    }
  });

  // Функция на уменьшение
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      changeNumber();
    }
  })

  // Открытие и закрытие модального окна
  function toggleModal() {
    modal.toggleClass("is-open");
  };

  floorPath.on("click", toggleModal);
  viewFlats.on("click", toggleModal);
  toggleButton.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);

  // Удаление классов
  function removeClass() {
    flatPath.removeClass("current-flat");
    flatLink.removeClass("flatLinkHover");
  }

  // Функция при наведении на квартиру на схеме
  flatPath.on("mouseover", function () {
    removeClass();
    currentFlat = $(this).attr("data-flat");
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
    $(`[data-textFlat=${currentFlat}]`).toggleClass("flatLinkHover");
  });

  // Функция при наведения на ссылку на квартиру
  flatLink.on("mouseover", function () {
    removeClass();
    currentLinkFlat = $(this).attr("data-textFlat");
    $(`[data-flat=${currentLinkFlat}]`).toggleClass("current-flat");
    $(`[data-textFlat=${currentLinkFlat}]`).toggleClass("flatLinkHover");
  });

});