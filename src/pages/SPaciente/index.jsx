import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import background1 from "../../assets/background1.svg";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Background1, Container, Content1, ScheduleButton, SuccessMessage } from "./styles";

const formatarData = (dataCompleta) => {
    const data = new Date(dataCompleta);
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0"); // Os meses são indexados de 0 a 11
    const ano = data.getFullYear();
    return `${dia}-${mes}-${ano}`;
};

export const SPaciente = () => {
    const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
    const [agendamentos, setAgendamentos] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    const handleScheduleUpdate = async () => {
        if (!agendamentoSelecionado) {
            console.error('Nenhum agendamento selecionado.');
            return; // Trate o erro de seleção vazia (por exemplo, exiba uma mensagem de alerta)
        }
    
        const { id } = agendamentoSelecionado;
        const pacienteId = localStorage.getItem('userId'); // Obtém o ID autenticado do paciente
    
        try {
            // Atualize o estado da agenda na API
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token não encontrado.');
                return;
            }
    
            const novoEstado = 2; // Defina o novo estado (por exemplo, 2 para "agendado")
            const agendamentoAtualizado = {
                estado: novoEstado,
            };
    
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
    
            await api.put(`/auth/scheduleUpdate/${id}`, agendamentoAtualizado, config);
            console.log('Agendamento atualizado com sucesso!');
    
            setSuccessMessage("Agendamento marcado com Sucesso!");

            // Atualizar agendamentos após a atualização bem-sucedida (opcional)
            // Aqui você pode chamar fetchAgendamentos() novamente se precisar atualizar a lista na interface
    
        } catch (error) {
            console.error('Erro ao atualizar agendamento:', error);
            // Trate o erro de atualização (por exemplo, exiba uma mensagem de erro)
        }
    };

    useEffect(() => {
        // Buscar agendamentos com estado 1 da API
        const fetchAgendamentos = async () => {
            try {
                const response = await api.get('/auth/scheduleState');
                const agendamentosFormatados = response.data.map((agendamento) => ({
                    ...agendamento,
                    dataFormatada: formatarData(agendamento.data),
                }));
                setAgendamentos(agendamentosFormatados);
            } catch (error) {
                console.error('Erro ao buscar agendamentos:', error);
            }
        };

        fetchAgendamentos();
    }, []);

    return (
        <Container>
            <Content1>
                <Background1 background={background1} />
                <Header />
                <ul>
                    {agendamentos.map((agendamento) => (
                        <li
                            key={agendamento.id}
                            onClick={() => setAgendamentoSelecionado(agendamento)}
                            style={{
                                cursor: "pointer",
                                backgroundColor: agendamento === agendamentoSelecionado ? "lightblue" : "transparent",
                            }}
                        >
                            {agendamento.dataFormatada} - {agendamento.hora}
                        </li>
                    ))}
                </ul>
                <ScheduleButton onClick={handleScheduleUpdate}>Agendar</ScheduleButton>
                {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            </Content1>
        </Container>
    );
};
