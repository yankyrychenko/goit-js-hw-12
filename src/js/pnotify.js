import { error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.delay = 2000;

export function postError(message) {
  error({
    text: message,
  });
}
