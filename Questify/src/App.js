import { useState, useEffect } from "react";
import "./App.css";
import ScrollToTop from "./Component/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Loading from "./Component/Loading";
import Layout from "./Component/Layout";
import Home from "./Screens/Home/Home";
import Mainhub from "./Screens/Mainhub/Mainhub";
import About from "./Screens/About/About";
import Service from "./Screens/Services/Services";
import SignIn from "./Screens/Popup/Signup";
import LayoutMainhub from "./Component/LayoutMainhub";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About/>
            </Layout>
          }
        />
        <Route
          path="/service"
          element={
            <Layout>
              <Service/>
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignIn/>
            </Layout>
          }
        />
        <Route
        path="/Mainhub"
        element={
          <LayoutMainhub>
            <Mainhub/>
          </LayoutMainhub>
        }
        />
      </Routes>

    </>
  );
}

export default App;



