import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './component/card/card.component';
import { CardLoginComponent } from './component/card-login/card-login.component';
import { ImageResponsiveComponent } from './component/image-responsive/image-responsive.component';
import { ImageProjecaoResponsiveComponent } from './component/image-projecao-responsive/image-projecao-responsive.component';
import { AlertComponent } from './component/alert/alert.component';
import { DadosProfissionaisComponent } from './pages/dados-profissionais/dados-profissionais.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { InputTextComponent } from './component/inputs/input-text/input-text.component';
import { InputEmailComponent } from './component/inputs/input-email/input-email.component';
import { InputDateComponent } from './component/inputs/input-date/input-date.component';
import { InputPasswordComponent } from './component/inputs/input-password/input-password.component';
import { InputNumberComponent } from './component/inputs/input-number/input-number.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DisciplinasInteresseComponent } from './pages/disciplinas-interesse/disciplinas-interesse.component';
import { ModalComponent } from './component/modal/modal.component';
import { DisponibilidadesComponent } from './pages/disponibilidades/disponibilidades.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

// BIBLIOTECAS EXTERNAS
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    CardLoginComponent,
    ImageResponsiveComponent,
    ImageProjecaoResponsiveComponent,
    AlertComponent,
    DadosProfissionaisComponent,
    InputTextComponent,
    InputEmailComponent,
    InputDateComponent,
    InputPasswordComponent,
    InputNumberComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DisciplinasInteresseComponent,
    ModalComponent,
    DisponibilidadesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
