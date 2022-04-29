import PropTypes from 'prop-types';

const Statistics = ({
    label,
    percentage,
}) => {
    return (
        <div>
<span className="label">{label}</span>
<span className="percentage">{percentage}%</span>
            </div>
    )
}

const StatisticsList = ({ datas }) => {
    return (
        <section className="statistics">
  <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
    {
    datas.map(data => (
        <li className="item" key={data.id}>
            <Statistics
            label={data.label}
            percentage={data.percentage}
            />        
    </li>
))
    }
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
    )
}

export default StatisticsList;