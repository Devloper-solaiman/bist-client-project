import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            { title && <Cover img={img} bg='bg-black opacity-60 text-white ' title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn block m-auto btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;