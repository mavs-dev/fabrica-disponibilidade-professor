import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DadosProfissionaisComponent } from './pages/dados-profissionais/dados-profissionais.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DisponibilidadesComponent } from './pages/disponibilidades/disponibilidades.component';
import { DisciplinasInteresseComponent } from './pages/disciplinas-interesse/disciplinas-interesse.component';
import { PainelSelecaoProfessorComponent } from './pages/painel-selecao-professor/painel-selecao-professor.component';
import { AlocacaoComponent } from './pages/alocacao/alocacao.component';
import { PainelCoordenadorComponent } from './pages/painel-coordenador/painel-coordenador.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'formulario',
        component: FormularioComponent,
        children: [
            { path: '', redirectTo: 'dados-profissionais', pathMatch: 'full' },
            { path: 'dados-profissionais', component: DadosProfissionaisComponent, data: {animation: 'dadosProfissionaisPage'} },
            { path: 'disponibilidades', component: DisponibilidadesComponent, data: {animation: 'disponibilidadesPage'} },
            { path: 'disciplinas-interesse', component: DisciplinasInteresseComponent, data: {animation: 'disciplinasInteressePage'} }
        ]
    },
    {
        path: 'alocacao',
        component: AlocacaoComponent,
        children: [
            { path: '', redirectTo: 'selecao-professor', pathMatch: 'full' },
            { path: 'selecao-professor', component: PainelSelecaoProfessorComponent },
            { path: 'painel-coordenador', component: PainelCoordenadorComponent }
        ]
    }
];
