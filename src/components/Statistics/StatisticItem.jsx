import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const StatisticItem = ({ id, label, percentage }) => {
    return (
        <li className={css.item}>
            key={id}
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
        </li>
    )
};

StatisticItem.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
};