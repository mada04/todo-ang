import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

bootstrapApplication(AppComponent,
  {
    providers:[
      provideProtractorTestingSupport(),
      provideRouter(routeConfig), provideAnimationsAsync(), provideAnimationsAsync(),
     provideNativeDateAdapter()
    ]
  }
).catch(err=>console.error(err));