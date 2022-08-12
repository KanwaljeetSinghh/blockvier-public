import styles from './css/modal.module.css';
export default function ModalBig(props){
    return (
        <div className={`${styles["modal-container"]}`}>
            <div className={`${styles[props.modal]} `}>
                {props.children}
            </div>
        </div>
    );
}