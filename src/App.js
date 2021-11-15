import Backdrop from "./components/backdrop/Backdrop";
import FooterPrimary from "./components/footerPrimary/FooterPrimary";
import FooterSecondary from "./components/footerSecondary/FooterSecondary";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { SidebarVisibilityContextProvider } from "./store/SidebarVisibilityContext";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import List from "./pages/list";
import Create from "./pages/create";
import Login from "./pages/login";
import Signup from "./pages/signup";
import UserContextProvider from "./store/userContext";

function App() {
  return (
    <div className="page">
      <UserContextProvider>
      <Router>
        <SidebarVisibilityContextProvider>
          <Header />
          <Backdrop />
          <Sidebar />
        </SidebarVisibilityContextProvider>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/book" exact component={ Detail } />
          <Route path="/book/:id" exact component={ Detail } />
          <Route path="/list" component={ List } />
          <Route path="/create" component={ Create } />
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />
        </Switch>
      </Router>
      <FooterPrimary />
      <FooterSecondary />
      </UserContextProvider>
    </div>
  );
}

export default App;
