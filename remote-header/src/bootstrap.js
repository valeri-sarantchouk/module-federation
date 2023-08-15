import createHeader from './app';

// load header app
const headerHostElement = document.getElementById("headerPlacehholder");
headerHostElement.appendChild(createHeader());
document.body.appendChild(headerHostElement);

// For a plain JavaScript app without any dependencies, the boostrap steps is not necessary; 
// app.js (for exporting as a remote) and index.js (for standalone testing) would be enough.
// Keeping bootstrap for consistency with other MFE sample apps (React, Angular).
