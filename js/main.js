$(document).ready(function () {
  const counterUp = $(".counter-up");
  const counterDown = $(".counter-down");
  const floorPath = $(".home-image path");
  let currentFloor = 2;

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
      floorPath.removeClass("current-floor")
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  // Функция на уменьшения
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor")
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })

});