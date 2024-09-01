import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ProfileBio,
  ProfileContainer,
  ProfileDetails,
  ProfileImage,
  ProfileInfo,
  ProfileInfoItem,
  ProfileName,
} from "./styles.ts";

interface ProfileData {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

interface ProfileProps {
  username: string;
}

const Profile: React.FC<ProfileProps> = ({ username }) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`,
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Erro ao buscar perfil do GitHub:", error);
      }
    };

    fetchProfile().then((r) => r);
  }, [username]);

  if (!profileData) {
    return <p>Carregando...</p>;
  }

  return (
    <ProfileContainer>
      <ProfileImage
        src={profileData.avatar_url}
        alt={`${profileData.name} profile picture`}
      />
      <ProfileDetails>
        <ProfileName>{profileData.name}</ProfileName>
        <ProfileBio>{profileData.bio}</ProfileBio>
        <ProfileInfo>
          <ProfileInfoItem>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>@{profileData.login}</span>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <FontAwesomeIcon icon={faBuilding} size="lg" />
            <span>{profileData.company}</span>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <FontAwesomeIcon icon={faUsers} size="lg" />
            <span>{profileData.followers} seguidores</span>
          </ProfileInfoItem>
        </ProfileInfo>
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default Profile;
