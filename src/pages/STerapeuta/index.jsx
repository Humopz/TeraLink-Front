import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import background1 from "../../assets/background1.svg";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Background1, Container, Content1, ScheduleButton, SuccessMessage } from "./styles";

export const STerapeuta = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleScheduleClick = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado.');
        return;
      }

      // Verificar se a data selecionada é anterior ao momento atual
      if (startDate < new Date()) {
        setErrorMessage("Não é possível agendar um horário anterior ao momento atual.");
        return;
      }
  
      const selectedDate = formatDate(startDate); // Garante que a data esteja no formato correto
      const selectedTime = formatTime(startDate);
  
      const agendamento = {
        data: selectedDate,
        hora: selectedTime,
      };
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
  
      await api.post('/auth/schedule', agendamento, config);
      console.log('Agendamento criado com sucesso!');
      setSuccessMessage("Horário marcado como disponível!");
      setErrorMessage(""); // Limpa qualquer mensagem de erro anterior

    } catch (error) {
      console.error('Erro ao criar agendamento:', error);
    }
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses são indexados a partir de 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <Container>
      <Content1>
        <Background1 background={background1} />
        <Header />
        <h1>Escolha</h1>
        <label>Data e Hora de Agendamento:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setErrorMessage(""); // Limpa a mensagem de erro ao selecionar nova data
          }}
          showTimeSelect
          dateFormat="yyyy-MM-dd HH:mm"
          timeFormat="HH:mm"
        />
        <ScheduleButton onClick={handleScheduleClick}>Agendar</ScheduleButton>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </Content1>
    </Container>
  );
};
