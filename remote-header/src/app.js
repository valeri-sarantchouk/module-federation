import './styles/header-styles.scss';

// create Header
function createHeader() {
  console.log('init header element');

  const headerElement = document.createElement("mfe-header");

  const headerContainerElement = document.createElement('div');
  headerContainerElement.classList.add('mfe-header-container');
  
  const titleElement = document.createElement('h1');
  titleElement.classList.add('mfe-header-title');
  titleElement.setAttribute('id', 'header-title');
  titleElement.innerHTML = 'MFE Header';
  
  headerContainerElement.appendChild(titleElement);
  headerElement.appendChild(headerContainerElement);

  return headerElement;
}

export default createHeader;
