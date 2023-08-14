import './styles/app.scss';
import Header from 'remote-header/Header';

function createApp() {
  console.log('init app');
  console.log('got remote header module:', Header);
  const headerElement = Header.createHeader();
  const appElement = document.createElement("app");
  appElement.appendChild(headerElement);
  return appElement;
}

export default createApp;
