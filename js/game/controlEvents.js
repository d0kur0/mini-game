import state from "./state.js";

export default class controlEvents {
  moveXStep = 10;

  __setNewXPosition (x) {
    state.player.style.left = x + 'px';
  }

  moveLeft () {
    state.player.setAttribute('state', 'run-left');

    this.__setNewXPosition(state.playerRect.left - this.moveXStep);
  }

  moveRight () {
    state.player.setAttribute('state', 'run-right');

    this.__setNewXPosition(state.playerRect.left + this.moveXStep);
  }

  jump () {

  }

  stop () {
    state.player.setAttribute('state', 'stop');
  }
}
