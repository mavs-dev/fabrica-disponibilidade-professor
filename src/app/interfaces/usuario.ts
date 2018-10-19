import { DadosProfissionais } from './dados-profissionais';

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
    perfil: string;
    dadosProfissionais: DadosProfissionais;
}
