import { connect } from 'react-redux';
import { setIsLoading } from '../actions';
import ShowModal from '../components/ShowModal';

const mapDispatchToProps = (dispatch) => {
  return {
    set: (txt) => dispatch(setIsLoading(txt))
  }
}

export default connect(null, mapDispatchToProps)(ShowModal);
