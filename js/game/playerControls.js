import state from "./state.js";
import controlEvents from "./controlEvents.js";

export default function playerControls () {

    const events = new controlEvents();

    window.addEventListener('keydown', (event) => {
        state.player = document.querySelector('.game-player');
        state.playerRect = state.player.getBoundingClientRect();

        switch (event.which) {
            // left
            case 37:
                events.moveLeft();
                break;

            // right
            case 39:
                events.moveRight();
                break;

            // top
            case 38:
                events.jump();
                break;

            // bottom
            case 40:
                // ...
                break;
        }
    });

    window.addEventListener('keyup', () => {
        events.stop();
    })

}
