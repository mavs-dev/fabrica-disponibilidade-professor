import { DadosProfissionais } from 'src/app/interfaces/dados-profissionais';

export interface CurriculoLattes {
    id: number;
    dataAtualizacao: any;
    url: string;
    publicacoes: string;
    dadosProfissionais: DadosProfissionais;
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
}
