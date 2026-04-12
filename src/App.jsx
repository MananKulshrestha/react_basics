import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./components/card.jsx";
import Button from "./components/Button.jsx";

function App() {
  return(
    <div className="app">
    <Header />
    <div className="Cards">
    <Card />
    <Card />
    <Card />
    </div>
    <Food />
    <Button />
    <Footer />

    </div> // React Fragment to wrap multiple elements without adding extra nodes to the DOM
  );
}

export default App
