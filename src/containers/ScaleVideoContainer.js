import { connect } from 'react-redux';
import { setVideoScale } from '../actions';
import ScaleVideo from '../components/ScaleVideo';

const mapDispatchToProps = (dispatch) => {
  return {
    set: (txt) => dispatch(setVideoScale(txt))
  }
}

export default connect(null, mapDispatchToProps)(ScaleVideo);
