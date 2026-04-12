import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import card from "./components/card.jsx";

function App() {
  return(
    <>
    <Header />
    <Card />
    <Food />
    <Footer />

    </> // React Fragment to wrap multiple elements without adding extra nodes to the DOM
  );
}

export default App
