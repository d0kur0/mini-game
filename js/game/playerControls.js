import state from "./state.js";
import controlEvents from "./controlEvents.js";

export default function playerControls () {

  const events = new controlEvents();

  window.addEventListener('keydown', event => {

    switch (event.which) {
      case 37:
        events.moveStart('left');
        break;
      case 39:
        events.moveStart('right');
        break;
      case 32:
        events.jump();
        break;
      case 18:
        events.attack(3);
        break;
    }
  });

  window.addEventListener('keyup', event => {
    switch (event.which) {
      case 37:
        events.moveStop();
        break;
      case 39:
        events.moveStop();
        break;
      case 38:
        // ...
        break
      case 40:
        // ...
        break;
    }
  });

}
