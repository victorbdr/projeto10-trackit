import axios from "axios";
import Footer from "./Footer";
import UserContext from "./contexts/UserContext";
import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import styled from "styled-components";
export default function Habits() {
  const [habits, setHabits] = React.useState("");
  const [newHabit, setNewHabit] = useState(false);
  const { token } = useContext(UserContext);
  const [containsHabit, setContainsHabit] = useState([]);
  const [anyHabits, setAnyHabits] = useState(false);
  const [daysSelected, setDaysSelected] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const daysOfHabit = ["D", "S", "T", "Q", "Q", "S", "S"];
  function brandNew() {
    setNewHabit(true);
  }
  function sendHabit(event) {
    event.preventDefault();
    const habitInfo = {
      name: habits,
      days: daysSelected,
    };
    if (daysSelected.length > []) {
      const request = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        habitInfo,
        config
      );
      request.then((response) => {
        setNewHabit(false);
        setHabits("");
        setDaysSelected("");
        setAnyHabits(habitInfo);
      });
    } else {
      alert(" falta algo");
    }
  }
  useEffect(() => {
    const send = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    send.then((r) => {
      setContainsHabit(r.data);
      setNewHabit(false);
    });
  }, [anyHabits]);
  function removeHabit(id) {
    const promise = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
      config
    );
    promise.then((response) => {
      setAnyHabits(true);
    });
  }
  return (
    <>
      <Header />
      <CreateHabit>
        <h1>Meus hábitos</h1>
        <button onClick={brandNew}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </CreateHabit>

      {newHabit === true ? (
        <Form onSubmit={sendHabit}>
          <input
            type="text"
            placeholder="nome do hábito"
            value={habits}
            onChange={(e) => setHabits(e.target.value)}
            required
          ></input>
          <div className="selectDays">
            {daysOfHabit.map((day, id) => {
              return (
                <div
                  className="days"
                  key={id}
                  onClick={() => {
                    setDaysSelected([...daysSelected, id]);
                  }}
                  style={
                    daysSelected.includes(id)
                      ? { backgroundColor: "#CFCFCF", color: "#FFFFFF" }
                      : {}
                  }
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="redirect">
            <button className="cancela" onClick={() => sendHabit(false)}>
              Cancelar
            </button>
            <button className="salva" type="submit">
              Salvar
            </button>
          </div>
        </Form>
      ) : (
        <></>
      )}
      {containsHabit.length === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        containsHabit.map((habit) => {
          const { name } = habit;
          return (
            <PostHabit key={habit.id}>
              <div className="habitSelection">
                <p>{name}</p>
                <div className="delete" onClick={() => removeHabit(habit)}>
                  <ion-icon name="trash-outline"></ion-icon>
                </div>
              </div>
              <div className="daysOfHabit">
                {daysOfHabit.map((day, id) => {
                  return (
                    <button
                      key={id}
                      style={
                        habit.days.includes(id)
                          ? { backgroundColor: "#CFCFCF", color: "#FFFFFF" }
                          : {}
                      }
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </PostHabit>
          );
        })
      )}
      <Footer />
    </>
  );
}
const PostHabit = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  display: flex;
  width: 340px;
  height: 91px;
  background: #fff;
  flex-direction: column;
  .habitSelection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .daysOfHabit {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }
  button {
    margin-bottom: 20px;
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
`;
const CreateHabit = styled.div`
  justify-content: space-around;
  align-items: center;
  display: flex;
  position: relative;
  margin-top: 70px;
  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
  }
  h1 {
    color: #126ba5;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
  }
`;
const Form = styled.form`
  width: 340px;
  height: 180px;
  display: flex;
  margin-left: 17px;
  background: #ffffff;
  border-radius: 5px;
  justify-content: space-evenly;

  input {
    display: flex;
    margin-left: 19px;
    width: 303px;
    height: 45px;
  }
  .redirect {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .salva {
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
  }
  .cancela {
    background: #ffffff;
    width: 84px;
    height: 35px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #52b6ff;
  }

  .days {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
  .selectDays {
    justify-content: space-evenly;
    display: flex;
  }
`;
