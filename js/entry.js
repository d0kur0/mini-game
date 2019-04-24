import popupControls from "./ui/popup-control.js";
popupControls.initialEvents();

import renderLoop from "./game/renderLoop.js";
requestAnimationFrame(renderLoop);