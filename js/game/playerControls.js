import state from "./state.js";

export default function playerControls () {

    window.addEventListener('keydown', (event) => {
        const player = document.querySelector('.game__player');
        const playerRect = player.getBoundingClientRect();
        const stepSize = 10;

        let currentX = player.style.left.match(/\d+/g);
        let currentY = player.style.top.match(/\d+/g);

        let currentPosition = {
            x: parseInt(currentX === null ? 0 : currentX),
            y: parseInt(currentY === null ? 0 : currentY)
        };

        let newPosition = {
            x: currentPosition.x,
            y: currentPosition.y
        };

        console.log(newPosition);

        switch (event.which) {
            // left
            case 37:
                if (!currentPosition.x) {
                    return;
                }

                newPosition.x -= stepSize;
                break;

            // right
            case 39:
                if ((newPosition.x + playerRect.width) + stepSize >= state.fieldRect.width) {
                    let outside = state.fieldRect.width - (newPosition.x + stepSize);

                    if (outside > 0) {
                        newPosition.x = state.fieldRect.width - playerRect.width;
                    } else {
                        return;
                    }
                }
                else
                {
                    newPosition.x += stepSize;
                }
                break;

            // top
            case 38:
                if (!currentPosition.y) {
                    return;
                }

                newPosition.y -= stepSize;
                break;

            // bottom
            case 40:
                if ((newPosition.y + playerRect.height) + stepSize >= state.fieldRect.height) {
                    let outside = state.fieldRect.height - (newPosition.y + stepSize);

                    if (outside > 0) {
                        newPosition.y = state.fieldRect.height - playerRect.height;
                    } else {
                        return;
                    }
                }
                else
                {
                    newPosition.y += stepSize;
                }
                break;
        }

        player.style.left = newPosition.x + 'px';
        player.style.top  = newPosition.y + 'px';
    });

}
