import glamorous from "glamorous";
import { Form, Input, Button } from "antd";

import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Item>
            <Input placeholder={"First Name"} />
          </Form.Item>
          <Form.Item>
            <Input placeholder={"Last Name"} />
          </Form.Item>
          <Form.Item>
            <Button
              type={"primary"}
              htmlType={"submit"}
              style={{ backgroundColor: "#23BAA1" }}
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
