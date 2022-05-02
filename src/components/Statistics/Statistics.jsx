import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ label, percentage }) => {
  return (
    <div>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
};

const StatisticsList = ({ datas }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {datas.map(data => (
          <li className={s.item} key={data.id}>
            <Statistics label={data.label} percentage={data.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

StatisticsList.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
