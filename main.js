/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/utils.js
function createElementFromHTML(html) {
  const div = document.createElement("div");
  div.innerHTML = html.trim();
  return div.firstChild;
}
;// CONCATENATED MODULE: ./src/js/components/Collapse.js

class Collapse {
  constructor(container) {
    this.container = container;
  }
  init() {
    const collapseEl = createElementFromHTML(`<div class="collapse">
        <button class="collapse-btn">Collapse</button>
        <div class="collapse-text__wrap">
          <div class="collapse-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
        </div>
      </div>`);
    this.container.appendChild(collapseEl);
    this.collapseBtnEl = collapseEl.querySelector('.collapse-btn');
    this.collapseTextWrapEl = collapseEl.querySelector('.collapse-text__wrap');
    this.collapseTextEl = collapseEl.querySelector('.collapse-text');
    this.registerEvents();
  }
  registerEvents() {
    this.collapseBtnEl.addEventListener('click', this.onClick);
  }
  onClick = e => {
    e.preventDefault();
    if (this.collapseTextWrapEl.offsetHeight) {
      return this.collapseTextWrapEl.removeAttribute('style');
    }
    this.collapseTextWrapEl.style.height = `${this.collapseTextEl.offsetHeight}px`;
  };
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector(".container");
const collapse = new Collapse(container);
collapse.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;