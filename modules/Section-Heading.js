function SectionHeading(props){
    return(
        <h2 className={`f-400 mb-4 d-inline-flex ${props.classes}`}>{props.title} <span className="f-700 text-gradient">&nbsp; {props["highlighted-title"]}</span></h2>
    )
}

export default SectionHeading;