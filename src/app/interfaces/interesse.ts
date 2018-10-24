import { Usuario } from './usuario';
import { Disciplina } from './disciplina';
import { Semestre } from './semestre';
import { UnidadeAcademica } from './unidade-academica';

export interface Interesse {
    id: number;
    prioridade: number;
    professor: Usuario;
    disciplina: Disciplina;
    unidadesAcademicas: UnidadeAcademica[];
    semestre: Semestre;
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
}
