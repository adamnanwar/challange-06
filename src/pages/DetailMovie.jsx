import { useParams} from "react-router-dom";
// import axios from "axios";
import { Button, Carousel } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import "../style/Detail.css";
// import { toast } from "react-toastify";
import NavigationBar from "../components/NavigationBar";
import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getPostDetails } from '../redux/action/postActions';

function postDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { postDetail } = useSelector((state) => state.post);
  

  useEffect(()=> {
    dispatch(getPostDetails(id));
  },[dispatch, id])

  return (
    <>
      <NavigationBar />
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            className="Carousel-img d-block w-100 img-fluid"
            src={`https://image.tmdb.org/t/p/original${postDetail?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption className="Movie-caption justify-content-center">
            <h2 className="Movie-caption-title">{postDetail?.title}</h2>
            <p className="Movie-genres">
              {postDetail?.genres &&
                postDetail?.genres?.length > 0 &&
                postDetail?.genres?.map((genre, i) => {
                  return i === postDetail?.genres.length - 1
                    ? genre.name
                    : `${genre.name}, `;
                })}
            </p>
            <p className="Movie-caption-text">{postDetail?.overview}</p>
            <p className="Movie-rate">
              <StarFill className="Icon-star" />
              {postDetail?.vote_average
                ? postDetail?.vote_average.toFixed(1)
                : "-"}
            </p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default postDetail;
