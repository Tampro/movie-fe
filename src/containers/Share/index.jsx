import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import youtube from "../../interceptors/youtube";
import axios from "axios";

const Share = () => {
  const auth = useSelector((state: RootState) => state.auth.value);
  const user = useSelector((state: RootState) => state.user.value);
  const [redirect, setRedirect] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const youtubeId = youtubeParser(youtubeUrl);
    const apiKey = "AIzaSyBe9feE2eIG3vCS6bhuo-oSWqUPAVuwCDw";
    const baseApiUrl = "https://content-youtube.googleapis.com/youtube/v3";
    const youtubeApi = `${baseApiUrl}/videos?key=${apiKey}&part=snippet&id=${youtubeId}`;

    const response = await fetch(youtubeApi).then((response) =>
      response.json().then((data) => {
        return data;
      })
    );

    const youtubeData = response["items"][0]["snippet"];
      
    const res = await axios
      .post(
        "movie/share",
        {
          title: youtubeData.title,
          description: youtubeData.description,
          youtubeId: youtubeId,
          userId: user.id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setRedirect(true);
      })
      .catch(function (err) {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              break;
            case 401:
              break;
          }
        }
      });
  };
  function youtubeParser(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  if (redirect === true) {
    return <Navigate to="/" />;
  }
  return (
    <div className="col-md-6 offset-md-3">
      <Form onSubmit={submit}>
        <fieldset className="border p-4">
          <legend className="float-none w-auto p-2">
            Share a Youtube movie
          </legend>

          <FormGroup row>
            <Label for="exampleEmail" sm={3}>
              Youtube URL
            </Label>
            <Col sm={7}>
              <Input
                type="text"
                name="youtubeUrl"
                id="youtubeUrl"
                onChange={(e) => {
                  setYoutubeUrl(e.target.value);
                }}
              />
            </Col>
          </FormGroup>
          <Col sm={{ size: 7, offset: 3 }} className="ps-1">
            <Button color="primary" className="w-100">
              Share
            </Button>
          </Col>
        </fieldset>
      </Form>
    </div>
  );
};

export default Share;
