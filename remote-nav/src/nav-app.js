import remoteBodyStyles from './styles/remote-app-styles.scss';

export const elementName = 'mfe-navigation';

export class MfeRemoteBody extends HTMLElement {
  constructor() {
    super();

    // assign this.shadowRoot to a local const
    const shadowRt = this.attachShadow({
      mode: 'open',
      delegatesFocus: true,
      slotAssignment: 'named'
    });

    shadowRt.innerHTML = 
      `<nav class="mfe-nav-container">
          <div class="mfe-nav-item">
            <a class="mfe-nav-item__cta" href="#">Home</a>
          </div>
          <div class="mfe-nav-item">
            <a class="mfe-nav-item__cta" href="#">About</a>
          </div>
          <div class="mfe-nav-item">
            <a class="mfe-nav-item__cta" href="#">Contact</a>
          </div>
       </nav>`;

    // CSS module loaded with lazyStyleTag can be injected/removed via style.use() and style.unuse().
    remoteBodyStyles.use({ target: shadowRt });
  }
}

customElements.define(elementName, MfeRemoteBody);
