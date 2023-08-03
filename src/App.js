import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
//import Awd from './pages/Awd';
import Layout from './components/Layout';
import Deneme from './pages/Deneme';

function App() {

    return (
    <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}  /> 
                <Route path="/deneme" element={<Deneme/>} /> 
            </Routes>
        </Layout>
    </>
        
    );
}

export default App;
