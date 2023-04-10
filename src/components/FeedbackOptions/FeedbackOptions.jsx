import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handeIncrement, options }) => {
    return <div className={css.section}>
        {options.map(option => <button className={css.button} onClick={(e) => { handeIncrement(e.currentTarget.name) }} name={option.toLowerCase()}>{option}</button>)}
        {/* <button className={css.button} onClick={(e) => { handeIncrement(e.currentTarget.name) }} name='good'>Good</button>
        <button className={css.button} onClick={(e) => { handeIncrement(e.currentTarget.name) }} name='neutral'>Neutral</button>
        <button className={css.button} onClick={(e) => { handeIncrement(e.currentTarget.name) }} name='bad'>Bad</button> */}
    </div>
}

FeedbackOptions.propTypes = {
    handeIncrement: PropTypes.func.isRequired,
}

export default FeedbackOptions;