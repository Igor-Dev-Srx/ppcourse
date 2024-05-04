// let titleProject = "Оценка стоимости";
// let screensValue = "шаблонные, с уникальным дизайном, с анимациями";
// let screenPrice = 3800;
// let percentage = 22;
// let fullPrice = 2100;
// let responsive = true;

// let titleProject = prompt("Название проекта?");
// let screensValue = prompt("Тип экрана(шаблонные, с уникальным дизайном, с анимациями)");
// let responsive = prompt("Нужен ли респонсивный сайт?");
// let serviceOne = prompt("Какой сервис нужен?");
// let servicePriceOne = prompt("Сколько это будет стоить?");
// let serviceTwo = prompt("Какой еще сервис тебе нужен?");
// let servicePriceTwo = prompt("Сколько будет стоить этот второй сервис?");
// let screenPrice = 3800;
// let percentage = 15;

// let fullPrice = screenPrice + +servicePriceOne + +servicePriceTwo;
// console.log(fullPrice, "Общая сумма");

// let percentageResult = fullPrice * (percentage / 100);
// console.log(percentageResult, "Сумма процента подрядчику");

// let servicePercentPrice = fullPrice - percentageResult;
// console.log(Math.round(servicePercentPrice), "Сумма в карман))");
let fullPrice = -1;

  if (fullPrice >= 50000) {
    console.log("Скидка 10%");
  } else if (fullPrice >= 20000 && fullPrice <= 49999) {
    console.log("Скидка 5%");
  } else if (fullPrice >= 0 && fullPrice <= 19999) {
    console.log("Скидка не предусмотрена");
  } else {
    console.log("Что то пошло не так");
  }