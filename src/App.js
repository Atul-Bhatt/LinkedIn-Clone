import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";
import { auth } from './firebase';
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import Widgets from "./Widgets";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="App">
        <Header />

        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
        )}
    </div>
  );
}

export default App;
