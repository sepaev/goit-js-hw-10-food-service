import menu from '../db/menu.json';
import { refs } from './refs';
const createMenu = () => {
    let htmlText = '';
  menu.map(({ name, description, image, price, ingredients}) => {
      let ingridientsList = '';
      ingredients.forEach((ingridient) => {
        ingridientsList  += `<li class="tag-list__item">${ingridient}</li>`
      })
      htmlText += `<li class="menu__item">
                    <article class="card">
                        <img
                        src="${image}"
                        alt="${name}"
                        class="card__image"
                        />
                        <div class="card__content">
                        <h2 class="card__name">${name}</h2>
                        <p class="card__price">
                            <i class="material-icons"> monetization_on </i>
                            ${price} кредитов
                        </p>

                        <p class="card__descr">${description}</p>

                        <ul class="tag-list">${ingridientsList}</ul>
                        </div>

                        <button class="card__button button">
                        <i class="material-icons button__icon"> shopping_cart </i>
                        В корзину
                        </button>
                    </article>
                    </li>   
`
  });
  refs.menuList.innerHTML = htmlText;
     console.log(refs); 
}
createMenu();
