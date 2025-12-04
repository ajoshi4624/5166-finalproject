import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app';
import { routes } from './app/app.routes';


const config = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};


const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
