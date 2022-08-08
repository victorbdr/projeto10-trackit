import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { buildStyles } from "react-circular-progressbar";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";
export default function Footer() {
  const { circle } = useContext(UserContext);
  return (
    <FooterStyle>
      <Link to="./Habits">
        <p>Hábitos</p>
      </Link>
      <div className="circular">
        <CircularProgressbar
          value={circle}
          text={"Hoje"}
          background="#FFFFFF"
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </div>
      <Link to="./History">
        <p>Histórico</p>
      </Link>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  display: flex;
  background: #ffffff;
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: space-evenly;
  align-items: center;
  left: 0;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }

  .circular {
    background-color: #52b6ff;
    width: 91px;
    height: 91px;
    border-radius: 100%;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
