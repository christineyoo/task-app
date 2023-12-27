import React, { useEffect } from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: { sortOrder: string };
}

const UserTable = async ({ searchParams: { sortOrder } }: Props) => {
  const [ascending, setAscending] = React.useState(true);
  const [sortedUsers, setSortedUsers] = React.useState<User[]>([]);

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store",
  });
  const users: User[] = await res.json();

  useEffect(() => {
    let sorted = [];
    if (ascending) {
      sorted = sort(users).asc((user) => user.name);
    } else {
      sorted = sort(users).desc((user) => user.name);
    }
    setSortedUsers(sorted);
  }, [ascending]);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th onClick={() => setAscending(!ascending)}>Name</th>
          <th onClick={() => setAscending(!ascending)}>Email</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
