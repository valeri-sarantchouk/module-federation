import './styles/app.scss';
import createHeader from 'remote-header-app/header';

function createApp() {
  console.log('init app');
  console.log('got remote header module:', createHeader);
  const headerElement = createHeader();
  const appElement = document.createElement("mfe-app");

  appElement.appendChild(headerElement);

  return appElement;
}

export default createApp;
