import playerControls from "./playerControls.js"
import state from "./state.js";

export default function renderLoop () {
    const field = document.querySelector('.game-field');

    state.fieldRect = field.getBoundingClientRect();

    playerControls();
};
