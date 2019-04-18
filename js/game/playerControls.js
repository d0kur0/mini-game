import state from "./state.js";

export default function playerControls () {

    window.addEventListener('keydown', (event) => {
        const player = document.querySelector('.game__player');
        const playerRect = player.getBoundingClientRect();
        const stepSizes = 10;

        let currentX = player.style.left.match(/\d+/g);
        let currentY = player.style.top.match(/\d+/g);

        let currentPosition = {
            x: parseInt(currentX ? currentX : 0),
            y: parseInt(currentY ? currentY : 0)
        };

        let newPosition = {
            x: currentPosition.x,
            y: currentPosition.y
        };

        switch (event.which) {
            // left
            case 37:
                newPosition.x -= stepSizes;
                console.log('left');
                break;

            // right
            case 39:
                newPosition.x += stepSizes;
                console.log('right');
                break;

            // top
            case 38:
                newPosition.y -= stepSizes;
                console.log('top');
                break;

            // bottom
            case 40:
                newPosition.y += stepSizes;
                console.log('bottom');
                break;
        }

        const restX = (player.width + newPosition.x) - state.fieldRect.width;
        const restY = (player.height + newPosition.y) - state.fieldRect.height;

        const isYOutside = (newPosition.y + playerRect.height) > state.fieldRect.height || newPosition.y < 0;
        const isXOutside = (newPosition.x + playerRect.width) > state.fieldRect.width || newPosition.x < 0;

        if (isXOutside || isYOutside) {
            return;
        }

        player.style.left = newPosition.x + 'px';
        player.style.top  = newPosition.y + 'px';
    });

}
