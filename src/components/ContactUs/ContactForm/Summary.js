import React, { Component } from "react";

import glamorous from "glamorous";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

class GeneralInfo extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Item>
            <Input placeholder={"How did you hear about us?"} />
          </Form.Item>
          <Form.Item>
            <TextArea
              style={{ width: "100%" }}
              placeholder={
                "Leave us a brief message. We will contact you as soon as possible"
              }
            />
          </Form.Item>
          <Form.Item>
            <Button
              type={"primary"}
              htmlType={"submit"}
              style={{ backgroundColor: "#23BAA1" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Container>
    );
  }
}

export default GeneralInfo;

const Container = glamorous.div({
  display: "flex",
  flexDirection: "column"
});
