import './styles/app.scss';
import { elementName } from 'remote-header-app/header';

function createApp() {
  console.log('init app');
  const headerElement = document.createElement(elementName);
  const appElement = document.createElement("mfe-app");
  appElement.appendChild(headerElement);
  return appElement;
}

export default createApp;
