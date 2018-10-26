import { Semestre } from './semestre';
import { Usuario } from './usuario';

export interface Disponibilidade {
    id: number;
    unidadesAcademicas: any;
    turno: string;
    professor?: Usuario;
    diaDaSemana: string;
    semestre: Semestre;
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
}
