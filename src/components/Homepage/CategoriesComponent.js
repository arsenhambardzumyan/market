import { Link } from "react-router-dom";
const CategoriesComponent = ({categories}) => {

    return (
        <div className="section-category" id="section-category">
            <div className="uk-container uk-container-large">
                <div className="category_inner">
                    <ul className="category_list">
                        {categories.map((category , i) => (
                            <li key={i}>
                                <div className="category-item">
                                    <Link className="category-item__link" to={`category/${category.slug}`}>
                                        <div className="category-item__title">{category.name}</div>
                                        <div className="category-item__icon">  <img src={category.image} data-uk-svg alt="product" title="" /></div>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoriesComponent;
