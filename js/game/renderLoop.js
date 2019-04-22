import playerControls from "./playerControls.js"
import state from "./state.js";

export default function renderLoop () {

    state.field = document.querySelector('.game-field');
    state.fieldRect = state.field.getClientRects();
    state.player = document.querySelector('.game-player');

    playerControls();
};
