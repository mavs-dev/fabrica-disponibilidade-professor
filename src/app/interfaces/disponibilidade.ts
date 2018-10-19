import { Semestre } from './semestre';

export interface Disponibilidade {
    id: number;
    unidadesAcademicas: any;
    turno: string;
    diaDaSemana: string;
    semestre: Semestre;
}
