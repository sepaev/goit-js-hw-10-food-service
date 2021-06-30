import menu from '../db/menu.json';
import menuTpl from '../templates/menu.hbs';
import { refs } from './refs';
const createMenu = (obj) => {
    refs.menuList.innerHTML = obj.map( el => menuTpl(el)).join('');
}
createMenu(menu);
