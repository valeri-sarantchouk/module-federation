import createApp from './app';

// load host app
const rootElement = document.getElementById("mfe-root");
rootElement.appendChild(createApp());

document.body.appendChild(rootElement);
