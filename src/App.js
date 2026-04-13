import Header from "./Header.js";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./components/card.jsx";
import Button from "./components/Button.jsx";
import Greeting from "./components/greeting.jsx";
import List from "./components/List.jsx";

function App() {
  return(
    <div className="app">
    <Greeting name ="Manan Kulshrestha" isLoggedIn={true} />
    <Header />
    <div className="Cards">
    <Card name = "manan" bool1 = {true}> </Card>
    <Card name = "Abhijay"  bool1 = {true}> </Card>
    <Card name = "Zayan"  bool1 = {false}/>
    </div>
    <Food />
    <Button />
    <List></List>
    <Footer />

    </div> // React Fragment to wrap multiple elements without adding extra nodes to the DOM
  );
}

export default App
