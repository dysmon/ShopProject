import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  InMemoryScrollingOptions,
  InMemoryScrollingFeature,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
// import { AuthInterceptor } from './AuthInterceptor';
import { provideClientHydration } from '@angular/platform-browser';

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling({
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
  });

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    provideClientHydration(),
    provideHttpClient(),
    // importProvidersFrom(HttpClientModule),
    // [
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: AuthInterceptor,
    //     multi: true,
    //   },
    // ],
  ],
};
