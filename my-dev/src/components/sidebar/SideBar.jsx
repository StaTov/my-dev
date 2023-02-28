import styles from './SideBar.module.css'
import Nav from "../navbar/Nav";
import FooterSideBar from "./sidebarfooter/FooterSideBar";

const SideBar = () => {
    return (
        <sidebar className={styles.nav}>
            <Nav/>
            <FooterSideBar/>
        </sidebar>

    )
}

export default SideBar;