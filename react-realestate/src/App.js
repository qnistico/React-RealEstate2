import React from "react";
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
import AllPropertiesPage2 from "./AllPropertiesPage2";
import AgentKevinProfile from "./AgentKevinProfile";
import AgentMaryProfile from "./AgentMaryProfile";
import MansionInNorwin from "./MansionInNorwin";
import MansionInGladwyne from "./MansionInGladwyne";
import HouseInEdgeworth from "./HouseInEdgeworth";
import MansionInSewickleyHeights from "./MansionInSewickleyHeights";
import HouseInOreland from "./HouseInOreland";
function App() {
  
  return (
    <Router>
      <div>
        <MainNav />
        <div className="landing_page">
          <Switch>
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
            <Route exact path="/AllPropertiesPage2">
        <AllPropertiesPage2 />
      </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
