import Home from "./Page/Home/Home";
import About from "./Page/About";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import Blogs from "./Page/Blogs";
import Contact from "./Page/Contact";
import Layout from "./Page/Layout";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <Layout>
        <AnimatePresence>
          <Switch>
            <Route exact path="/AungMoeThuBlog/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
