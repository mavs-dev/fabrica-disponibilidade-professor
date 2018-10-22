import { Semestre } from './semestre';

export interface Disponibilidade {
    id: number;
    unidadesAcademicas: any;
    turno: string;
    diaDaSemana: string;
    semestre: Semestre;
    professor: any;
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
}
