import './App.css';
import PageRoutes from "./routes/PageRoutes";
import Header from "./components/global/Header";
import SidebarComponent from "./components/global/Sidebar";
import {Grid} from "@mui/material";
import {isAuthenticated} from "./utils/auth";

function App() {
    return (
        <div className="App">
            {isAuthenticated() && <Header/>}
            <Grid container spacing={2}>
                {isAuthenticated() && (
                    <Grid item>
                        <SidebarComponent/>
                    </Grid>
                )}
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