import refs from './refs.js';
import { postError } from './pnotify';
import markupList from '../templates/country-list-markup.hbs';
import markupCountry from '../templates/country-markup.hbs';

export default function createMarkup(countries) {
  if (countries.length > 10) {
    refs.wrap.innerHTML = '';
    postError('Too many matches found. Please enter a more specific query!');
    return;
  }
  if (countries.length > 1) {
    refs.wrap.innerHTML = '';
    refs.wrap.insertAdjacentHTML('beforeend', markupList(countries));
    return;
  }

  if (countries.length === 1) {
    refs.wrap.innerHTML = '';
    refs.wrap.insertAdjacentHTML('beforeend', markupCountry(countries[0]));
    return;
  }

  if (!countries.length) {
    postError('No matches found, try another country.');
    return;
  }
}
