import './styles/app.scss';
import { elementName as headerElementName } from 'remote-header-app/header';
import { elementName as bodyElementName } from 'remote-body-app/body';
import { elementName as navElementName } from 'remote-nav-app/nav';
// import { elementName as footerElementName } from 'remote-footer-app/footer';

function createApp() {
  // remote header
  const remoteHeader = document.createElement(headerElementName);
  const headerHost = document.getElementById("mfe-header");
  headerHost.appendChild(remoteHeader);

  // remote body
  const remoteBody = document.createElement(bodyElementName);
  const bodyHost = document.getElementById("mfe-body");
  bodyHost.appendChild(remoteBody);

  // remote nav
  const remoteNav = document.createElement(navElementName);
  const navHost = document.getElementById("mfe-nav");
  bodyHost.appendChild(remoteNav);

  // remote footer
  // const footerElement = document.createElement(footerElementName);
  // const footerHost = document.getElementById("mfe-footer");
  // footerHost.appendChild(footerElement);
}

export default createApp;
