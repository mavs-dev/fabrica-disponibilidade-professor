import { Usuario } from './usuario';
import { Disciplina } from './disciplina';
import { Semestre } from './semestre';

export interface Interesse {
    id: number;
    prioridade: number;
    professor: Usuario;
    disciplina: Disciplina;
    unidadesAcademicas: Array<string>;
    semestre: Semestre;
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
}
