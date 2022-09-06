/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
  --_close-color: var(--bbva-web-template-modal-close-color, var(--colorsPrimaryMedium, ${unsafeCSS(foundations.colors.primaryMedium)}));
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.modal {
  background-color: red;
}

.modal-header {
  background-color: rebeccapurple;
  display: flex;
  justify-content: space-between;
  padding: 10;
}
.modal-header .title {
  font-size: 1em;
  font-weight: bold;
  color: var(--colorsPrimaryMedium, #1973b8);
}

.modal-content {
  background-color: aqua;
  margin: 10;
}

.modal-footer {
  padding: 10;
  text-align: center;
}

.form-group {
  padding: var(--verticalPadding, 15px) 30px;
  margin-left: 10%;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.lg-6 {
  width: 50%;
}

.button {
  margin: auto auto;
}

@media screen and (max-width: 400px) {
  .form-group {
    padding: var(--verticalPadding, 15px) 30px;
    margin-left: 0%;
    width: 100%;
    display: grid;
    flex-direction: column;
    justify-content: normal;
  }

  .lg-6 {
    padding-top: 5px;
    width: 100%;
  }
}
.close {
  position: absolute;
  top: calc(((1.75 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 16) * 1rem);
  right: calc(((2 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 16) * 1rem);
  z-index: 1;
}
.close-btn {
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  color: var(--_close-color);
}
.close-btn::before {
  content: "";
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.close-icon {
  width: 1.25rem;
  height: 1.25rem;
}
`;