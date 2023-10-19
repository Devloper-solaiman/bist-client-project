import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendarAlt, FaHome, FaShoppingCart, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart()
    // const admin = true;
    const [isAdmin] = useAdmin()
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-black">
                        {/* Sidebar content here */}


                        {
                            isAdmin ? <div>
                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add an items</NavLink></li>
                                <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaBook></FaBook> Bookins</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All users</NavLink></li>
                            </div>
                                :
                                <div>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                        </NavLink>
                                    </li>
                                </div>
                        }
                        <div className="divider bg-orange-300 h-0.5 "></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/menu"> Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad">Order Food</NavLink></li>

                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoard;