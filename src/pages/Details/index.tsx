import { Link, useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import {
  DetailText,
  DetailsContainer,
  DetailsHeader,
  InfoList,
  Title,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface DetailsPost {
  title: string
  body: string
  created_at: Date
  comments: number
  login: string
}

export function Details() {
  const { id } = useParams()
  const userName = import.meta.env.VITE_GIT_USERNAME
  const repo_name = import.meta.env.VITE_GIT_REPONAME
  const [posts, setPosts] = useState<DetailsPost>({
    title: 'Não encontrado',
    body: '',
    created_at: new Date(),
    comments: 0,
    login: '',
  })

  const date = formatDistanceToNow(new Date(posts.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  const getPosts = useCallback(async () => {
    try {
      const response = await api.get(
        `/repos/${userName}/${repo_name}/issues/${id}`,
      )

      const { title, body, created_at, comments, user } = response.data
      const { login } = user
      const issues = { title, body, created_at, comments, login }

      setPosts(issues)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <>
      <Header />
      <DetailsContainer>
        <DetailsHeader>
          <nav>
            <Link to="..">
              <FontAwesomeIcon icon={faChevronLeft} />
              voltar
            </Link>
            <a href="#" target="_blank">
              ver no github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </nav>
          <Title>{posts.title}</Title>
          <InfoList>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {posts.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {date}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {posts.comments} comentários
            </li>
          </InfoList>
        </DetailsHeader>

        <DetailText dangerouslySetInnerHTML={{ __html: posts.body }} />
      </DetailsContainer>
    </>
  )
}
