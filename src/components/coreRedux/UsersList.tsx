import * as React from "react";

interface UsersListProps {
  users: any[];
  loading: boolean;
  error: boolean;
  load: () => void;
}

const UsersList: React.FC<UsersListProps> = ({
  users,
  loading,
  error,
  load
}) => {
  React.useEffect(() => {
    load();
  }, []);
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
              users.map(({ id, name }) => (
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

export default UsersList;
