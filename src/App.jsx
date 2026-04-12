import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";

function App() {
  return(
    <>
    <Header />
    <Food />
    <Footer />

    </> // React Fragment to wrap multiple elements without adding extra nodes to the DOM
  );
}

export default App
