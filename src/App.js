import logo from './logo.svg';
import './App.css';
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import {Profile} from "./components/Profile/Profile";
import {Statistics} from "./components/Statistics/Statistics";
import { FriendList } from './components/FriendList/FriendList';

function App() {
  return (
    <>
      {/* <Profile username={user["username"]} tag={user["tag"]} 
      location={user["location"]} avatar={user["avatar"]} stats={user["stats"]}/> */
      // <Statistics title={"upload stats"} stats={data}/>
      <FriendList friends={friends}/>
      }
    </>
  );
}

export default App;
