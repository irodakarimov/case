// Ждем загрузки содержимого страницы
document.addEventListener("DOMContentLoaded", function() {
    // Получаем все кнопки с классом "card-btn"
    const buttons = document.querySelectorAll(".card-btn");

    buttons.forEach(button => {
        button.addEventListener("click", handleOrder);
    });
});

// 1. Function
function handleOrder() {
    // 2. Data Types and Type convertion
    let quantity = prompt("Qiyqiriq сет nechta zakas qilmoqchisiz?");
    quantity = Number(quantity);  // Преобразование типа

    // Проверяем, является ли введенное значение числом и больше ли оно 0
    if (isNaN(quantity) || quantity <= 0) {
        alert("Iltimos to'g'ri son kiriting");
        return;
    }

    // Если количество больше 10, сообщаем об этом
    if (quantity > 4) {
        alert("4tadan ko'p zakas qilish mumkin emas");
        return;
    }

    // 3. Arifmetik operatorlar & Math methodlari  if else
    const pricePerItem = 45000;
    const totalCost = quantity * pricePerItem;

    // 4. String методы
    const productName = "Qiyqiriq сет";

    // 10. Dom createElement
    const summaryElement = document.createElement('div');
    summaryElement.classList.add('order-summary');
    summaryElement.innerHTML = `
        ${productName}
         ${quantity}
       ${totalCost} 
    `;
    document.body.appendChild(summaryElement);

    // 2. Switch case
    const confirmation = confirm(`zakas qilgan Qiyiriq сет jami: ${totalCost} so'm. mahsulotni zakas qilasizmi?`);
    switch (confirmation) {
        case true:
            alert("Zakas qbul qilindi");
            break;
        case false:
            alert("Zakas rad etildi");
            break;
        default:
            alert("Hatolik yuz berdi boshidan zakas qiling");
            break;
    }
}
