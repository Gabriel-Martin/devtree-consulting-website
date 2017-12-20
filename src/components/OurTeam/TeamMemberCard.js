import React from "react";

import glamorous from "glamorous";

const TeamMemberCard = props => {
  return (
    <Card>
      <ImgWell>
        <Img src={props.image} />
      </ImgWell>
      <CardFooter>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
      </CardFooter>
    </Card>
  );
};

export default TeamMemberCard;

const Card = glamorous.div({
  width: 242,
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)"
});

const ImgWell = glamorous.div({
  height: 300,
  width: "100%",
  overflow: "hidden"
});

const Img = glamorous.img({
  width: "100%",
  height: "auto",
  filter: "grayscale(100%)"
});

const CardFooter = glamorous.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
});

const Name = glamorous.div({
  margin: "1px 3px"
});

const Position = glamorous.div({
  margin: "1px 3px"
});
