import { Container } from "react-bootstrap";
import "../style/Card.css";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Headers from "../components/Headers";
import Protected from "../components/auth/Protected";
import { getSearchedMovies } from "../redux/action/postActions";
// import { getAllPosts } from "../redux/action/postActions";
// import { getAllPosts } from "../redux/reducers/postReducers";

function Search() {
  // const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.post);
  // console.log (search)

  useEffect(() => {
    dispatch(getSearchedMovies(query));
  }, [dispatch, query]);

  return (
    <>
      <Headers />
      <Protected>
        <Container>
          <h2 className="search-danger p-4">Result Found: {query}</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {search && search.length === 0 && <p>No Moives.</p>}
            {search &&
              search.length > 0 &&
              search.map((movie, i) => (
                <MovieCard
                  key={i}
                  title={movie.title}
                  poster={movie.poster_path}
                  to={`/users/detail/${movie.id}`}
                />
              ))}
          </div>
        </Container>
      </Protected>
    </>
  );
}

export default Search;
