import { DadosProfissionais } from './dados-profissionais';
import { Disponibilidade } from './disponibilidade';
import { Interesse } from './interesse';

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    perfil: string;
    dadosProfissionais: DadosProfissionais;
    disponibilidades: Disponibilidade[];
    disciplinasDeInteresse?: Interesse[];
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
}
