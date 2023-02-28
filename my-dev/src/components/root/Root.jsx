import SideBar from '../sidebar/SideBar'
import styles from './Root.module.css'
import {Outlet} from "react-router-dom";

const Root = () => {

    return (
        <div className={styles.root}>
            <SideBar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Root;