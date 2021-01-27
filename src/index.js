import './style.scss';
import refs from './js/refs';
import fetchCountries from './js/fetch-countries';
import createMarkup from './js/markup';
import debounce from 'lodash.debounce';

refs.input.addEventListener('input', debounce(findCountry, 500));

function findCountry() {
  if (refs.input.value === '') {
    refs.wrap.innerHTML = '';
    return;
  }
  fetchCountries(this.inputText).then(countries => createMarkup(countries));
}
