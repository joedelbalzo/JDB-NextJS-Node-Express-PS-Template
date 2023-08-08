import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUsers } from "@/redux/store";

const DbTest: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useAppSelector((state) => state.users);
  if (!users) {
    console.log("no users");
    return null;
  } else if (users) {
    console.log("DbTests");
  }
  console.log(users);

  return (
    <>
      {users.map((u) => (
        <ul key={u.username}>
          {u.username}
          <li>{u.favoriteFood}</li>
          <li>{u.favoriteDrink}</li>
        </ul>
      ))}
      ;
    </>
  );
};

export default DbTest;
