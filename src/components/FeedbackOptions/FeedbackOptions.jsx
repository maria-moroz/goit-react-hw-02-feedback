import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
export default function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  return (
    <div className={s.options}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          className={s.option}
          onClick={() => onLeaveFeedback(option.toLowerCase())}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
