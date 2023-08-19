import './styles/app.scss';
import { elementName as headerElementName } from 'remote-header-app/header';
import { elementName as bodyElementName } from 'remote-body-app/body';
import { elementName as navElementName } from 'remote-nav-app/nav';

function createApp() {
  append(headerElementName, "mfe-header");
  append(bodyElementName, "mfe-body");
  append(navElementName, "mfe-nav");
}

function append(remoteElementName, hostElementId) {
  const remoteElement = document.createElement(remoteElementName);
  const hostElement = document.getElementById(hostElementId);
  hostElement.appendChild(remoteElement);
}

export default createApp;
