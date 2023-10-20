// import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-toastify";
import Headers from "../components/Headers";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import "../style/Home.css";

function Home() {
  const [popularMovieList, setPopularMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    async function getMovieList() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/v1/movie/popular`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPopularMovieList(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    }
    getMovieList();
  }, [page]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Headers />
      <Container className="d-flex" style={{ maxWidth: "12" }}>
        <div className="">
          {isLoggedIn ? (
            <>
              <Row className="mx-4 py-3">
                <Col xs={12} md={8}>
                  <div className="">
                    <h1 style={{ color: "red" }}>Populer Movie</h1>
                  </div>
                </Col>

                <Col className="d-flex justify-content-end px-3" xs={6} md={4}>
                  <div className="d-flex align-items-center ">
                    <button
                      type="button"
                      onClick={loadMoreMovies}
                      style={{
                        border: "none",
                        background: "black",
                        color: "red",
                      }}
                    >
                      Load More <AiOutlineArrowRight />
                    </button>
                  </div>
                </Col>
              </Row>

              <div className="d-flex flex-wrap justify-content-center">
                {popularMovieList.map((movie, i) => (
                  <MovieCard
                    key={i}
                    title={movie.title}
                    poster={movie.poster_path}
                    to={`/users/detail/${movie.id}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="no-data mt-5 mb-5 text-danger">NO DATA</h1>
            </>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
