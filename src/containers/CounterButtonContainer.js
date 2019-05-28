import { connect } from 'react-redux';
import { increaseCounter } from '../actions';
import { decreaseCounter } from '../actions';
import CounterButton from '../components/CounterButton';

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (txt) => dispatch(increaseCounter(txt)),
    decrease: (txt) => dispatch(decreaseCounter(txt))
  }
}

export default connect(null, mapDispatchToProps)(CounterButton);
