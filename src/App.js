import Home from "./Page/Home";
import Navbar from "./components/Navbar";
import About from "./Page/About";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Blogs from "./Page/Blogs";
import Contact from "./Page/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
