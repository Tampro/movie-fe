import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import ThumbUpIcon from "mdi-react/ThumbUpIcon";
import ThumbDownIcon from "mdi-react/ThumbDownIcon";
import { Button } from "reactstrap";
import axios from "axios";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
const Home = () => {
  const [reload, setReload] = useState(false);
  const user = useSelector((state: RootState) => state.user.value);
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("movie");
      setMovies(data);
    })();
  }, [reload]);

  const opts = {
    height: "250",
    width: "350",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    origin: "http://localhost:3001",
  };

  const likeMovie = async (movieId, like) => {
    const { data } = await axios.post("like-movie",{
        "like":like,
        "movieId":movieId,
        "userId": user?.id
    }, { withCredentials: true });
    setReload(!reload);
  };
  return (
    <div className="col-md-8 offset-md-2">
      {movies.map((movie) => {
        const like = movie.likeMovies.filter(function (item) {
          return item.like == true;
        }).length;

        const myLike = movie.likeMovies.filter(function (item) {
          return item.userId === user?.id;
        });

        return (
          <div className="row g-0 flex-md-row mb-4 h-md-250 position-relative">
            <div className="col-auto d-lg-block">
              <YouTube
                videoId={movie.youtubeId}
                opts={opts}
                onReady={onPlayerReady}
              />
            </div>
            <div className="col d-flex flex-column position-static ms-5">
              <h3 className="mb-2 text-danger">{movie.title}</h3>
              <div className="mb-1 text-muted">
                Share by: {movie.user.email}
                {myLike.length > 0 ? (
                  <>
                    {myLike[0].like == true ? (
                      <Button className="ms-2 me-2">
                        <ThumbUpIcon />
                      </Button>
                    ) : (
                      <Button>
                        <ThumbDownIcon />
                      </Button>
                    )}
                  </>
                ) : (
                  <>
                    <Button
                      color="primary"
                      className="ms-2 me-2 "
                      onClick={(e)=>likeMovie(movie.id, true)}
                    >
                      <ThumbUpIcon />
                    </Button>
                    <Button
                      color="primary"
                      onClick={(e)=>likeMovie(movie.id, false)}
                    >
                      <ThumbDownIcon />
                    </Button>
                  </>
                )}
              </div>
              <div className="mb-1 text-muted">
                {like} <ThumbUpIcon /> {movie.likeMovies.length - like}{" "}
                <ThumbDownIcon />
              </div>
              <div className="mb-1">Description:</div>
              <p>{movie.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
