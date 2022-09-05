import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import '@bbva-web-components/bbva-web-template-modal/bbva-web-template-modal.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-option.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';

import '@bbva-web-components/bbva-foundations-grid-default-layout/bbva-foundations-grid-default-layout.js';

import styles from './CellsIdentityDocumentFormModalPgc-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-identity-document-form-modal-pgc></cells-identity-document-form-modal-pgc>
```

##styling-doc

@customElement cells-identity-document-form-modal-pgc
*/
export class CellsIdentityDocumentFormModalPgc extends LitElement {
  static get is() {
    return 'cells-identity-document-form-modal-pgc';
  }

  // Declare properties
  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      documentTypeLabel: { type: String },
      documentNumberLabel: { type: String },
      buttonLabel: { type: String },
      closeable: { type: Boolean },
      listDocumentsType: { type: Array },
      _documentType: { type: String },
      _documentNumber: { type: String },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = '';
    this.subtitle = '';
    this.documentTypeLabel = '';
    this.documentNumberLabel = '';
    this.buttonLabel = '';
    this.closeable = false;
    this.listDocumentsType = [];
    this._documentType = '';
    this._documentNumber = '';
  }
  async init(data) {
    this.reset();
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.documentTypeLabel = data.documentTypeLabel;
    this.documentNumberLabel = data.documentNumberLabel;
    this.buttonLabel = data.buttonLabel;
    this.closeable = data.closeable;
    this.listDocumentsType = data.listDocumentsType;
    this._documentType = '';
    this._documentNumber = '';
  }
  open() {
    const modal = this.shadowRoot.querySelector('#modal');
    modal.open();
  }
  close() {
    const modal = document.querySelector('#modal');
    modal.closest();
  }
  reset() {
    this.title = '';
    this.subtitle = '';
    this.documentTypeLabel = '';
    this.documentNumberLabel = '';
    this.buttonLabel = '';
    this.closeable = false;
    this.listDocumentsType = [];
    this._documentType = '';
    this._documentNumber = '';
  }

  getformData() {
    return {
      documentType: this._documentType,
      documentNumber: this._documentNumber,
    };
  }
  _acceptClicket() {
    this.dispatchEvent(
      new CustomEvent('accept-clicked', {
        bubbles: true,
        composed: true,
        detail: this.getformData(),
      })
    );
  }
  _closeClicket() {
    this.dispatchEvent(
      new CustomEvent('close-clicked', {
        bubbles: true,
        composed: true,
        detail: this.getformData(),
      })
    );
  }
  static get styles() {
    return [
      styles,
      getComponentSharedStyles(
        'cells-identity-document-form-modal-pgc-shared-styles'
      ),
    ];
  }

  // Define a template
  render() {
    return html`
      <bbva-web-template-modal id="modal" size="m" .close-clicked=${this._closeClicket}>
        <label class="title">${this.title}</label>
        <div class="body">
          <label class="subtitle">${this.subtitle}</label>
          <div class="g">
            <div class="g-col-lg-6 g-col-md-6 g-col-sm-4 g-col-xs-2">
              <slot name="left">
              ${this.documentTypeLabel}
              </slot>
            </div>
            <div class="g-col-lg-6 g-col-md-6 g-col-sm-4 g-col-xs-2">
              <slot name="right">
                <bbva-web-form-select></bbva-web-form-select>
              </slot>
            </div>
            <div class="g-col-lg-6 g-col-md-6 g-col-sm-4 g-col-xs-2">
              <slot name="left">
              ${this.documentNumberLabel}
              </slot>
            </div>
            <div class="g-col-lg-6 g-col-md-6 g-col-sm-4 g-col-xs-2">
              <slot name="right">
                <bbva-web-form-text></bbva-web-form-text>
              </slot>
            </div>
          </div>
          <bbva-web-button-default onclick=${this._acceptClicket()}>${this.buttonLabel}</bbva-web-button-default>
        </div>
      </bbva-web-template-modal>
    `;
  }
}
