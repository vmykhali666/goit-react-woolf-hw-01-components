import { FriendListItem } from "components/FriendListItem/FriendListItem";
import css from "styles/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul class={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem id={friend.id} avatar={friend.avatar} 
          name={friend.name} isOnline={friend.isOnline}/>
        )
      })}
    </ul>
  );
};
