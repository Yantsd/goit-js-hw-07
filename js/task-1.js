const itemCategories = document.querySelectorAll('.item');

itemCategories.forEach(element =>
    console.log(
        `Категория:${element.firstElementChild.textContent}, Количество элементов: ${element.lastElementChild.children.length}`,
    ),
);
