import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #242424;
  color: rgba(255, 255, 255, 0.87);
  min-height: 100vh;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 10px 0;
`;

export const Link = styled.a`
  font-weight: 500;
  text-decoration: none;
  color: #646cff;

  &:hover {
    color: #535bf2;
  }
`;
