import { useSearchParams } from 'react-router-dom'
import Tabela from '../components/Tabela';

type Props = {}

const Search = (props: Props) => {
    const [SearchParams] = useSearchParams();
    const queryTitle = SearchParams.get("q");
    const queryStatus = SearchParams.get("s");

  return (
    <Tabela queryTitle={queryTitle} queryStatus={queryStatus}/>
  )
}

export default Search;