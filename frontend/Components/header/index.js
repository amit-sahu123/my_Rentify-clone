import Link from "next/link";
import styles from "./header.module.scss";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MyHeader() {
  const { logout } = useAuth();
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setUser(userInfo?.user)
    // console.log('user localStorage.getItem', user)
  }, [])
  const handleLogout = () => {
    logout();
    router.push('/login');
  };
  console.log('user', user)
  return (
    <div className={styles.root}>
      <img src="assets/homeIcon.png" width={90} height={50} style={{ cursor: 'pointer' }} />
      <ul className={styles._ul}>
        <li className={styles.listItem}><a className={styles.active} href="/">Home</a></li>
        <li className={styles.listItem}><a href="/sell-property">Sell Your Property</a></li>
        <li className={styles.listItem}><a href="my-properties">My Properties</a></li>
        <li className={styles.listItem}><a href="about">About</a></li>
      </ul>
      
        {user ? (
          <div className={styles.rightContentBox}>
            <li>Welcome <b>{user?.firstName}</b></li>
            <div onClick={handleLogout} className={styles.buttonBox}>
               Logout 
            </div>
          </div>
        ) : (
          <div className={styles.buttonBox}>
            <a href="/login">Login</a>
          </div>
        )}
      {/* <button variant="primary" onClick={() => handleLogOut()}>
        LogOut
      </button> */}
    </div>
  );
}