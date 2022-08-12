

function Input(props){
    return (
        <div className={`d-flex d-flex-wrap ${props.classes? props.classes:''}`}>
            <label className={`col-12 ${props.labelclass}`}>{props.name}</label>
            <input className={`col-12 ${props.inputClass}`} type={props.type} placeholder={props.placeholder} value={props.value}></input>
        </div>
    );
}

export default Input;