import { connect } from "react-redux";
import { usersActions } from "../stores/coreRedux/users/actions";
import UsersList from "../components/coreRedux/UsersList";

const mapStateToProps = ({ users }: any) => ({
  users: users.users,
  loading: users.loading,
  error: users.error
});

const mapDispatchToProps = (dispatch: any) => ({
  load: () => dispatch(usersActions.asyncFetch()),
  clear: () => dispatch(usersActions.clearUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
