import { useCallback, useEffect, useState } from "react";
import { ContentsBox } from "../../components/ContentsBox";
import { Header } from "../../components/Header";
import { InfosContainer } from "../../components/InfosContainer";
import { GridContents, HomeContainer, MainContainer, SearchContainer } from "./styles";
import { api } from "../../lib/axios";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export interface PostValue{
  issue_number: number;
  title: string;
  body: string;
  created_at: string;
}

export function HomeSearch() {
  const username = import.meta.env.VITE_GIT_USERNAME;
  const repo_name = import.meta.env.VITE_GIT_REPONAME;
  const [posts, setPosts] = useState<PostValue[]>([]);
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })


  const getPosts = useCallback(async (data: string = "") => {
    try {

      const response = await api.get(`/search/issues?q=${data}%20repo:${username}/${repo_name}/`);

      const issues: PostValue[] = response.data.items.map((issue: any) => ({
        issue_number: issue.number,
        title: issue.title,
        body: issue.body,
        created_at: issue.created_at
      }));
      
      setPosts(issues);
    } catch(err) {
      console.log(err);
    }
  }, [posts]);

  useEffect(() => {
    getPosts();
  }, []);

  function handleSearch(data: SearchFormInputs){
    getPosts(data.search)
  }

  return(
    <HomeContainer>
      <Header/>
      <MainContainer>
        <InfosContainer />

        <SearchContainer>
          <div className="searchHeader">
            <p>Publicações</p>
            <span>{posts.length} publicações</span>
          </div>
          <form onSubmit={handleSubmit(handleSearch)}>
            <input type="text" placeholder="Buscar conteúdo" {...register('search')} />
          </form>
        </SearchContainer>

        <GridContents>
          {posts && posts.map((post) => {
            return  <ContentsBox
              key={post.issue_number}
              body={post.body}
              title={post.title}
              created_at={post.created_at}
              issue_number={post.issue_number}
            />
          }) }
        </GridContents>
      </MainContainer>
    </HomeContainer>
  )
}