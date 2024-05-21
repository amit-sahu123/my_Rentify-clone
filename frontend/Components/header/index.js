import Link from "next/link";
import styles from "./header.module.scss";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MyHeader() {
  const {  logout } = useAuth();
  const [user, setUser] = useState(null);
  const router = useRouter();

//   const logout = () => {
//     // setUser(null);
//     localStorage.removeItem('token');
//     localStorage.removeItem('token');
// };
useEffect(() => {
  setUser(localStorage.getItem('userInfo'))
  console.log('user localStorage.getItem',JSON.stringify(localStorage.getItem('userInfo')) )
  console.log('user localStorage.getItem',(localStorage.getItem('token')) )
}, [user])
  const handleLogout = () => {
    logout();
    router.push('/login');
  };
  console.log('user', user)
  return (
    <div className={styles.root}>
      <img src="assets/homeIcon.png" width={90} height={50} style={{ cursor: 'pointer' }} />
      <ul className={styles._ul}>
        <li className={styles.listItem}><Link className={styles.active} href="/">Home</Link></li>
        <li className={styles.listItem}><Link href="/sell-property">Sell Your Property</Link></li>
        <li className={styles.listItem}><Link href="contact">Contact</Link></li>
        <li className={styles.listItem}><Link href="about">About</Link></li>
      </ul>
      {user ? (
        <>
          <li>Welcome, {user.firstName}</li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <a href="/login">Login</a>
        </li>
      )}
      {/* <button variant="primary" onClick={() => handleLogOut()}>
        LogOut
      </button> */}
    </div>
  );
}