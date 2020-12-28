function Food({id, name, picture}) {
    return <div>
        <h1>ID : {id}</h1>
        <h1>I like {name}</h1>
        <img src={picture} alt={name}/>
    </div>

}

const foodILike = [
    {
        id: 1,
        name: "banana2",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XFvgjrUne5hvG2AZFEjjzgHaEK%26pid%3DApi&f=1",
        rating: 4.9
    },
    {
        id: 2,
        name: "apple2",
        image: "https://ko.m.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC:Logo_Apple.inc.gif",
        rating: 5.0
    },
]

function App() {
    return (
        <div className="App">
            {
                foodILike.map(item => (
                    <Food
                        id={item.id}
                        name={item.name}
                        picture={item.image}/>
                ))}
        </div>
    );
}

export default App;