import MenuItem from "./Menu-Item";
import Link from "next/link";
function HeaderMenu(props){
    return(
        <ul className="d-flex d-justify-end d-flex-100 m-0 p-0 list-style-none ">
            <Link href="/"><a><MenuItem childs="false" value="Home"></MenuItem></a></Link>
            <Link href="/marketplace"><a><MenuItem childs="true" value="Marketplace"></MenuItem></a></Link>
            <Link href="/faqs"><a><MenuItem childs="false" value="FAQs"></MenuItem></a></Link>
            <Link href=""><a><MenuItem childs="false" value="Create"></MenuItem></a></Link>
        </ul>
    )
}

export default HeaderMenu;