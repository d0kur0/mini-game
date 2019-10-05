import state from "./state.js";

export default class controlEvents {
  moveXStep = 10;

  isMove = false;
  moveInterval;
  moveDirection;

  isJump = false;

  isAttack = false;

  __setNewXPosition (x) {
    state.player.style.left = x + 'px';
  }

  __setNewYPosition (y) {
    state.player.style.bottom = y + 'px';
  }

  __getYPosition () {
    return state.field.offsetHeight - (state.player.offsetTop + state.player.offsetHeight);
  }

  moveStart (direction) {

    if (this.isMove) {
      return;
    }

    let currentXPosition = state.player.offsetLeft;
    let newXPosition = currentXPosition;

    this.isMove = true;
    this.moveDirection = `run-${direction}`;
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

        if (newXPosition + state.player.offsetWidth > state.field.offsetWidth) {
           newXPosition = state.field.offsetWidth - state.player.offsetWidth;
        }
      }

      this.__setNewXPosition(newXPosition);

    }, 1000 / 90);
  }

  moveStop () {
    clearInterval(this.moveInterval);
    this.isMove = false;
    state.player.setAttribute('state', 'stop');
  }

  jump () {
    if (this.isJump) {
      return;
    }

    this.isJump = true;
    state.player.setAttribute('state', 'jump');

    let initialYPosition = this.__getYPosition();
    let jumpTick = 4;
    let frame = 0;

    const process = setInterval(() => {

      let currentYPosition = this.__getYPosition();
      let newYPosition = currentYPosition;

      frame += jumpTick;

      if (frame > 150) {
        newYPosition -= jumpTick;
      } else {
        newYPosition += jumpTick;
      }

      if (newYPosition < initialYPosition) {
        this.__setNewYPosition(initialYPosition);
        this.isJump = false;

        if (this.isMove) {
          state.player.setAttribute('state', this.moveDirection);
        } else {
          state.player.setAttribute('state', 'stop');
        }

        clearInterval(process);
        return;
      }

      this.__setNewYPosition(newYPosition);

    }, 10);
  }

  attack (type) {
    if (this.isAttack) {
      return;
    }

    this.isAttack = true;
    state.player.setAttribute('state', `attack-${type}`);

    setTimeout(() => {
      if (this.isMove) {
        state.player.setAttribute('state', this.moveDirection);
      } else {
        state.player.setAttribute('state', 'stop');
      }

      this.isAttack = false;
    }, 1000);
  }
}
