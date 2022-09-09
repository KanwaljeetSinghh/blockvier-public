import BrandLogo from "./Logo";
import SearchBar from "./Search-bar";
import HeaderMenu from "./Header-Menu";
import BannerButton from "./Banner-Button";
import SearchModal from "./Search-Modal";
import {useEffect, useState} from 'react';
import Link from 'next/link'
function Header(){
    const [search,setSearch] = useState(false);
    const [hasMount, setHasMount] = useState(false);
    const searchHandler = () =>{
        setSearch(prev => !prev);
    }
    
    useEffect(()=>{
        setHasMount(true)
    },[])

    
    if(!hasMount){
        return <></>
    }
    return (
        <header>
            <div className="d-flex d-wrap d-align-center container pt-3 pb-3">
                <BrandLogo></BrandLogo>
                <SearchBar classes="ml-5" inputClass="f-700" placeholder="Search for products and brands" handler={searchHandler}></SearchBar>
                <HeaderMenu></HeaderMenu>
                <Link href="/connect-wallet">
                    <a><BannerButton type="0" button="btn-small" value="Connect"></BannerButton></a>
                </Link>
                <BannerButton type="1" childs="true" button="btn-icon-only"></BannerButton>
            </div>
            {search && <SearchModal handler={searchHandler}></SearchModal>}
        </header>
        
    )
}

export default Header;