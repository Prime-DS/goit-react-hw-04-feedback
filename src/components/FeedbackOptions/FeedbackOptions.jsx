import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map((item,index) => {
                return (<Btn type='button' key={index} onClick={() => { onLeaveFeedback(item) }}>{ item}</Btn>)
            })}
        </div>
    )
};
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}