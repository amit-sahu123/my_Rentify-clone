import Link from "next/link";
import styles from "./header.module.scss";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MyHeader() {
  const { logout, user, setUserInfo } = useAuth();
  // const [user, setUser] = useState(null);
  const router = useRouter();
  let userInfo;
  useEffect(() => {
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
    userInfo = JSON.parse(userInfo);
    setUserInfo(userInfo)
  }, [])
  console.log('user localStorage.getItem',   user)
  const handleLogout = () => {
    logout();
    router.push('/login');
  };
  console.log('user', user)
  return (
    <div className={styles.root}>
      <Link href="/" style={{display:'flex', alignItems:"center", gap:'20px'}}>
        <img src="/assets/homeIcon.png" width={90} height={50} style={{ cursor: 'pointer' }} />
       <h1>Rentify</h1> 
      </Link>
      <ul className={styles._ul}>
        <li className={styles.listItem}><Link className={styles.active} href="/">Home</Link></li>
        <li className={styles.listItem}><Link href="/sell-property">Sell Your Property</Link></li>
        <li className={styles.listItem}><Link href="/my-properties">My Properties</Link></li>
        <li className={styles.listItem}><Link href="/about">About</Link></li>
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
            <Link href="/login">Login</Link>
          </div>
        )}
    </div>
  );
}