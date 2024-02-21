import { FriendListItem } from "components/FriendListItem/FriendListItem";
import css from "styles/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id} avatar={friend.avatar} 
          name={friend.name} isOnline={friend.isOnline}/>
        )
      })}
    </ul>
  );
};
