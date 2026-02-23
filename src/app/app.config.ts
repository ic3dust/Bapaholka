import { ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    { provide: TRANSLATE_HTTP_LOADER_CONFIG, useValue: { prefix: '/i18n/', suffix: '.json' }},
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateHttpLoader
      }
    })
  ]
};
