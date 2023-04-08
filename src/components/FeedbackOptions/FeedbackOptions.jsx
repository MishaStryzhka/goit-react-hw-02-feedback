import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handeIncrement }) => {
    return <div className={css.section}>
        <button className={css.button} onClick={(e) => { handeIncrement(e.currentTarget.name) }} name='good'>Good</button>
        <button className={css.button} onClick={(e) => { handeIncrement(e.currentTarget.name) }} name='neutral'>Neutral</button>
        <button className={css.button} onClick={(e) => { handeIncrement(e.currentTarget.name) }} name='bad'>Bad</button>
    </div>
}

FeedbackOptions.propTypes = {
    handeIncrement: PropTypes.func.isRequired,
}

export default FeedbackOptions;