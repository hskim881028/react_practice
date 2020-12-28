function Food(props) {
    console.log();
    let food = props.fav;
    return <h1>I like {food}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
        <Food
            fav="banana"
            something={"true"}
            test={["hello", 1, 2, 3, false]}
        />
        <Food
            fav="apple"
            something={"true"}
            test={["hello", 1, 2, 3, false]}
        />
        <Food
            fav="ramen"
            something={"true"}
            test={["hello", 1, 2, 3, false]}
        />
    </div>
  );
}

export default App;