import { Link } from "react-router-dom";
const CategoriesComponent = ({categories}) => {

    return (
        <div className="section-category" id="section-category">
            <div className="uk-container uk-container-large">
                <div className="uk-position-relative" tabIndex="-1" data-uk-slider>
                    <ul className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-5@xl">
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
                    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-top"></ul>
                </div>
            </div>
        </div>
    )
}

export default CategoriesComponent;
