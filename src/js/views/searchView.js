class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    const searchBtn = this.#parentElement.querySelector('.search__btn');

    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });

    // window.addEventListener('submit', function (e) {
    //   e.preventDefault();
    //   handler();
    // });
  }
}

export default new SearchView();
