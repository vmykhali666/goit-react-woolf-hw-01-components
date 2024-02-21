import css from "styles/FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span className=
      {clsx(css.status, {
        [css.isOnline] : isOnline,
      })}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
