import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headder from "./component/Headder";
import Work from "./component/Work";
import Service from "./component/Service";
import Future from "./component/Future";
// import Slider from "./component/Slider";
import Team from "./component/Team";
import Contect from "./component/Contect";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Headder />
      <Work />
      <Service />
      <Future />
      {/* <Slider /> */}
      <Team />
      <Contect />
      <Footer />
    </>
  );
}

export default App;
