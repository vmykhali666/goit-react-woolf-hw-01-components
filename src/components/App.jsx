import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { FriendList } from "./FriendList/FriendList";
import transactions from "data/transactions.json";
import user from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        padding: 10,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile username={user["username"]} tag={user["tag"]} 
      location={user["location"]} avatar={user["avatar"]} stats={user["stats"]}/>
      <Statistics title={"upload stats"} stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};
