import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import MainNav from "./MainNav";
import HeroSlider from "./HeroSlider";
import SortByContent from "./SortByContent";
import LandingPageCards from "./LandingPageCards";
import LandingPageCards1 from "./LandingPageCards1";
import LandingPageCards2 from "./LandingPageCards2";
import ImgOverlay from "./ImgOverlay";
import Agents from "./Agents";
import LandingPage from "./LandingPage";
import MansionInFoxchapel from "./MansionInFoxchapel";
import PhiOverlay from "./PhiOverlay";
import AgentJohnProfile from "./AgentJohnProfile";
import TestPage3 from "./TestPage3";
import ContactUs from "./ContactUs";
import BlogList from "./BlogList";
import BlogListPage2 from "./BloglistPage2";
import BlogPostTemplate from "./BlogPostTemplate";
import BuyingAHome from "./BuyingAHome";
import AllProperties from "./AllProperties";
import AgentKevinProfile from "./AgentKevinProfile";
import AgentMaryProfile from "./AgentMaryProfile";
import MansionInNorwin from "./MansionInNorwin";
import MansionInGladwyne from "./MansionInGladwyne";
import HouseInEdgeworth from "./HouseInEdgeworth";
import MansionInSewickleyHeights from "./MansionInSewickleyHeights";
import HouseInOreland from "./HouseInOreland";
import LoginAuth from "./LoginAuth";
import AptInPhiladelphia from "./AptInPhiladelphia";
import AptInAllentown from "./AptInAllentown";
import AptInWilliamsport from "./AptInWilliamsport";
import { auth } from "./config/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);




  
  return (
    <Router>
      <MainNav />
      <ScrollToTop />
      <Switch>
        <Route path="/ProfileScreen">
          <ProfileScreen />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/MansionInFoxchapel">
          <MansionInFoxchapel />
        </Route>
        <Route exact path="/MansionInNorwin">
          <MansionInNorwin />
        </Route>
        <Route exact path="/MansionInGladwyne">
          <MansionInGladwyne />
        </Route>
        <Route exact path="/HouseInEdgeworth">
          <HouseInEdgeworth />
        </Route>
        <Route exact path="/MansionInSewickleyHeights">
          <MansionInSewickleyHeights />
        </Route>
        <Route exact path="/HouseInOreland">
          <HouseInOreland />
        </Route>
        <Route exact path="/AptInPhiladelphia">
          <AptInPhiladelphia />
        </Route>
        <Route exact path="/AptInAllentown">
          <AptInAllentown />
        </Route>
        <Route exact path="/AptInWilliamsport">
          <AptInWilliamsport />
        </Route>
        <Route exact path="/AgentJohnProfile">
          <AgentJohnProfile />
        </Route>
        <Route exact path="/AgentKevinProfile">
          <AgentKevinProfile />
        </Route>
        <Route exact path="/AgentMaryProfile">
          <AgentMaryProfile />
        </Route>
        <Route exact path="/TestPage3">
          <TestPage3 />
        </Route>
        <Route exact path="/ContactUs">
          <ContactUs />
        </Route>
        <Route exact path="/BlogList">
          <BlogList />
        </Route>
        <Route exact path="/BloglistPage2">
          <BlogListPage2 />
        </Route>
        <Route exact path="/BlogPostTemplate">
          <BlogPostTemplate />
        </Route>
        <Route exact path="/BuyingAHome">
          <BuyingAHome />
        </Route>
        <Route exact path="/AllProperties">
          <AllProperties />
        </Route>

        <Route exact path="/LoginAuth">
          <LoginAuth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
