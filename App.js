// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello I am react in extra JS"
// );

{
  /* <div id="parent">
  <div id="child">
    <h1>I am H1 tag</h1>
    <h2>I am H2 Tag</h2>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am nested h1 Tag"),
    React.createElement("h2", {}, "I am nested H2 Tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
