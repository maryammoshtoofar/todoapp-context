import styled from "styled-components";
import svg from "@/assets/images/triangle-down.svg";
export const Select = styled.select`
  border: none;
  padding: 10px;
  padding-right: 30px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(${svg});
  background-repeat: no-repeat, repeat;
  background-position: right -1% top 50%, 0 0;
  background-size: 3em auto, 100%;
  width: 10rem;
`;
