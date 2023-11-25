// const heading = React.createElement("h1",{id:"heading"},"Hello World form bottom of Heart");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);

/* <div id="parent">
<div id="child">
    <h1>heading 1</h1>
</div>
</div> */

const parent = React.createElement("div",{id:"parent"},
               [
                React.createElement("div",{id:"child"},
                [
                React.createElement("h1",{},"heading 1"),
                React.createElement("h2",{},"heading 2")
                ]),
                React.createElement("div",{id:"child2"},
                [
                React.createElement("h1",{},"heading 1"),
                React.createElement("h2",{},"heading 2")
                ])
               ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
