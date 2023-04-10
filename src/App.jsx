import { Component } from "react";
import Statistics from "components/Statistics";
// import Feedback from "components/Feedback";
import FeedbackOptions from "components/FeedbackOptions";
import Section from "components/Section";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handeIncrement = (e) => {
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
      <div>
        {/* <Feedback /> */}

        <Section title="Please leave feedback">
          <FeedbackOptions options={["Good", "Neutral", "Bad"]} handeIncrement={this.handeIncrement} />
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>

      </div>
    );
  }
};

export default App;
