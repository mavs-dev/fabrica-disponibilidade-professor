import { DadosProfissionais } from './dados-profissionais';
import { Disponibilidade } from './disponibilidade';

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    perfil: string;
    dadosProfissionais: DadosProfissionais;
    disponibilidades: Disponibilidade[];
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
}
