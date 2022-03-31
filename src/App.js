import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/website/Header";
import Footer from "./components/website/Footer";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import { routes } from "./routes";

const mapStateToProps = (state) => ({
  user: state.auth.user,
  dark: state.website.dark,
});

function App({ user, dark }) {
  // const { user } = useSelector((state) => state.auth);
  // const { dark } = useSelector((state) => state.website);

  return (
    <BrowserRouter>
      <div className={dark ? "dark" : "light"}>
        {/* {header component} */}
        <Header />

        {/* {views} */}
        <div className={dark ? "dark" : "light"}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                exact={route.exact}
                path={route.path}
                key={index}
                render={() => {
                  if (route.auth && !user) {
                    return <Redirect to="/login" />;
                  }
                  return <route.component />;
                }}
              />
            ))}
          </Switch>
        </div>

        {/* {Counter component} */}
        <Counter />

        {/* {Footer component} */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);
