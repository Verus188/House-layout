const burger = document.querySelector(".header__burger-menu")!;
const headerMenu = document.querySelector(".header__menu")!;

burger.addEventListener("click", function () {
  headerMenu.classList.toggle("header__menu-active");
  document.body.classList.toggle("lock");
  window.scrollTo(0, 0);
});

interface Picture {
  imageSrc: string;
  author: string;
  name: string;
  description: string;
  price: string;
}

const frenchPictures: Picture[] = [
  {
    imageSrc: "pictures\\mobile\\French\\Amur's-hunt.png",
    author: "Марсель Руссо",
    name: "Охота Амура",
    description: "Холст, масло (50х80) ",
    price: "14 500 руб",
  },
  {
    imageSrc: "pictures\\mobile\\French\\Birds'-meal.png",
    author: "Франсуа Дюпон",
    name: "Птичья трапеза",
    description: "Цветная литография (40х60) ",
    price: "22 500 руб",
  },
  {
    imageSrc: "pictures\\mobile\\French\\Lady-with-dog.png",
    author: "Анри Селин",
    name: "Дама с собачкой",
    description: "Акрил, бумага (50х80) ",
    price: "16 500 руб",
  },
  {
    imageSrc: "pictures\\mobile\\French\\Procedure.png",
    author: "Луи Детуш",
    name: "Процедура",
    description: "Цветная литография (40х60) ",
    price: "20 000 руб",
  },
  {
    imageSrc: "pictures\\mobile\\French\\Rose.png",
    author: "Луи Детуш",
    name: "Роза",
    description: "Бумага, акрил (50х80) ",
    price: "12 000 руб",
  },
  {
    imageSrc: "pictures\\mobile\\French\\View-with-fish.png",
    author: "Пьер Моранж",
    name: "Пейзаж с рыбой",
    description: "Цветная литография (40х60) ",
    price: "20 000 руб",
  },
];

const germanyPictures: Picture[] = [
  {
    imageSrc: "pictures\\mobile\\Germany\\above-city.png",
    author: "Курт Вернер",
    name: "Над городом",
    description: "Цветная литография (40х60) ",
    price: "16 000 руб",
  },
  {
    imageSrc: "pictures\\mobile\\Germany\\among-leafs.png",
    author: "Мартин Майер",
    name: "Среди листьев",
    description: "Цветная литография (40х60) ",
    price: "20 000 руб",
  },
  {
    imageSrc: "pictures\\mobile\\Germany\\big-waters.png",
    author: "Вальтер Хартманн",
    name: "Большие воды",
    description: "Бумага, акрил (50х80) ",
    price: "23 000 руб",
  },
  {
    imageSrc: "pictures\\mobile\\Germany\\birds.png",
    author: "Макс Рихтер",
    name: "Птенцы",
    description: "Холст, масло (50х80) ",
    price: "14 500 руб",
  },
  {
    imageSrc: "pictures\\mobile\\Germany\\bright-bird.png",
    author: "Герман Беккер",
    name: "Яркая птица",
    description: "Цветная литография (40х60) ",
    price: "13 000 руб",
  },
  {
    imageSrc: "pictures\\mobile\\Germany\\woodpeckers.png",
    author: "Вульф Бауэр",
    name: "Дятлы",
    description: "Бумага, акрил (50х80) ",
    price: "20 000 руб",
  },
];

const britishPictures: Picture[] = [
  {
    imageSrc: "pictures\\mobile\\British\\hills.png",
    author: "Джон Уайт",
    name: "Горный пейзаж",
    description: "Цветная литография (40х60) ",
    price: "17 500 руб",
  },
  {
    imageSrc: "pictures\\mobile\\British\\night-fish.png",
    author: "Эрик Гиллман",
    name: "Ночная рыба",
    description: "Бумага, акрил (50х80) ",
    price: "12 500 руб",
  },
  {
    imageSrc: "pictures\\mobile\\British\\red-cat.png",
    author: "Альфред Барр",
    name: "Рыжий кот",
    description: "Цветная литография (40х60) ",
    price: "21 000 руб",
  },
  {
    imageSrc: "pictures\\mobile\\British\\river-and-mountains.png",
    author: "Джим Уотсон",
    name: "Река и горы",
    description: "Акварель, бумага (50х80) ",
    price: "20 500 руб",
  },
  {
    imageSrc: "pictures\\mobile\\British\\white-parrot.png",
    author: "Юджин Зиллион",
    name: "Белый попугай",
    description: "Цветная литография (40х60) ",
    price: "15 500 руб",
  },
  {
    imageSrc: "pictures\\mobile\\British\\wild-beast.png",
    author: "Пол Смит",
    name: "Дикий зверь",
    description: "Акварель, бумага (50х80) ",
    price: "19 500 руб",
  },
];

const picturesOptions = {
  french: frenchPictures,
  germany: germanyPictures,
  british: britishPictures,
};

function createPictureBlockElement(pictureInfo: Picture): HTMLDivElement {
  const pictureBlock = document.createElement("div");
  pictureBlock.setAttribute("class", "reproductions__picture-block");

  const picture = document.createElement("picture");
  const img = document.createElement("img");
  img.setAttribute("src", pictureInfo.imageSrc);
  img.setAttribute("alt", `Картина "${pictureInfo.name}"`);

  const pAuthorName = document.createElement("p");
  pAuthorName.setAttribute("class", "reproductions__author-name");
  pAuthorName.innerHTML = pictureInfo.author;

  const hPictureName = document.createElement("h3");
  hPictureName.setAttribute("class", "reproductions__picture-name");
  hPictureName.innerHTML = pictureInfo.name;

  const pPictureDescription = document.createElement("p");
  pPictureDescription.setAttribute(
    "class",
    "reproductions__picture-description"
  );
  pPictureDescription.innerHTML = pictureInfo.description;

  const pPicturePrice = document.createElement("p");
  pPicturePrice.setAttribute("class", "reproductions__picture-price");
  pPicturePrice.innerHTML = pictureInfo.price;

  const buyButton = document.createElement("button");
  buyButton.setAttribute("class", "reproductions__buy-button get-button");
  buyButton.innerHTML = "В корзину";

  picture.appendChild(img);
  picture.appendChild(pAuthorName);
  picture.appendChild(hPictureName);
  picture.appendChild(pPictureDescription);
  picture.appendChild(pPicturePrice);
  picture.appendChild(buyButton);

  pictureBlock.appendChild(picture);

  return pictureBlock;
}

const reproductionButton = document.getElementsByClassName(
  "reproductions__country-button"
);
const reproductionPictures = document.querySelector(".reproductions__pictures");

for (let i = 0; i < reproductionButton.length; i++) {
  let pictures;
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
    for (let j = 0; j < pictures.length; j++) {
      reproductionPictures.appendChild(createPictureBlockElement(pictures[j]));
    }
  });
}

reproductionPictures.innerHTML = "";
for (let j = 0; j < frenchPictures.length; j++) {
  reproductionPictures.appendChild(
    createPictureBlockElement(frenchPictures[j])
  );
}
