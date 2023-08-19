import { elementName } from './header-app';
import standaloneStyles from './styles/standalone-app-styles.scss';

// load header app
const headerHostElement = document.getElementById("standalone-header-root");
const headerElement = document.createElement(elementName);
headerHostElement.appendChild(headerElement);
document.body.appendChild(headerHostElement);

// For a plain JavaScript app without any dependencies, the boostrap steps is not necessary;
// app.js (for exporting as a remote) and index.js (for standalone testing) would be enough.
// Keeping bootstrap for consistency with other MFE sample apps (React, Angular).
