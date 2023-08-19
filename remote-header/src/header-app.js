import headerStyles from './styles/remote-app-styles.scss';

export const elementName = 'mfe-header';

export class MfeRemoteHeader extends HTMLElement {
  constructor() {
    super();

    // assign this.shadowRoot to a local constant
    // otherwise this.shadowRoot can be used
    const shadowRt = this.attachShadow({
      mode: 'open',
      delegatesFocus: true,
      slotAssignment: 'named'
    });
    shadowRt.appendChild(this.createHeaderNode());

    // alternatively, instead of creating a Node instance,
    // HTML template string can be assigned via innerHTML
    // this.shadowRoot.innerHTML =
    //   `<header class="mfe-header-container">
    //     <h1 class="mfe-header-title">MFE Header</h1>
    //   </header>`;

    // Attach CSS module styles to our custom element.
    // CSS modules loaded with lazyStyleTag (see webpack.config.js)
    // can be injected/removed via style.use() and style.unuse().
    headerStyles.use({ target: shadowRt });
  }

  // web components lifecycle hooks:
  connectedCallback() {
    console.log('MfeRemoteHeader got attached to DOM');
  }
  disconnectedCallback() {
    console.log('MfeRemoteHeader got removed from DOM');
  }

  createHeaderNode() {
    console.log('MfeRemoteHeader - createHeader');
   
    const titleElement = document.createElement('h1');
    titleElement.classList.add('mfe-header-title');
    titleElement.innerText = 'MFE Remote Header';
  
    const headerElement = document.createElement('header');
    headerElement.classList.add('mfe-header-container');
    headerElement.appendChild(titleElement);
    return headerElement;
  }
}

customElements.define(elementName, MfeRemoteHeader);
