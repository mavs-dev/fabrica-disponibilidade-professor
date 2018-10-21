import { DadosProfissionais } from './dados-profissionais';

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    perfil: string;
    dadosProfissionais: DadosProfissionais;
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
}
