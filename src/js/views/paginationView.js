import icons from 'url:../../img/icons.svg'; // Parcel 2
import { View } from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = '';

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }

  _curPage() {
    return this._data.page;
  }

  _generateMarkupBtnPrev() {
    return `
          <button data-goto=${
            this._curPage() - 1
          } class="btn--inline pagination__btn--prev">
           <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
           </svg>
           <span>Page ${this._curPage() - 1}</span>
          </button>
          `;
  }

  _generateMarkupBtnNext() {
    return `
         <button data-goto=${
           this._curPage() + 1
         } class="btn--inline pagination__btn--next">
          <span>Page ${this._curPage() + 1}</span>
          <svg class="search__icon">
           <use href="${icons}#icon-arrow-right"></use>
          </svg>
         </button>
          `;
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1 and there are other pages
    if (this._curPage() === 1 && numPages > 1) {
      return this._generateMarkupBtnNext();
    }

    // // Other page
    if (this._curPage() < numPages) {
      return [
        this._generateMarkupBtnPrev(),
        this._generateMarkupBtnNext(),
      ].join('');
    }

    // Last page
    if (this._curPage() === numPages && numPages > 1) {
      return this._generateMarkupBtnPrev();
    }

    // Page 1 and there are NO other pages
    return '';
  }
}

export default new PaginationView();
