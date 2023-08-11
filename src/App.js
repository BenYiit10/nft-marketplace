import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
//import Awd from './pages/Awd';
import Layout from './components/Layout';

function App() {

    return (
    <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}  /> 
                <Route path="/explore" element={<Explore/>}  /> 
            </Routes>
        </Layout>
    </>
        
    );
}

export default App;
