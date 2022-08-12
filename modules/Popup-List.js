import styles from './css/popup.module.css';
import PopupListItem from './Popup-List-Item';
import Link from 'next/link';
function Popup(props){
    if(props.type==0){
        return(
            <ul className={`bg-white rounded-20 p-absolute list-style-none border ${styles["popup-card"]}`}>
                <li>
                    <PopupListItem value="Motors"></PopupListItem>
                </li>
                <li>
                    <PopupListItem value="Watches"></PopupListItem>
                </li>
                <li>
                    <PopupListItem value="Collectible Cards"></PopupListItem>
                </li>
                <li>
                    <PopupListItem value="Fashion"></PopupListItem>
                </li>
                <li>
                    <PopupListItem value="Gaming"></PopupListItem>
                </li>
                <li>
                    <PopupListItem value="Art"></PopupListItem>
                </li>
                <li>
                    <PopupListItem value="Music"></PopupListItem>
                </li>
                <li>
                    <PopupListItem value="Real Estate"></PopupListItem>
                </li>
            </ul>
        )
    }
    if(props.type==2){
        return(
            <ul className={`bg-white rounded-20 p-absolute list-style-none border ${styles["popup-card-2"]}`}>
                <li>
                    <PopupListItem value="Profile"></PopupListItem>
                </li>
                <Link href="/settings">
                    <a><li>
                        <PopupListItem value="Settings"></PopupListItem>
                    </li></a>
                </Link>
                <li>
                    <PopupListItem value="Favorites"></PopupListItem>
                </li>
                <li className='border-bottom'>
                    <PopupListItem value="Orders"></PopupListItem>
                </li>
                <li >
                    <PopupListItem value="Dark Mode"></PopupListItem>
                </li>
            </ul>
        )
    }
}
export default Popup;