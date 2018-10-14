import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DadosProfissionaisComponent } from './pages/dados-profissionais/dados-profissionais.component';
import { HeaderComponent } from './component/header/header.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dados-profissionais', component: DadosProfissionaisComponent },
    { path: 'home', component: HeaderComponent },
];
