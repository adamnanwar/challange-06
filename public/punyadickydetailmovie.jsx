import React, { useEffect} from 'react';
import {useParams,useNavigate } from 'react-router-dom';
import {Star} from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../redux/actions/postActions';

function DetailMovie() {
  const { Id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

const { postDetail } = useSelector((state) => state.post)

  useEffect(()=> {
    dispatch(getMovieDetails(Id));
  },[dispatch, Id])

  return(
    <>
    <div className="content">
        <div className="banner">
          <img
            src={`https://image.tmdb.org/t/p/original${postDetail?.backdrop_path}`}
            alt="img-banner"
            className="img-fluid"
          />
        </div>
        <div className="mb-3 movie-content container">
          <div className="movie-info">
            <h1 className="title">{postDetail?.title || postDetail?.name}</h1>
            <div className="genres">
                {postDetail?.genres &&
                  postDetail?.genres.map((genre, i) => (
                    <span key={i} className="genres-item">
                      {genre.name}
                    </span>
                  ))}
            </div>
            <p className="overview">{postDetail?.overview}</p>
            <p className="rating">{(postDetail?.vote_average )?.toFixed(1)} / 10 <Star className='text-warning ms-2 mt-1'/></p>
            <button className="button-back"onClick={()=> navigate('/')}>Back Home</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailMovie


