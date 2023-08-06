import { collection, query, where, addDoc, getDocs } from "firebase/firestore";
import { db } from "./index";

function getUsers() {
  return getDocs(collection(db, "users"));
}

function getUser(user) {
  const q = query(collection(db, "users"), where("user", "==", user));
  return getDocs(q);
}

function addUser(user, password) {
  return addDoc(collection(db, "users"), {
    user,
    password,
  });
}

export { getUsers, getUser, addUser };
