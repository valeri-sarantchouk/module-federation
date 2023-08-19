import { elementName } from './nav-app';
import standaloneStyles from './styles/standalone-app-styles.scss';

// load body app
const bodyHostElement = document.getElementById("standalone-navigatioon-root");
const bodyElement = document.createElement(elementName);
bodyHostElement.appendChild(bodyElement);
document.body.appendChild(bodyHostElement);

// For a plain JavaScript app without any dependencies, the boostrap steps is not necessary;
// app.js (for exporting as a remote) and index.js (for standalone testing) would be enough.
// Keeping bootstrap for consistency with other MFE sample apps (React, Angular).
