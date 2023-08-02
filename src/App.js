import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
//import Awd from './pages/Awd';
import Layout from './components/Layout';

function App() {
    return (
    <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                {/* <Route path="/awd" element={<Awd/>} />  */}
            </Routes>
        </Layout>
    </>
        
    );
}

export default App;
