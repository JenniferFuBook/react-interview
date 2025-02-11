import SearchComponent from '../components/search-component/SearchComponent';
import { fruitList } from './data';

const SearchComponentExample: React.FC = () => (
  <SearchComponent items={fruitList} />
);

export default SearchComponentExample;
