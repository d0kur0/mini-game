import playerControls from "./playerControls.js"
import state from "./state.js";

export default function renderLoop () {
    const gameFieldRect = document.querySelector('.game__field')
        .getBoundingClientRect();

    state.fieldRect = {
        x: gameFieldRect.x,
        y: gameFieldRect.y,

        height: gameFieldRect.height,
        width: gameFieldRect.width,

        xEnd: gameFieldRect.x + gameFieldRect.width,
        yEnd: gameFieldRect.y + gameFieldRect.height
    };

    playerControls();
};