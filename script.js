var burger = document.querySelector(".header__burger-menu");
var headerMenu = document.querySelector(".header__menu");
burger.addEventListener("click", function () {
    headerMenu.classList.toggle("header__menu-active");
    document.body.classList.toggle("lock");
    window.scrollTo(0, 0);
});
var frenchPictures = [
    {
        imageSources: {
            "320px": "pictures\\mobile\\amurs_hunt.jpg",
            "576px": "pictures\\tablet510\\amurs_hunt.jpg",
            "768px": "pictures\\tablet690\\amurs_hunt.jpg",
            "1440px": "pictures\\desktop\\amurs_hunt.jpg",
        },
        author: "Марсель Руссо",
        name: "Охота Амура",
        description: "Холст, масло (50х80) ",
        price: "14 500 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\birds_meal.jpg",
            "576px": "pictures\\tablet510\\birds_meal.jpg",
            "768px": "pictures\\tablet690\\birds_meal.jpg",
            "1440px": "pictures\\desktop\\birds_meal.jpg",
        },
        author: "Франсуа Дюпон",
        name: "Птичья трапеза",
        description: "Цветная литография (40х60) ",
        price: "22 500 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\lady_with_dog.jpg",
            "576px": "pictures\\tablet510\\lady_with_dog.jpg",
            "768px": "pictures\\tablet690\\lady_with_dog.jpg",
            "1440px": "pictures\\desktop\\lady_with_dog.jpg",
        },
        author: "Анри Селин",
        name: "Дама с собачкой",
        description: "Акрил, бумага (50х80) ",
        price: "16 500 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\procedure.jpg",
            "576px": "pictures\\tablet510\\procedure.jpg",
            "768px": "pictures\\tablet690\\procedure.jpg",
            "1440px": "pictures\\desktop\\procedure.jpg",
        },
        author: "Луи Детуш",
        name: "Процедура",
        description: "Цветная литография (40х60) ",
        price: "20 000 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\rose.jpg",
            "576px": "pictures\\tablet510\\rose.jpg",
            "768px": "pictures\\tablet690\\rose.jpg",
            "1440px": "pictures\\desktop\\rose.jpg",
        },
        author: "Луи Детуш",
        name: "Роза",
        description: "Бумага, акрил (50х80) ",
        price: "12 000 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\view_with_fish.jpg",
            "576px": "pictures\\tablet510\\view_with_fish.jpg",
            "768px": "pictures\\tablet690\\view_with_fish.jpg",
            "1440px": "pictures\\desktop\\view_with_fish.jpg",
        },
        author: "Пьер Моранж",
        name: "Пейзаж с рыбой",
        description: "Цветная литография (40х60) ",
        price: "20 000 руб",
    },
];
var germanyPictures = [
    {
        imageSources: {
            "320px": "pictures\\mobile\\above_the_city.jpg",
            "576px": "pictures\\tablet510\\above_the_city.jpg",
            "768px": "pictures\\tablet690\\above_the_city.jpg",
            "1440px": "pictures\\desktop\\above_the_city.jpg",
        },
        author: "Курт Вернер",
        name: "Над городом",
        description: "Цветная литография (40х60) ",
        price: "16 000 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\among_leafs.jpg",
            "576px": "pictures\\tablet510\\among_leafs.jpg",
            "768px": "pictures\\tablet690\\among_leafs.jpg",
            "1440px": "pictures\\desktop\\among_leafs.jpg",
        },
        author: "Мартин Майер",
        name: "Среди листьев",
        description: "Цветная литография (40х60) ",
        price: "20 000 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\big_waters.jpg",
            "576px": "pictures\\tablet510\\big_waters.jpg",
            "768px": "pictures\\tablet690\\big_waters.jpg",
            "1440px": "pictures\\desktop\\big_waters.jpg",
        },
        author: "Вальтер Хартманн",
        name: "Большие воды",
        description: "Бумага, акрил (50х80) ",
        price: "23 000 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\birds.jpg",
            "576px": "pictures\\tablet510\\birds.jpg",
            "768px": "pictures\\tablet690\\birds.jpg",
            "1440px": "pictures\\desktop\\birds.jpg",
        },
        author: "Макс Рихтер",
        name: "Птенцы",
        description: "Холст, масло (50х80) ",
        price: "14 500 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\bright_bird.jpg",
            "576px": "pictures\\tablet510\\bright_bird.jpg",
            "768px": "pictures\\tablet690\\bright_bird.jpg",
            "1440px": "pictures\\desktop\\bright_bird.jpg",
        },
        author: "Герман Беккер",
        name: "Яркая птица",
        description: "Цветная литография (40х60) ",
        price: "13 000 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\woodpeackers.jpg",
            "576px": "pictures\\tablet510\\woodpeackers.jpg",
            "768px": "pictures\\tablet690\\woodpeackers.jpg",
            "1440px": "pictures\\desktop\\woodpeackers.jpg",
        },
        author: "Вульф Бауэр",
        name: "Дятлы",
        description: "Бумага, акрил (50х80) ",
        price: "20 000 руб",
    },
];
var britishPictures = [
    {
        imageSources: {
            "320px": "pictures\\mobile\\mountain_shore.jpg",
            "576px": "pictures\\tablet510\\mountain_shore.jpg",
            "768px": "pictures\\tablet690\\mountain_shore.jpg",
            "1440px": "pictures\\desktop\\mountain_shore.jpg",
        },
        author: "Джон Уайт",
        name: "Скалистый берег",
        description: "Цветная литография (40х60) ",
        price: "17 500 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\night_fish.jpg",
            "576px": "pictures\\tablet510\\night_fish.jpg",
            "768px": "pictures\\tablet690\\night_fish.jpg",
            "1440px": "pictures\\desktop\\night_fish.jpg",
        },
        author: "Эрик Гиллман",
        name: "Ночная рыба",
        description: "Бумага, акрил (50х80) ",
        price: "12 500 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\red_cat.jpg",
            "576px": "pictures\\tablet510\\red_cat.jpg",
            "768px": "pictures\\tablet690\\red_cat.jpg",
            "1440px": "pictures\\desktop\\red_cat.jpg",
        },
        author: "Альфред Барр",
        name: "Рыжий кот",
        description: "Цветная литография (40х60) ",
        price: "21 000 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\river_and_mountains.jpg",
            "576px": "pictures\\tablet510\\river_and_mountains.jpg",
            "768px": "pictures\\tablet690\\river_and_mountains.jpg",
            "1440px": "pictures\\desktop\\river_and_mountains.jpg",
        },
        author: "Джим Уотсон",
        name: "Река и горы",
        description: "Акварель, бумага (50х80) ",
        price: "20 500 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\white_parrot.jpg",
            "576px": "pictures\\tablet510\\white_parrot.jpg",
            "768px": "pictures\\tablet690\\white_parrot.jpg",
            "1440px": "pictures\\desktop\\white_parrot.jpg",
        },
        author: "Юджин Зиллион",
        name: "Белый попугай",
        description: "Цветная литография (40х60) ",
        price: "15 500 руб",
    },
    {
        imageSources: {
            "320px": "pictures\\mobile\\wild_animal.jpg",
            "576px": "pictures\\tablet510\\wild_animal.jpg",
            "768px": "pictures\\tablet690\\wild_animal.jpg",
            "1440px": "pictures\\desktop\\wild_animal.jpg",
        },
        author: "Пол Смит",
        name: "Дикий зверь",
        description: "Акварель, бумага (50х80) ",
        price: "19 500 руб",
    },
];
var picturesOptions = {
    french: frenchPictures,
    germany: germanyPictures,
    british: britishPictures,
};
function createPictureBlockElement(pictureInfo) {
    var pictureBlock = document.createElement("div");
    pictureBlock.setAttribute("class", "reproductions__picture-block");
    var pictureBlockContent = document.createElement("div");
    pictureBlockContent.setAttribute("class", "reproductions__picture-block-content");
    var picture = document.createElement("picture");
    var source = document.createElement("source");
    source.setAttribute("media", "(min-width: 576px)");
    source.setAttribute("srcset", pictureInfo.imageSources["576px"]);
    picture.appendChild(source);
    source = document.createElement("source");
    source.setAttribute("media", "(min-width: 768px)");
    source.setAttribute("srcset", pictureInfo.imageSources["768px"]);
    picture.appendChild(source);
    source = document.createElement("source");
    source.setAttribute("media", "(min-width: 1440px)");
    source.setAttribute("srcset", pictureInfo.imageSources["1440px"]);
    picture.appendChild(source);
    var img = document.createElement("img");
    img.setAttribute("src", pictureInfo.imageSources["320px"]);
    img.setAttribute("alt", "\u041A\u0430\u0440\u0442\u0438\u043D\u0430 \"".concat(pictureInfo.name, "\""));
    picture.appendChild(img);
    var pAuthorName = document.createElement("p");
    pAuthorName.setAttribute("class", "reproductions__author-name");
    pAuthorName.innerHTML = pictureInfo.author;
    var hPictureName = document.createElement("h3");
    hPictureName.setAttribute("class", "reproductions__picture-name");
    hPictureName.innerHTML = pictureInfo.name;
    var pPictureDescription = document.createElement("p");
    pPictureDescription.setAttribute("class", "reproductions__picture-description");
    pPictureDescription.innerHTML = pictureInfo.description;
    var pPicturePrice = document.createElement("p");
    pPicturePrice.setAttribute("class", "reproductions__picture-price");
    pPicturePrice.innerHTML = pictureInfo.price;
    var buyButton = document.createElement("button");
    buyButton.setAttribute("class", "reproductions__buy-button get-button");
    buyButton.innerHTML = "В корзину";
    pictureBlockContent.appendChild(picture);
    pictureBlockContent.appendChild(pAuthorName);
    pictureBlockContent.appendChild(hPictureName);
    pictureBlockContent.appendChild(pPictureDescription);
    pictureBlockContent.appendChild(pPicturePrice);
    pictureBlockContent.appendChild(buyButton);
    pictureBlock.appendChild(pictureBlockContent);
    return pictureBlock;
}
var reproductionButton = document.getElementsByClassName("reproductions__country-button");
var reproductionPictures = document.querySelector(".reproductions__pictures");
var _loop_1 = function (i) {
    var pictures;
    reproductionButton[i].addEventListener("click", function () {
        switch (reproductionButton[i].innerHTML) {
            case "Франция":
                pictures = picturesOptions.french;
                break;
            case "Германия":
                pictures = picturesOptions.germany;
                break;
            case "Англия":
                pictures = picturesOptions.british;
                break;
        }
        reproductionPictures.innerHTML = "";
        for (var j = 0; j < pictures.length; j++) {
            reproductionPictures.appendChild(createPictureBlockElement(pictures[j]));
        }
    });
};
for (var i = 0; i < reproductionButton.length; i++) {
    _loop_1(i);
}
reproductionPictures.innerHTML = "";
for (var j = 0; j < frenchPictures.length; j++) {
    reproductionPictures.appendChild(createPictureBlockElement(frenchPictures[j]));
}
