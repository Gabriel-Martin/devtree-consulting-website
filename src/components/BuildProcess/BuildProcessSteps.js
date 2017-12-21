import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import glamorous, { P } from "glamorous";

const BuildProcessSteps = props => {
  return (
    <Container>
      <Header>START</Header>
      <Line />
      <VerticalTimeline>
        <VerticalTimelineElement
          className={"vertical-timeline-element--work testing"}
          iconStyle={IconStyleLeft}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={IconStyleRight}
          className={"vertical-timeline-element--work"}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className={"vertical-timeline-element--work"}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className={"vertical-timeline-element--work"}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={"vertical-timeline-element--education"}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={"v{ertical-timeline-element--education"}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={"vertical-timeline-element--education"}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>;
    </Container>
  );
};

export default BuildProcessSteps;

const Container = glamorous.div(props => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
}));

const Header = glamorous.div(props => ({
  fontSize: 36,
  color: "#2BD1B5",
  width: "auto",
  textAlign: "center"
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
  backgroundImage: "url(images/general/logo-icon.png)"
};
