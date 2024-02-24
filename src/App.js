import './App.css';
import PageRoutes from "./routes/PageRoutes";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="content">
                <PageRoutes/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
