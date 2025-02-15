import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
import Section3 from "./Component/Section3";

function App() {
  return (
    <>
      <div className="App">
        <Home />
      </div>
      <div>
        <Section1 />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
