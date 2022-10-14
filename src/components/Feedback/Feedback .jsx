
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import {Wrapper} from './Feedback.styled'
import { useState } from "react";

export default function Feedback () {
    const [good,setGood]= useState(0)
    const [neutral,setNeutral]= useState(0)
    const [bad,setBad]= useState(0)

    const CounterFeedback = (item) => {
        switch(item){
            case "good":
                return setGood((prev)=>prev+1);
            case "neutral":
                    return setNeutral((prev)=>prev+1);
            case "bad":
                    return setBad((prev)=>prev+1);
                default:
                    return;
        }
    };
    
     const countTotalFeedback = () => {
         return good + neutral + bad;
    };
    
    const countPositiveFeedbackPercentage =()=> {
        const total = countTotalFeedback();
        // const good = state.good;
        return Math.round((good / total) * 100);
    }


    const total=countTotalFeedback();
    const positivePercentage=countPositiveFeedbackPercentage();
    // const options = ['good', 'neutral', 'bad'];
    return (
        <Wrapper>
            <h1>Please leave feedback</h1>
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={CounterFeedback}>
                </FeedbackOptions>
                <section>
                <h2>Statistics</h2>
                    {countTotalFeedback() ? <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}>

                        </Statistics> : <h2>No feedback given</h2>
                }
                </section>
        </Wrapper>
    )
};



// class Feedback extends React.Component {
//     state = {
//         good: 0,
//         neutral: 0,
// //         bad: 0
// //     };

  
//     CounterFeedback = (eve) => {
//         this.setState(prevState => {
//             return {
//                 [eve]: prevState[eve] +1,
//             }
//         })
//     };
    
//      countTotalFeedback () {
//          return this.state.good + this.state.neutral + this.state.bad;
//     };
    
//     countPositiveFeedbackPercentage() {
//         const total = this.countTotalFeedback();
//         const good = this.state.good;
//         return Math.round((good / total) * 100);
//     }

//     render() {
//         return (
//         <Wrapper>
//             <h1>Please leave feedback</h1>
//                 <FeedbackOptions
//                     options={Object.keys(this.state)}
//                     onLeaveFeedback={this.CounterFeedback}>
//                 </FeedbackOptions>

//                 <section>
//                 <h2>Statistics</h2>
//                     {this.countTotalFeedback() ? <Statistics
//                         good={this.state.good}
//                         neutral={this.state.neutral}
//                         bad={this.state.bad}
//                         total={this.countTotalFeedback()}
//                         positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics> : <h2>No feedback given</h2>
//                 }
//                 </section>
            
            
//         </Wrapper>)
//     };
// };
// export default Feedback;