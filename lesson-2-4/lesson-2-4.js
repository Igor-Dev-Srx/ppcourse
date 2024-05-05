let titleProject = prompt("Название проекта");

// task 3
const getTitle = function(textValue) {
    let firstLetterToUpperCase = textValue[0].toUpperCase();
    let sliceText = textValue.slice(1);
    let lowCaseLetter = sliceText.toLowerCase();
    return `${firstLetterToUpperCase}${lowCaseLetter}`
    
};
console.log(getTitle(titleProject), "- Название проекта");

let screensValue = prompt("Тип экрана(шаблонные, с уникальным дизайном, с анимациями)");
console.log(screensValue, "- Тип экрана");

let responsive = prompt("Нужен ли респонсивный сайт?");
console.log(responsive, "- Респонсивный сайт");

let serviceOne = prompt("Какой сервис нужен?");
console.log(serviceOne, "- Дополнительный сервис");

let servicePriceOne = +prompt("Сколько это будет стоить?");

let serviceTwo = prompt("Какой еще сервис тебе нужен?");
console.log(serviceTwo, "- Еще дополнительный сервис");

let servicePriceTwo = +prompt("Сколько будет стоить этот второй сервис?");

let screenPrice = 38000;
let percentage = 15;

// task 1
const getAllServicePrices = function(sumA, sumB) {
    return sumA + sumB;
}; 

let allServicePrices = getAllServicePrices(servicePriceOne, servicePriceTwo);
console.log(allServicePrices);

// task 2
function getFullPrice(priceA, priceB) {
    return priceA + priceB;
}

let fullPrice = getFullPrice(allServicePrices, screenPrice);
console.log(fullPrice, 'Общая сумма');

// task 4
const getServicePercentPrices = function(totalSum, persentSum) {
    return totalSum - persentSum;
};

let percentageResult = fullPrice * (percentage / 100);
let servicePercentPrice = getServicePercentPrices(fullPrice, percentageResult);
console.log(Math.round(percentageResult), "Сумма процента подрядчику))");
console.log(Math.round(servicePercentPrice), "Сумма в карман))");

// task 5
let getRollbackMessage = function(price) {
    if (price >= 50000) {
        console.log("Скидка 10%");
      } else if (price >= 20000 && fullPrice <= 49999) {
        console.log("Скидка 5%");
      } else if (price >= 0 && fullPrice <= 19999) {
        console.log("Скидка не предусмотрена");
      } else {
        console.log("Что то пошло не так");
      }
}

getRollbackMessage(fullPrice);