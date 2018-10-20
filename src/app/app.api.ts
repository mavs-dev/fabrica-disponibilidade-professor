import { environment } from 'src/environments/environment.prod';

const SERVER_DEV = 'http://localhost:8080';
const SERVER_PROD = 'http://localhost:8080';

const API_HOST = environment.production ? SERVER_PROD : SERVER_DEV;
export const API_SERVICE_CURRICULO_LATTES = `${API_HOST}/curriculo-lattes`;
export const API_SERVICE_DADOS_PROFISSIONAIS = `${API_HOST}/dados-profissionais`;
export const API_SERVICE_DISCIPLINA = `${API_HOST}/disciplina`;
export const API_SERVICE_DISPONIBILIDADE = `${API_HOST}/disponibilidade`;
export const API_SERVICE_INTERESSE = `${API_HOST}/interesse`;
export const API_SERVICE_SEMESTRE = `${API_HOST}/semestre`;
export const API_SERVICE_UNIDADE_ACADEMICA = `${API_HOST}/unidade-academica`;
export const API_SERVICE_USUARIO = `${API_HOST}/usuario`;
export const API_SERVICE_LOGIN = `${API_HOST}/login`;
