import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Auction from './pages/Auction';

import Layout from './components/Layout';
import { useDispatch } from 'react-redux';
import { setSelectBorder } from './redux/reducer';
import Activity from './pages/Activity';
import Blog from './pages/Blog';
import BlogDetailSection from './components/blog/BlogDetail/BlogDetailSection';
import NotFound from './pages/NotFound';
import Faq from './pages/Faq';



function App() {

    const dispatch = useDispatch()
    const location = useLocation();

    if (location.pathname === "/") {
        dispatch(setSelectBorder(true));
    } else {
        dispatch(setSelectBorder(false));
    }

    return (
    <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}  /> 
                <Route path="/explore" element={<Explore/>}  /> 
                <Route path="/auction" element={<Auction/>}  /> 
                <Route path="/activity" element={<Activity/>}  /> 
                <Route path="/blog" element={<Blog/>}  /> 
                <Route path="/blogdetail" element={<BlogDetailSection/>}  /> 
                <Route path="/faq" element={<Faq />}  /> 
                <Route path="*" element={<NotFound />}  /> 
            </Routes>
        </Layout>
    </>
        
    );
}

export default App;
