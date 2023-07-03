import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faUserGroup, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Infos, CardInfos, GitName, Description, InfoList } from "./styles";
import { api } from "../../lib/axios";
import { useCallback, useEffect, useState } from "react";
import perfil from '../../assets/perfil.jpg'

interface UserInfos{
  avatar_url: string
  name: string
  login: string
  company: string
  bio: string
  followers: number
}

export function InfosContainer() {
  const username = import.meta.env.VITE_GIT_USERNAME;
  const [userInfo, setUserInfo] = useState<UserInfos>({
    avatar_url: perfil,
    name: 'Nome',
    login: '',
    company: '',
    bio: 'Description',
    followers: 0,
  });

  const getUser = useCallback(async() => {
    try {
      const response = await api.get(`/users/${username}`);
  
      setUserInfo(response.data);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
    }, [userInfo])
  
    useEffect(() => {
      getUser();
    }, []);

  return (
    <CardInfos>
      <img src={userInfo?.avatar_url} alt="" />
      <Infos>
        <GitName>
          <h2>{userInfo?.name}</h2>
          <a href={'https://github.com/'+ userInfo?.login} target="_blank">github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </GitName>
        <Description>
          {userInfo?.bio}
        </Description>
        <InfoList>
          <li><FontAwesomeIcon icon={faGithub} />{userInfo?.login}</li>
          {userInfo?.company && <li><FontAwesomeIcon icon={faBuilding} />{userInfo?.company}</li>}
          <li><FontAwesomeIcon icon={faUserGroup} />{userInfo?.followers} seguidores</li>
        </InfoList>
      </Infos>
    </CardInfos>
  )
}
