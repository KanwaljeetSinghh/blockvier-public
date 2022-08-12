import styles from './css/view-tabs.module.css';

function ViewTabs(){
    return(
        <ul className={`m-0 p-0 d-flex ${styles["tabs-container"]}`}>
            <li>Cardview</li>
            <li>Tableview</li>
        </ul>
    )
}

export default ViewTabs;