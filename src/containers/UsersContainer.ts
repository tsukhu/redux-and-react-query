import { connect } from "react-redux";
import { usersActions } from "../store/users/actions";
import UsersList from "../components/UsersList";

const mapStateToProps = ({ users }) => ({
  users: users.users,
  loading: users.loading,
  error: users.error
});

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(usersActions.asyncFetch()),
  clear: () => dispatch(usersActions.clearUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
