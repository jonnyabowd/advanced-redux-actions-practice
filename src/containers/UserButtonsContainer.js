import { connect } from 'react-redux';
import { addUser } from '../actions';
import { removeUser } from '../actions';
import UserButtons from '../components/UserButtons';

const mapDispatchToProps = (dispatch) => {
  return {
    add: (txt) => dispatch(addUser(txt)),
    remove: (txt) => dispatch(removeUser(txt))
  }
}

export default connect(null, mapDispatchToProps)(UserButtons);
