import React from "react";

import glamorous from "glamorous";

const TeamMemberCard = props => {
  return (
    <Card>
      <ImgWell barColor={props.barColor}>
        <Img src={props.image} />
      </ImgWell>
      <CardFooter>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
      </CardFooter>
    </Card>
  );
};

const Card = glamorous.div(props => ({
  width: 242,
  margin: 20,
  display: "flex",
  flexDirection: "column",
  transition: "all .2s ease-in-out",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
  ":hover": {
    transform: "scale(1.01)",
    transition: "all .2s ease-in-out",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 1)"
  }
}));

const ImgWell = glamorous.div(props => ({
  height: 300,
  width: "100%",
  overflow: "hidden",
  borderBottom: `5px solid ${props.barColor}`
}));

const Img = glamorous.img({
  width: "100%",
  height: "auto",
  filter: "grayscale(100%)",
  transition: "filter .2s linear",
  transition: "all .2s ease-in-out",
  ":hover": {
    filter: "none",
    transition: "all .2s ease-in-out"
  }
});

const CardFooter = glamorous.div({
  flex: 1,
  display: "flex",
  padding: "5px 10px",
  flexDirection: "column"
});

const Name = glamorous.div({});

const Position = glamorous.div({});

export default TeamMemberCard;
