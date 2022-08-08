import UserContext from "./contexts/UserContext";
import styled from "styled-components";
import { useContext } from "react";
export default function Header() {
  const { image } = useContext(UserContext);
  return (
    <HeaderStyle>
      <h1>TrackIt</h1>
      <img src={image} />
    </HeaderStyle>
  );
}
const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 70px;
  width: 100%;
  top: 0;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    margin-left: 18px;
    font-family: "Playball", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #fff;
  }
  .img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;
