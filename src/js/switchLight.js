import { refs } from './refs';
let actions = changeActions(false);

function changeActions(makeDark) {
    return makeDark ?
        { toAdd: 'dark-theme', toRemove: 'light-theme', toggle: true }
        :
        { toAdd: 'light-theme', toRemove: 'dark-theme', toggle: false };
}

function addAndRemoveClass({ toAdd, toRemove, toggle }) {
    refs.body.classList.add(toAdd);
    refs.body.classList.remove(toRemove);
    refs.switcher.checked = toggle;
    localStorage.setItem("currentTheme", toAdd);
}

const switchTheme = () => {
    actions = changeActions(refs.body.classList.contains('light-theme'));
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
    actions = changeActions(currentTheme !== 'light-theme');
    addAndRemoveClass(actions);
}

onLoad(localStorage.getItem("currentTheme"));