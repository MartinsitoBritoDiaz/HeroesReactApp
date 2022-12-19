import { useLocation, useNavigate } from 'react-router-dom';
import { HeroCard } from '../components'
import { useForm } from '../hooks';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

type form = {
  searchText?: string;  
}

export const SearchPage = () => {
  const {searchText, onInputChange} = useForm({
    searchText: ''
  });

  const navigate = useNavigate();
  const location = useLocation()
  const { q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = ( q?.length === 0 );
  const showError = ( q?.length != 0 ) && heroes.length === 0;

  const onSearchSubmit = (event: any) => {
    event.preventDefault();

    navigate(`?q=${searchText?.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1 className="fw-bold">Search</h1>
      <hr />
      <div className="row mt-3">
        <div className="col-5">
        <h3>Searching</h3>
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />

            <button 
              className="btn btn-outline-primary mt-1"
              onClick={onSearchSubmit}
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h3>Results</h3>

          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Search a heroe
          </div>

          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            There is not hero with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard 
                key={hero.id}
                {...hero}
                
              />
            ))
          }
          {/* <HeroCard 
          
          />  */}
        </div>
      </div>
    </>
  )
}
