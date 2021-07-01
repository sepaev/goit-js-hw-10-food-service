import { refs } from './refs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let actions = changeActions(false);

function changeActions(makeDark) {
    return makeDark ?
        { toAdd: Theme.DARK, toRemove: Theme.LIGHT, toggle: true }
        :
        { toAdd: Theme.LIGHT, toRemove: Theme.DARK, toggle: false };
}

function addAndRemoveClass({ toAdd, toRemove, toggle }) {
    refs.body.classList.add(toAdd);
    refs.body.classList.remove(toRemove);
    refs.switcher.checked = toggle;
    localStorage.setItem("currentTheme", toAdd);
}

const switchTheme = () => {
    actions = changeActions(refs.body.classList.contains(Theme.LIGHT));
    addAndRemoveClass(actions);

}
refs.switcher.addEventListener('click', switchTheme);

function onLoad(currentTheme) {
    console.log(currentTheme);
    if (!currentTheme) {
        refs.body.classList.add(actions.toAdd);
        localStorage.setItem("currentTheme", actions.toAdd);
        return;
    }
    actions = changeActions(currentTheme !== Theme.LIGHT);
    addAndRemoveClass(actions);
}

onLoad(localStorage.getItem("currentTheme"));