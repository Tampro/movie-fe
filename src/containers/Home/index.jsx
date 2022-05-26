import React from "react";
import YouTube from "react-youtube";
import ThumbUpIcon from "mdi-react/ThumbUpIcon";
import ThumbDownIcon from "mdi-react/ThumbDownIcon";
import { Button } from "reactstrap";
const Home = () => {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: "250",
    width: "350",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="col-md-8 offset-md-2">
      <div className="row g-0 flex-md-row mb-4 h-md-250 position-relative">
        <div className="col-auto d-lg-block">
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className="col d-flex flex-column position-static ms-5">

          <h3 className="mb-2 text-danger">Featured post</h3>
          <div className="mb-1 text-muted">Share by: tam@tam.com <Button><ThumbUpIcon/></Button> <Button><ThumbDownIcon/></Button></div>
          <div className="mb-1 text-muted">99 <ThumbUpIcon/> 10 <ThumbDownIcon/></div>
          <div className="mb-1">Description:</div>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
        </div>
      </div>
      <div className="row g-0 flex-md-row mb-4 h-md-250 position-relative">
        <div className="col-auto d-lg-block">
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className="col d-flex flex-column position-static ms-5">

          <h3 className="mb-2 text-danger">Featured post</h3>
          <div className="mb-1 text-muted">Share by: tam@tam.com <Button><ThumbUpIcon/></Button> <Button><ThumbDownIcon/></Button></div>
          <div className="mb-1 text-muted">99 <ThumbUpIcon/> 10 <ThumbDownIcon/></div>
          <div className="mb-1">Description:</div>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
        </div>
      </div>
      <div className="row g-0 flex-md-row mb-4 h-md-250 position-relative">
        <div className="col-auto d-lg-block">
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className="col d-flex flex-column position-static ms-5">

          <h3 className="mb-2 text-danger">Featured post</h3>
          <div className="mb-1 text-muted">Share by: tam@tam.com <Button><ThumbUpIcon/></Button> <Button><ThumbDownIcon/></Button></div>
          <div className="mb-1 text-muted">99 <ThumbUpIcon/> 10 <ThumbDownIcon/></div>
          <div className="mb-1">Description:</div>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
        </div>
      </div>
      <div className="row g-0 flex-md-row mb-4 h-md-250 position-relative">
        <div className="col-auto d-lg-block">
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className="col d-flex flex-column position-static ms-5">

          <h3 className="mb-2 text-danger">Featured post</h3>
          <div className="mb-1 text-muted">Share by: tam@tam.com <Button><ThumbUpIcon/></Button> <Button><ThumbDownIcon/></Button></div>
          <div className="mb-1 text-muted">99 <ThumbUpIcon/> 10 <ThumbDownIcon/></div>
          <div className="mb-1">Description:</div>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
        </div>
      </div>
      <div className="row g-0 flex-md-row mb-4 h-md-250 position-relative">
        <div className="col-auto d-lg-block">
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className="col d-flex flex-column position-static ms-5">

          <h3 className="mb-2 text-danger">Featured post</h3>
          <div className="mb-1 text-muted">Share by: tam@tam.com <Button><ThumbUpIcon/></Button> <Button><ThumbDownIcon/></Button></div>
          <div className="mb-1 text-muted">99 <ThumbUpIcon/> 10 <ThumbDownIcon/></div>
          <div className="mb-1">Description:</div>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default Home;
