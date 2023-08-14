import './styles/header-styles.scss';

// create Header
function createHeader() {
  console.log('init header element');

  const headerContainerElement = document.createElement('div');
  headerContainerElement.classList.add('mfe-header-container');

  const titleElement = document.createElement('h1');
  headerContainerElement.classList.add('mfe-header-title');
  headerContainerElement.setAttribute('id', 'header-title');
  headerContainerElement.innerHTML = 'MFE Header';

  headerContainerElement.appendChild(titleElement);
  return headerContainerElement;
}

export default createHeader;
