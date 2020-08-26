import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

console.log(Sdata[0]);

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series</h1>
    <Card
      imgscr={Sdata[0].imgscr}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      links={Sdata[0].links}
    />
    <Card
      imgscr={Sdata[1].imgscr}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      links={Sdata[1].links}
    />
    <Card
      imgscr={Sdata[2].imgscr}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      links={Sdata[2].links}
    />
    <Card
      imgscr={Sdata[3].imgscr}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      links={Sdata[3].links}
    />
    <Card
      imgscr={Sdata[4].imgscr}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      links={Sdata[4].links}
    />
  </>,
  document.getElementById("root")
);
