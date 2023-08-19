// import bodyStyles from './styles/remote-app-styles.scss';

export const elementName = 'mfe-body';

export class MfeRemoteBody extends HTMLElement {
  constructor() {
    super();

    // assign this.shadowRoot to a local const
    const shadowRt = this.attachShadow({
      mode: 'open',
      delegatesFocus: true,
      slotAssignment: 'named'
    });

    const styleString = require('!raw-loader!./styles/remote-app-styles.scss');

    shadowRt.innerHTML = `
      <style>${styleString.default}</style>
      <div class="mfe-body-container">
        <section class="mfe-body-section">
          <h2>First Section</h2>
          <div class="mfe-section-narrative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="mfe-section-amounts">
            <div class="mfe-card">
              <div class="amount-label">Total LTV</div>
              <div class="amount-label">85%</div>
            </div>
            <div class="mfe-card">
              <div class="amount-label">Total TDI</div>
              <div class="amount-label">17%</div>
            </div>
            <div class="mfe-card">
              <div class="amount-label">Requested Amount</div>
              <div class="amount-label">$3,800,000.00</div>
            </div>
            <div class="mfe-card">
              <div class="amount-label">Downpayment Amount</div>
              <div class="amount-label">$800,000.00</div>
            </div>
            <div class="mfe-card">
              <div class="amount-label">Qualified Amount</div>
              <div class="amount-label">$1,500,000.00</div>
            </div>
          </div>
        </section>
        <section class="mfe-body-section">
          <h2>Second Section</h2>
          <div class="mfe-section-narrative">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div class="mfe-section-amounts-grid">
            <div class="mfe-card">
              <div class="amount-label">Total LTV</div>
              <div class="amount-label">85%</div>
            </div>
            <div class="mfe-card">
              <div class="amount-label">Total TDI</div>
              <div class="amount-label">17%</div>
            </div>
            <div class="mfe-card">
              <div class="amount-label">Requested Amount</div>
              <div class="amount-label">$3,800,000.00</div>
            </div>
            <div class="mfe-card">
              <div class="amount-label">Downpayment Amount</div>
              <div class="amount-label">$800,000.00</div>
            </div>
            <div class="mfe-card">
              <div class="amount-label">Qualified Amount</div>
              <div class="amount-label">$1,500,000.00</div>
            </div>
          </div>
        </section>
        <section class="mfe-body-section">
          <h2>Third Section</h2>
          <div class="mfe-section-narrative">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </div>
        </section>
      </div>`;

    // CSS module loaded with lazyStyleTag can be injected/removed via style.use() and style.unuse().
    // bodyStyles.use({ target: this.shadowRoot });
  }

  // connectedCallback() {
  //   console.log('MfeRemoteBody got attached to DOM');

  //   bodyStyles.use({ target: this.shadowRoot });

  //   this.shadowRoot.innerHTML = 
  //   `<div class="mfe-body-container">
  //       <section class="mfe-body-section">
  //         <h2>First Section</h2>
  //         <div class="mfe-section-narrative">
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //         </div>
  //         <div class="mfe-section-amounts">
  //           <div class="mfe-card">
  //             <div class="amount-label">Total LTV</div>
  //             <div class="amount-label">85%</div>
  //           </div>
  //           <div class="mfe-card">
  //             <div class="amount-label">Total TDI</div>
  //             <div class="amount-label">17%</div>
  //           </div>
  //           <div class="mfe-card">
  //             <div class="amount-label">Requested Amount</div>
  //             <div class="amount-label">$3,800,000.00</div>
  //           </div>
  //           <div class="mfe-card">
  //             <div class="amount-label">Downpayment Amount</div>
  //             <div class="amount-label">$800,000.00</div>
  //           </div>
  //           <div class="mfe-card">
  //             <div class="amount-label">Qualified Amount</div>
  //             <div class="amount-label">$1,500,000.00</div>
  //           </div>
  //         </div>
  //       </section>
  //       <section class="mfe-body-section">
  //         <h2>Second Section</h2>
  //         <div class="mfe-section-narrative">
  //           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //         </div>
  //         <div class="mfe-section-amounts-grid">
  //           <div class="mfe-card">
  //             <div class="amount-label">Total LTV</div>
  //             <div class="amount-label">85%</div>
  //           </div>
  //           <div class="mfe-card">
  //             <div class="amount-label">Total TDI</div>
  //             <div class="amount-label">17%</div>
  //           </div>
  //           <div class="mfe-card">
  //             <div class="amount-label">Requested Amount</div>
  //             <div class="amount-label">$3,800,000.00</div>
  //           </div>
  //           <div class="mfe-card">
  //             <div class="amount-label">Downpayment Amount</div>
  //             <div class="amount-label">$800,000.00</div>
  //           </div>
  //           <div class="mfe-card">
  //             <div class="amount-label">Qualified Amount</div>
  //             <div class="amount-label">$1,500,000.00</div>
  //           </div>
  //         </div>
  //       </section>
  //       <section class="mfe-body-section">
  //         <h2>Third Section</h2>
  //         <div class="mfe-section-narrative">
  //           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  //         </div>
  //       </section>
  //   </div>`;
  // }
}

customElements.define(elementName, MfeRemoteBody);
