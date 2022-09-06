import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import '@bbva-web-components/bbva-web-template-modal/bbva-web-template-modal.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-option.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';
import { bbvaClose } from '@bbva-web-components/bbva-foundations-icons';
import { BbvaCoreModal } from '@bbva-web-components/bbva-core-modal';
import { BbvaCoreSlotsContentMixin } from '@bbva-web-components/bbva-core-slots-content-mixin';
import { BbvaCoreFocusVisibleMixin } from '@bbva-web-components/bbva-core-focus-visible-mixin';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { BbvaCoreResizeObservableElementMixin } from '@bbva-web-components/bbva-core-resize-observable-element-mixin';

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
const iconClose = bbvaClose();

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

      closeIcon: { type: String,
      attribute: 'close-label'}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.closeIcon = iconClose;
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
    this.title = data.title ? data.title : this.title;
    this.subtitle = data.subtitle ? data.subtitle : this.subtitle;
    this.documentTypeLabel = data.documentTypeLabel
      ? data.documentTypeLabel
      : this.documentTypeLabel;
    this.documentNumberLabel = data.documentNumberLabel
      ? data.documentNumberLabel
      : this.documentNumberLabel;
    this.buttonLabel = data.buttonLabel ? data.buttonLabel : this.buttonLabel;
    this.closeable = data.closeable ? data.closeable : this.closeable;
    this.listDocumentsType = data.listDocumentsType
      ? data.listDocumentsType
      : this.listDocumentsType;
    this._documentType = '';
    this._documentNumber = '';
  }
  open() {
    this.open();
  }
  close() {
    this.close();
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
  _acceptClicked() {
    this.dispatchEvent(
      new CustomEvent('accept-clicked', {
        bubbles: true,
        composed: true,
        detail: this.getformData(),
      })
    );
  }
  _closeClicked() {
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
      <div class="modal">
        <div class="modal-header">
          <label class="title">${this.title}</label>
          <button type="button" class="close-btn" @click="${this._closeClicked}">
            <bbva-core-icon class="close-icon" .icon="${this.closeIcon}"></bbva-core-icon>
          </button>
        </div>
        <div class="modal-content">
          <label class="subtitle">${this.subtitle}</label>
          <div class="form-group">
            <label> ${this.documentTypeLabel}:</label>
            <bbva-web-form-select class="lg-6">
              ${this.listDocumentsType.map(
                (documentType) => html`
                  <bbva-web-form-option>${documentType.type}</bbva-web-form-option>
                `
              )}
            </bbva-web-form-select>
          </div>
          <div class="form-group">
            <label> ${this.documentNumberLabel}:</label>
            <bbva-web-form-text class="lg-6"></bbva-web-form-text>
          </div>
        </div>
        <div class="modal-footer">
          <bbva-web-button-default @click=${this._acceptClicked}>${this.buttonLabel}</bbva-web-button-default>
        </div>
      </div>
    `;
  }
}
