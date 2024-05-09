let screenPrice
let percentage = 15;
let allServicePrices; 
let newTitle = ''; 
let titleProject; 
let fullPrice; 
let servicePercentPrice; 
let screensValue;
let responsive;
let serviceOne;
let serviceTwo;



const checkIsNumber = function(value) {
    return !isNaN(parseFloat(value)) && isFinite(value)
};

const asking = function() {
    titleProject = prompt("Название проекта");
    screensValue = prompt("Тип экрана(шаблонные, с уникальным дизайном, с анимациями)");
    responsive = prompt("Нужен ли респонсивный сайт?");
    screenPrice = prompt("Сколько это стоит?");

    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null)
        screenPrice = prompt("Сколько это стоит?");

    screenPrice = Number(screenPrice);

};

const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            serviceOne = prompt("Какой дополнительный сервис нужен?")
        } else if (i === 1) {
            serviceTwo = prompt("Какой еще сервис тебе нужен?");
        }

        let textFromPromt = ''; 
        
        while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === "" || textFromPromt === null) {
            textFromPromt = prompt("Сколько это стоит?");
        }
        sum += Number(textFromPromt)
    }
    return sum
};

function getFullPrice(priceA, priceB) {
    return priceA + priceB;
}

const getServicePercentPrices = function(totalSum, persentSum) {
    return totalSum - (totalSum * (persentSum / 100));
};

const getTitle = function(textValue) {
    let firstLetterToUpperCase = textValue[0].toUpperCase();
    let sliceText = textValue.slice(1);
    let lowCaseLetter = sliceText.toLowerCase();
    return firstLetterToUpperCase + lowCaseLetter
};

let getRollbackMessage = function(price) {
    if (price >= 50000) {
        return "Скидка 10%"
      } else if (price >= 20000 && fullPrice <= 49999) {
        return "Скидка 5%"
      } else if (price >= 0 && fullPrice <= 19999) {
        return "Скидка не предусмотрена"
      } else {
        return "Что то пошло не так"
      }
}


asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, percentage);


newTitle = getTitle(titleProject);

console.log(newTitle, "- Название проекта");
console.log(screensValue, "- Тип экрана");
console.log(responsive, "- Респонсивный сайт");
console.log(fullPrice, "- Общая сумма");
console.log(getRollbackMessage(fullPrice));
console.log(fullPrice - servicePercentPrice, "- Сумма подрядчику");
console.log(Math.ceil(servicePercentPrice), "- Сумма в карман)");


