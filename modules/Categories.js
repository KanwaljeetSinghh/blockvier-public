import styles from './css/category-card.module.css';
import CategoryCard from './Category-card';
import SectionHeading from './Section-Heading';
function Categories(props){
    return(
        <div className='section'>
            <div className='container'>
                <SectionHeading title="Most Popular" highlighted-title="Categories"></SectionHeading>
                <div className={`d-grid ${styles["cards"]}`}>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                </div>
            </div>
       </div>
    );
}

export default Categories;