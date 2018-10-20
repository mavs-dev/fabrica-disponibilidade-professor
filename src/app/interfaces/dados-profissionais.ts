import { CurriculoLattes } from './curriculo-lattes';

export interface DadosProfissionais {
    id: number;
    graduacao: string;
    dataConclusao: any;
    maiorTitulacaoObtida: string;
    titulacaoEmAndamento: boolean;
    descricaoTitulacaoEmAndamento: string;
    principalAtuacaoProfissional: string;
    tempoExpProfissional: number;
    tempoExpMagisterioSuperior: number;
    tempoExpDocenciaEdBasica: number;
    curriculoLattes: any;
    professor: any;
}
