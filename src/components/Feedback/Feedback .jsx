import React from "react";
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

import {Wrapper} from './Feedback.styled'
class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

  
    CounterFeedback = (eve) => {
        this.setState(prevState => {
            return {
                [eve]: prevState[eve] +1,
            }
        })
    };
    
     countTotalFeedback () {
         return this.state.good + this.state.neutral + this.state.bad;
    };
    
    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        const good = this.state.good;
        return Math.round((good / total) * 100);
    }

    render() {
        return (
        <Wrapper>
            <h1>Please leave feedback</h1>
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.CounterFeedback}>
                </FeedbackOptions>

                <section>
                <h2>Statistics</h2>
                    {this.countTotalFeedback() ? <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics> : <h2>No feedback given</h2>
                }
                </section>
            
            
        </Wrapper>)
    };
};
export default Feedback;