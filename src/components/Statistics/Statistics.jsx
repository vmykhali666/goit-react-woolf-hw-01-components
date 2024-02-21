import css from "../styles/Statistics.module.css"

const GetRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const Statistics = ({ title, stats }) => {
  return (
    <section class={css.statistics}>
      {title !== undefined && <h2 class={css.title}>{title}</h2>}

      <ul class={css.statList}>
        {stats.map((stat) => {
          return (
            <li key={stat.id} class={css.item} style={{
                backgroundColor: GetRandomColor(),
            }}>
              <span class={css.label}>{stat.label}</span>
              <span class={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
