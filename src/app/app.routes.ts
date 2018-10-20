import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DadosProfissionaisComponent } from './pages/dados-profissionais/dados-profissionais.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { DisponibilidadesComponent } from './pages/disponibilidades/disponibilidades.component';
import { DisciplinasInteresseComponent } from './pages/disciplinas-interesse/disciplinas-interesse.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'formulario',
        component: FormularioComponent,
        children: [
            { path: '', redirectTo: 'dados-profissionais', pathMatch: 'full' },
            { path: 'dados-profissionais', component: DadosProfissionaisComponent },
            { path: 'disponibilidades', component: DisponibilidadesComponent },
            { path: 'disciplinas-interesse', component: DisciplinasInteresseComponent }
        ]
    }
];
