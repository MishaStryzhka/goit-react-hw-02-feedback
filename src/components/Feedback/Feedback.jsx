import { Component } from 'react';

import css from './Feedback.module.css';


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handeIncrement(e) {
        this.setState((prefState) => ({
            ...prefState, [e]: prefState[e] += 1
        }))
    }

    countTotalFeedback() {
        return Object.values(this.state).reduce((previousValue, number) => { return previousValue + number }, 0)
    }

    countPositiveFeedbackPercentage() {
        return Math.ceil(this.state.good / this.countTotalFeedback() * 100) ? Math.ceil(this.state.good / this.countTotalFeedback() * 100) : 0
    }

    render() {


        return (
            <>
                <h1 className={css.title}>Please leave feedback</h1>
                <button onClick={(e) => { this.handeIncrement(e.currentTarget.name) }} name='good'>Good</button>
                <button onClick={(e) => { this.handeIncrement(e.currentTarget.name) }} name='neutral'>Neutral</button>
                <button onClick={(e) => { this.handeIncrement(e.currentTarget.name) }} name='bad'>Bad</button>

                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                {<p>Total: {this.countTotalFeedback()} </p>}
                {<p>Total: {this.countPositiveFeedbackPercentage()} </p>}
            </>

        )
    }
};

export default Feedback;