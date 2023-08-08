import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUsers } from "@/redux/store";
import styles from "./DbTest.module.css";

const DbTest: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useAppSelector((state) => state.users);

  if (!users) {
    return null;
  }
  console.log(users);

  return (
    <div className={styles.divContentWrapper}>
      {users.map((u) => (
        <ul key={u.username} className={styles.list}>
          {u.username}
          <li className={styles.listItem}>Favorite food: {u.favoriteFood}</li>
          <li className={styles.listItem}>Favorite drink: {u.favoriteDrink}</li>
        </ul>
      ))}
    </div>
  );
};

export default DbTest;
