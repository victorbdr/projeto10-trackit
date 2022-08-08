import { Alert } from "bootstrap";
import axios from "axios";
import React, { useState } from "react";
import HabitHanle from "./HabitHandle";
export default function Habits() {
  const [anyHabits, setAnyHabits] = useState(false);
  const [daysSelected, setDaysSelected] = useState([]);
  const [habits, setHabits] = React.useState("");
  const daysOfHabit = ["D", "S", "T", "Q", "Q", "S", "S"];
  function sendHabit(event) {
    event.preventDefault();
    const habitInfo = {
      name: habits,
      days: daysSelected,
    };
    if (daysSelected.length > []) {
      const request = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        habitInfo
      );
      request.then((r) => {
        setHabits("");
        setDaysSelected("");
        setAnyHabits(habitInfo);
      });
    } else {
      Alert(" falta algo");
    }
  }

  return (
    <>
      <h1>Meus hábitos</h1>
      <button>
        <ion-icon name="add-outline"></ion-icon>
      </button>
      <form>
        <input type="text" placeholder={"nome do hábito"} name="hábito"></input>
        <div className="daysHabit">
          {daysOfHabit.map((day, id) => {
            return <button key={id}>{day}</button>;
          })}
        </div>
        <button onClick={sendHabit}>Salvar</button>
        <button>Cancelar</button>
      </form>

      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
    </>
  );
}
