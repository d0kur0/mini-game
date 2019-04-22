import state from "./state.js";

export default class controlEvents {
  moveXStep = 10;

  isMove = false;
  moveInterval;

  __setNewXPosition (x) {
    state.player.style.left = x + 'px';
  }

  moveStart (direction) {

    if (this.isMove) {
      return;
    }

    let currentXPosition = state.player.offsetLeft;
    let newXPosition = currentXPosition;

    this.isMove = true;
    this.moveInterval = setInterval(() => {

      if (direction === 'left') {

        state.player.setAttribute('state', 'run-left');
        newXPosition -= this.moveXStep;

        if (newXPosition < 0 || (newXPosition > 0 && newXPosition < this.moveXStep)) {
          newXPosition = 0;
        }

      } else if (direction === 'right') {

        state.player.setAttribute('state', 'run-right');
        newXPosition += this.moveXStep;

        console.log(state.fieldRect.width, newXPosition, state.player.offsetWidth);

        if (newXPosition > state.fieldRect.width) {
           newXPosition = state.fieldRect.width - state.player.offsetWidth;
        }
      }

      this.__setNewXPosition(newXPosition);

    }, 1000 / 60);
  }

  moveStop () {
    clearInterval(this.moveInterval);
    this.isMove = false;
    state.player.setAttribute('state', 'stop');
  }
}
