import { connect } from 'react-redux';
import { setCurrentUserSort } from '../actions';
import SortUsers from '../components/SortUsers';

const mapDispatchToProps = (dispatch) => {
  return {
    set: (txt) => dispatch(setCurrentUserSort(txt))
  }
}

export default connect(null, mapDispatchToProps)(SortUsers);
