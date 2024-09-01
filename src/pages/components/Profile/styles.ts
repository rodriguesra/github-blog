import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row; /* Alinha itens na horizontal */
  align-items: center;
  padding: 20px;
  //border-radius: 10px;
  width: 100%;
  height: 212px;
  max-width: 864px;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-profile"]};
  margin-top: -80px;
`;

export const ProfileImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin-right: 20px; /* Espaço entre a imagem e o conteúdo */
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
  line-height: 31px;
  color: ${(props) => props.theme["base-title"]};
`;

export const ProfileBio = styled.p`
  text-align: left;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${(props) => props.theme["base-text"]};
`;

export const ProfileInfo = styled.div`
  display: flex;
  //flex-direction: column;
  gap: 2rem;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > span {
    font-size: 14px;
  }
`;
