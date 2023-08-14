import createHeader from './app';

// load app
const mainElement = document.createElement("main");
mainElement.appendChild(createHeader());

document.body.appendChild(mainContainerElement);

// For a plain JavaScript app without any dependencies, the boostrap steps is not necessary; 
// app.js (for exporting as a remote) and index.js (for standalone testing) would be enough.
// Keeping bootstrap for consistency with other MFE sample apps (React, Angular).
