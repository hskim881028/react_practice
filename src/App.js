import PropTypes from "prop-types";

function Food({id, name, picture, rating}) {
    return <div>
        <h1>I like {name}</h1>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
    </div>
}

const foodILike = [
    {
        id: 1,
        name: "banana",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XFvgjrUne5hvG2AZFEjjzgHaEK%26pid%3DApi&f=1",
        rating: 4.9
    },
    {
        id: 2,
        name: "apple",
        image: "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png",
        rating: 5.0
    }
]

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function App() {
    return (
        <div className="App">
            {
                foodILike.map(item => (
                    <Food
                        key={item.id}
                        name={item.name}
                        picture={item.image}
                        rating={item.rating}/>
                ))}
        </div>
    );
}

export default App;