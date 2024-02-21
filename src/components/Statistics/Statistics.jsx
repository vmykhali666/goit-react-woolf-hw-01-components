import css from "styles/Statistics.module.css"

const GetRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map((stat) => {
          return (
            <li key={stat.id} className={css.item} style={{
                backgroundColor: GetRandomColor(),
            }}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
