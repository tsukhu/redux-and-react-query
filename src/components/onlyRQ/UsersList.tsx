import * as React from "react";
import { useQuery } from "react-query";
import { getUsers } from "../../api/getUsers";
const UsersListOnlyRQ: React.FC<any> = () => {
  const { data, error, isFetching } = useQuery(
    ["users"],
    async () => await getUsers()
  );
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
            {data &&
              data.map(({ id, name }: { id: any, name: string}) => (
                <tr key={id}>
                  <td>{name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default UsersListOnlyRQ;
