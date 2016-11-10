import './polyfills';
// import './vendor';

import { platformBrowser }    from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from '../aot/Client/modules/app.module.ngfactory';


if (process.env.ENV === 'Development') {
  // Development
} else {
  // Production
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);


