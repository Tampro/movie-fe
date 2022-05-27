import React from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
const Share = () => {
  return (
    <div className="col-md-6 offset-md-3">
      <Form>
        <fieldset className="border p-4">
          <legend className="float-none w-auto p-2">Share a Youtube movie</legend>

          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Youtube URL
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="youtubeUrl"
                id="youtubeUrl"
              />
            </Col>
          </FormGroup>
          <Col sm={{ size: 10, offset: 2 }} className="ps-1">
            <Button className="w-100">Share</Button>
          </Col>
        </fieldset>
      </Form>
    </div>
  );
};

export default Share;
