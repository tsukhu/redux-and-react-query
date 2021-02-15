import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsersAsync,
  selectError,
  selectLoading,
  selectUsers
} from "../../stores/reduxToolkit/features/users/reducers";
const UsersListTK: React.FC<any> = () => {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);
  return (
    <>
      <section className="section">
        <h1 className="title">Users List</h1>
        {error && <p className="notification is-danger">Error!!</p>}
        {loading && <p className="notification is-info">Loading...</p>}
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="Name">Name</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map(({ id, name }: {id: any, name: string}) => (
                <tr key={id}>
                  <td data-testid={id}>{name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default UsersListTK;
