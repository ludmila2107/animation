import { createElementFromHTML } from '../utils';

export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  init() {
    const collapseEl = createElementFromHTML(
      `<div class="collapse">
        <button class="collapse-btn">Collapse</button>
        <div class="collapse-text__wrap">
          <div class="collapse-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
        </div>
      </div>`
    );

    this.container.appendChild(collapseEl);

    this.collapseBtnEl = collapseEl.querySelector('.collapse-btn');
    this.collapseTextWrapEl = collapseEl.querySelector('.collapse-text__wrap');
    this.collapseTextEl = collapseEl.querySelector('.collapse-text');

    this.registerEvents();
  }

  registerEvents() {
    this.collapseBtnEl.addEventListener('click', this.onClick);
  }

  onClick = (e) => {
    e.preventDefault();

    if (this.collapseTextWrapEl.offsetHeight) {
      return this.collapseTextWrapEl.removeAttribute('style');
    }

    this.collapseTextWrapEl.style.height = `${this.collapseTextEl.offsetHeight}px`;
  };
}
