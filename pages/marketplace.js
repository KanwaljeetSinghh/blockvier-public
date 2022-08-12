import { Fragment } from "react";
import SectionHeading from "../modules/Section-Heading";
import CollectableCard from "../modules/Collectable-Card";
import styles from '../modules/css/marketplace.module.css';
import DropDown from "../modules/Drop-Down";
import Accordian from "../modules/Accordian";
import Input from "../modules/Input";
export default function MarketPlace() {

    return(
        <div className={`container pt-5 d-flex d-flex-wrap`}>
            <div className="col-3 pr-2">
                <SectionHeading title="Marketplace" highlighted-title=""></SectionHeading>
                <Accordian title="Categories" >
                     <DropDown title="Category" placeholder="Collectables" labelClass="secondary-font mb-1 text-grey mt-3"></DropDown>
                     <DropDown title="Sub-Category" placeholder="NBA" labelClass="secondary-font mb-1 text-grey mt-3"></DropDown>
                </Accordian>
                <Accordian title="Price" classes="mt-3">
                    <DropDown title="Type" placeholder="USD" labelClass="secondary-font mb-1 text-grey mt-3"></DropDown>
                    <div className={`col-12 mt-3 d-flex d-flex-wrap d-justify-space-between ${styles["marketplace__inputs"]}`}>
                        <Input classes={`${styles["marketplace__inputs-filter"]}`} name="Minimum" labelclass="mb-1 font-16 l-22 d-inline secondary-font text-grey f-700" inputClass="border rounded font-19 l-26 text-secondary" type="number" placeholder="0" value="5000"></Input>
                        <Input classes={`${styles["marketplace__inputs-filter"]}`} name="Maximum" labelclass="mb-1 font-16 l-22 d-inline secondary-font text-grey f-700" inputClass="border rounded font-19 l-26 text-secondary" type="number" placeholder="0" value="180000"></Input>
                    </div>
                </Accordian>
                <Accordian title="Year" classes="mt-3"></Accordian>
                <Accordian title="Graded" classes="mt-3"></Accordian>
                <Accordian title="product Location" classes="mt-3"></Accordian>
            </div>
            <div className={`d-flex d-justify-space-between d-flex-wrap col-9 pl-5`}>
                <SectionHeading title="Displaying" highlighted-title=" 435 items" classes="font-19 l-28 secondary-font text-light-grey f-600 mt-1"></SectionHeading>
                <div className="d-flex d-align-center">
                    {/* <DropDown title="Sort By:" placeholder="Relevance" labelClass="secondary-font m-0 mr-1"></DropDown> */}
                </div>

                <div className={`col-12 d-grid ${styles["marketplace__collectables"]}`}>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>   
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    <CollectableCard src="/images/Collectable.png"></CollectableCard>
                </div>
            </div>
        </div>
    )
}