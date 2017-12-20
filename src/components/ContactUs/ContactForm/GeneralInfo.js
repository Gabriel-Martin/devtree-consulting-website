import glamorous from "glamorous";
import { Form, Input, Button } from "antd";

import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Item>
            <Input placeholder={"Email"} />
          </Form.Item>
          <Form.Item>
            <Input placeholder={"Phone ###-###-####"} />
          </Form.Item>
          <Form.Item>
            <Input placeholder={"How did you hear about us?"} />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ backgroundColor: "#23BAA1" }}
              type={"primary"}
              htmlType={"submit"}
            >
              Next
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
