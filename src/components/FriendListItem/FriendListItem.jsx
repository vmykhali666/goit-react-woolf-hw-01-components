import css from "styles/FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} class={css.item}>
      <span class=
      {clsx(css.status, {
        [css.isOnline] : isOnline,
      })}
      ></span>
      <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p class={css.name}>{name}</p>
    </li>
  );
};
