import css from "../styles/Profile.module.css"

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class={ css.profile }>
      <div class={ css.description }>
        <img src={avatar} alt="User avatar" class={css.avatar} />
        <p class={css.name}>{username}</p>
        <p class={css.tag}>@{tag}</p>
        <p class={css.location}>{location}</p>
      </div>

      <ul class={css.stats}>
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};