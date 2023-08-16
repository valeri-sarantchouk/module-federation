import './styles/header-styles.scss';

const elementName = 'mfe-header';

class MfeRemoteHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({
      mode: 'open',
      delegatesFocus: true,
      slotAssignment: 'named'
    });
    shadowRoot.appendChild(createHeader());

    // alternatively, inject HTML markup into shadow root:
    // this.shadowRoot.innerHTML =
    //   `<header class="mfe-header-container">
    //     <h1 class="mfe-header-title">MFE Header</h1>
    //   </header>`;
  }
}

// create Header
function createHeader() {
  console.log('init header node');

  const titleElement = document.createElement('h1');
  titleElement.classList.add('mfe-header-title');
  titleElement.innerText = 'MFE Header';

  const headerElement = document.createElement('header');
  headerElement.classList.add('mfe-header-container');
  headerElement.appendChild(titleElement);
  return headerElement;
}

customElements.define(elementName, MfeRemoteHeader);

export {
  createHeader,
  elementName
};
