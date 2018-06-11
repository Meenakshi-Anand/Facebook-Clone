import { connect } from 'react-redux';
import { searchUsers, clearSearchResults }
from '../../actions/session_actions';
import Search from './search';


const mapStateToProps = (state, ownProps) => {
  return {
    searchResults: state.entities.users.search_results,
    currentUserId: state.session.id,
    users: state.entities.users
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => dispatch(searchUsers(query)),
    clearSearchResults: () => dispatch(clearSearchResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
