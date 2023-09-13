import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Cover from "../../../Shared/Cover/Cover";
import homCoverImg from '../../../assets/home/chef-service.jpg'
import CallCenter from "../CallCenter/CallCenter";

const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Cover title='Bistro Boss' bg='bg-white text-black' img={homCoverImg}></Cover>
           <PopularMenu></PopularMenu>
           <CallCenter></CallCenter>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;