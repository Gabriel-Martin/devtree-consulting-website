// import React, { Component } from "react";

// class TeamMemberCard extends Component {
//   render() {
//     return (
//       <Container>
//         <Card1>
//           <ImgWell>
//             <Img src={"images/team/Isaiah.jpg"} />
//           </ImgWell>
//           <CardFooter>
//             <Name>Isaiah Grey</Name>
//             <Role>Co-Founder | Lead Developer</Role>
//           </CardFooter>
//         </Card1>
//         <Card2>
//           <ImgWell>
//             <Img src={"images/team/Chris.jpg"} />
//           </ImgWell>
//           <CardFooter>
//             <Name>Isaiah Grey</Name>
//             <Role>Co-Founder | Lead Developer</Role>
//           </CardFooter>
//         </Card2>
//         <Card3>
//           <ImgWell>
//             <Img src={"images/team/Calvin.jpg"} />
//           </ImgWell>
//           <CardFooter>
//             <Name>Isaiah Grey</Name>
//             <Role>Co-Founder | Lead Developer</Role>
//           </CardFooter>
//         </Card3>
//         <Card4>
//           <ImgWell>
//             <Img src={"images/team/Gabe.jpg"} />
//           </ImgWell>
//           <CardFooter>
//             <Name>Isaiah Grey</Name>
//             <Role>Co-Founder | Lead Developer</Role>
//           </CardFooter>
//         </Card4>
//       </Container>
//     );
//   }
// }

// export default TeamMemberCard;

import React from "react";

import glamorous from "glamorous";

const TeamMemberCard = props => {
  return <div>card</div>;
};

export default TeamMemberCard;

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

const Role = glamorous.div({
  margin: "1px 3px"
});

const Container = glamorous.div({
  flex: 1,
  padding: 5,
  display: "flex",
  flexDirection: "row",
  flexFlow: "row wrap",
  justifyContent: "space-around"
});

const Card1 = glamorous.div({
  width: 242,
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)"
});

const Card2 = glamorous.div({
  width: 242,
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)"
});

const Card3 = glamorous.div({
  width: 242,
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)"
});

const Card4 = glamorous.div({
  width: 242,
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)"
});
