import Home from "./Page/Home";
import Navbar from "./components/Navbar";
import About from "./Page/About";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Blogs from "./Page/Blogs";
import Contact from "./Page/Contact";
import Layout from "./Page/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/AungMoeThuBlog/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
