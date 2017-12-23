import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import glamorous from "glamorous";

const BuildProcessSteps = props => {
  return (
    <Container>
      <Header>START</Header>
      <Line />
      <VerticalTimeline>
        <VerticalTimelineElement
          iconStyle={IconStyleRight}
          className={"vertical-timeline-element--work"}
        >
          <h3 className="vertical-timeline-element-title">Research</h3>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={IconStyleLeft}
          className={"vertical-timeline-element--work"}
        >
          <h3 className="vertical-timeline-element-title">Plan</h3>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={IconStyleRight}
          className={"vertical-timeline-element--work"}
        >
          <h3 className="vertical-timeline-element-title">Design</h3>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={IconStyleLeft}
          className={"vertical-timeline-element--work"}
        >
          <h3 className="vertical-timeline-element-title">Present</h3>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={IconStyleRight}
          className={"vertical-timeline-element--education"}
        >
          <h3 className="vertical-timeline-element-title">DEVELOP</h3>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={IconStyleLeft}
          className={"v{ertical-timeline-element--education"}
        >
          <h3 className="vertical-timeline-element-title">TEST</h3>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={IconStyleRight}
          className={"vertical-timeline-element--education"}
        >
          <h3 className="vertical-timeline-element-title">EVALUATE</h3>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Line />
      <Header>LAUNCH</Header>
    </Container>
  );
};

export default BuildProcessSteps;

const Container = glamorous.div(props => ({
  padding: 40,
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
}));

const Header = glamorous.div(props => ({
  fontSize: 36,
  width: "auto",
  color: "#2BD1B5",
  textAlign: "center",
  padding: "20px 0px"
}));

const Line = glamorous.div(props => ({
  height: 5,
  width: 200,
  backgroundColor: "rgba(43,209,181,1)"
}));

const IconStyleLeft = {
  backgroundSize: "cover",
  backgroundColor: "white",
  backgroundImage: "url(images/general/logo-icon.png)"
};

const IconStyleRight = {
  backgroundSize: "cover",
  backgroundColor: "white",
  backgroundImage: "url(images/general/reverse-logo.png)"
};
