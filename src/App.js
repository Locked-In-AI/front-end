import './App.css';
import PageRoutes from "./routes/PageRoutes";
import Header from "./components/global/Header";
import SidebarComponent from "./components/global/Sidebar";
import { Grid } from "@mui/material";

function App() {
    return (
        <div className="App">
            <Header/>
            <Grid container spacing={2}>
                <Grid item>
                    <SidebarComponent/>
                </Grid>
                <Grid item>
                    <main className="content">
                        <PageRoutes/>
                    </main>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;