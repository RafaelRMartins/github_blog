import { Container, TextArea } from "./styled";
import { PostValue } from '../../pages/HomeSearch/index'
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function ContentsBox({ title, created_at, body, issue_number }:PostValue){
  const date = formatDistanceToNow(new Date(created_at), {addSuffix: true, locale: ptBR,})
  const formattedDate = date.replace('cerca de', '')
  .replace('mais de', '')
  .replace('quase', '')
  .trim();
  return(
    <Container to={'/details/' + issue_number}>
      
      <div className="ContentsHeader">
        <p>{title}</p>
        <span>{formattedDate}</span>
      </div>

      <TextArea>
        {body}
      </TextArea>
    </Container>
  )
}