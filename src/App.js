import "./App.css";
import { Link, NavLink,Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/favorites";
import MainNavigation from "./components/layout/MainNavigation";


function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" Component={AllMeetups}/>
          <Route path="/new-meetups" Component={NewMeetup}/>
          <Route path="/favorites" Component={Favorites}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
