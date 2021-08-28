import React, { Suspense } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Footer from "./shared/Navigation/Footer";
// import LandingPage from "./pages/LandingPage";

const LandingPage = React.lazy(
  () => import(/* webpackChunckName: "LandingPage" */ "./pages/LandingPage")
);
const NotFound = React.lazy(
  () => import(/* webpackChunckName: "NotFound" */ "./pages/ErrorPage/NotFound")
);
function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route component={NotFound} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <BrowserRouter>
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <MainNavigation />
          {routes}
          <Footer />
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
