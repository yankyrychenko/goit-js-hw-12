import debounce from 'lodash.debounce';
import { postError } from './js/pnotify';
import { fetchCountries } from './js/fetch-countries';
import markupCountry from './templates/country-markup.hbs';
import markupCountryList from './templates/country-list-markup.hbs';

const inputRef = document.querySelector('.search-input');
const wrapRef = document.querySelector('.country-wrap');

inputRef.addEventListener('input', debounce(createMarkup, 500));

function createMarkup() {
  fetchCountries(inputRef.value).then(countries => onCountrySearch(countries));
}

function onCountrySearch(countries) {
  if (!countries.length) {
    postError('No matches found, try another country.');
    return;
  }

  if (countries.length > 10) {
    wrapRef.innerHTML = '';
    postError('Too many matches found. Please enter a more specific query!');
    return;
  }

  if (countries.length > 1) {
    wrapRef.innerHTML = '';
    wrapRef.insertAdjacentHTML('beforeend', markupCountryList(countries));
    return;
  }

  if (countries.length === 1) {
    wrapRef.innerHTML = '';
    wrapRef.insertAdjacentHTML('beforeend', markupCountry(countries[0]));
    return;
  }
}
