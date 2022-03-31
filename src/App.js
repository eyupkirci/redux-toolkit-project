import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/website/Header";
import Footer from "./components/website/Footer";

import { useSelector } from "react-redux";

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import { routes } from "./routes";

const Loginauth = ({ children, auth }) => {
  const { user } = useSelector((state) => state.auth);

  if (auth && !user) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const { dark } = useSelector((state) => state.website);

  return (
    <BrowserRouter>
      <div className={dark ? "dark" : "light"}>
        <Header />

        {routes.map(
          (route) =>
            !route.auth && (
              <button>
                <Link to={route.path}> {route.component.name} </Link>
              </button>
            )
        )}

        {/* <Routes>
          {routes.map((route) => (
            console.log(route),
            <Route exact={route.exact} path={route.path} element={<route.component/>}/> ama ben auth 
            
          //     render={() => {
          //   if (route.auth && !user) {
          //       return (element={<>})} else{
          //     return (element={route.component})}
            // })
          ))}
        </Routes> */}
        <Routes>
          {routes.map((route) => (
            <Route
              exact={route.exact}
              key={route.path}
              path={route.path}
              element={
                <Loginauth auth={route.auth}>
                  <route.component />
                </Loginauth>
              }
            />
          ))}
        </Routes>

        <Counter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
