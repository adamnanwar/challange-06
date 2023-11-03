// import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { toast } from "react-toastify";
import Headers from "../components/Headers";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import "../style/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/action/postActions";

function Home() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);


  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Headers />
      <Container className="d-flex" style={{ maxWidth: "12" }}>
        <div className="">
          {/* {isLoggedIn ? ( */}

          <Row className="mx-4 py-3">
            <Col xs={12} md={8}>
              <div className="">
                <h1 style={{ color: "red" }}>Popular Movies</h1>
              </div>
            </Col>

            <Col className="d-flex justify-content-end px-3" xs={6} md={4}>
              <div className="d-flex align-items-center">
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

          {posts.length > 0 ? (
            <div className="d-flex flex-wrap justify-content-center img-fluid">
              {posts &&
                posts.map((post) => (
                  <MovieCard
                    key={post?.id}
                    title={post.title}
                    poster={post.poster_path}
                    to={`/users/detail/${post.id}`}
                  />
                ))}
            </div>
          ) : (
            <>
              <div className="text-center mt-3">
                <h1 className="no-data mt-5 mb-5 text-danger">NO DATA</h1>
              </div>
            </>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
