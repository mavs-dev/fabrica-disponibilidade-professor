import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './component/card/card.component';
import { CardLoginComponent } from './component/card-login/card-login.component';
import { ImageResponsiveComponent } from './component/image-responsive/image-responsive.component';
import { ImageProjecaoResponsiveComponent } from './component/image-projecao-responsive/image-projecao-responsive.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    CardLoginComponent,
    ImageResponsiveComponent,
    ImageProjecaoResponsiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
