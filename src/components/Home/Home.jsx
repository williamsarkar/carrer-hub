import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FerutedJobs from "../FerutedJobs/FerutedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FerutedJobs></FerutedJobs>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;