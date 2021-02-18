import * as React from "react";
import { useGetUsersQuery as useQuery } from "../../stores/toolkitWithRTKQ/services/users";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUsers,
  addUsers,
} from "../../stores/toolkitWithRTKQ/features/users/reducers";

const UsersListRQ: React.FC<any> = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const { data, error, isFetching } = useQuery({});

  React.useEffect(() => {
    if (data) {
      dispatch(addUsers(data));
    }
  }, [data]);

  return (
    <>
      <section className="section">
        <h1 className="title">Users List</h1>
        {error && <p className="notification is-danger">Error!!</p>}
        {isFetching && <p className="notification is-info">Loading...</p>}
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
              users.map(({ id, name }: { id: any; name: string }) => (
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

export default UsersListRQ;
