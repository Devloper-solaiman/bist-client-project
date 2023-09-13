import { Helmet } from "react-helmet";
import Cover from "../../../Shared/Cover/Cover";
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';


const Order = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>

            
        </div>
    );
};

export default Order;