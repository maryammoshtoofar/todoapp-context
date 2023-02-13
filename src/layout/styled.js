import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  margin-top: 1rem;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
