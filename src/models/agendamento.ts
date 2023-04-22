import prestador from "./prestador";
import servico from "./servico";
import user from "./user";

export default interface agendamento {
    id: number;
    data: string;
    prestador: prestador;
    user?: user;
    servico?: servico;
}