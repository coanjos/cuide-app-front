export default interface user {
    id: number;
    nome: string;
    categoria: 'CLIENTE' | 'PRESTADOR';
    email: string;
}