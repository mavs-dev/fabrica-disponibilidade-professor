import { CurriculoLattes } from './curriculo-lattes';
import { Usuario } from './usuario';

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
    curriculoLattes: CurriculoLattes;
    professor: Usuario;
    dataHoraCadastro: any;
    dataHoraAlteracao: any;
    dataHoraExclusao: any;
}
