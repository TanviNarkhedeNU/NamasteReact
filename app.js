import React from "react"; // importing react from node module
import ReactDOM from "react-dom";

const heading2 = React.createElement("h1", {}, "Hello World"); //heading2 is a react element => js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2); //render takes in react element or a js obj and creates h1 tag that the browser understaands

//createElemet created jas object, only while rendering, the render() function converts it into html tag for browser
//Nested Html tags

/**
 *
 * <div id="parent">
 *    <div id="child">
 *      <h1>I am h1</h1>
 *     </div>
 * </div>
 */

// const parentDiv = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1")
//   )
// );
/**
 *
 * In case of sibling tags - the third arg will be wrapped inside array
 */

const parentDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ])
);
