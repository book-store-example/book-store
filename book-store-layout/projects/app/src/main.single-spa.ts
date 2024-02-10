import {enableProdMode, NgZone} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {singleSpaAngular} from 'single-spa-angular';
import {environment} from './environments/environment';
import {ConfigurationService} from "@fusionize/fusionize-angular";
import {AppModule} from "./app/app.module";
if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    ConfigurationService.config(singleSpaProps as any);
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: '<app-5aedf71a73074aed949c0a8e010e3397-root />',
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

