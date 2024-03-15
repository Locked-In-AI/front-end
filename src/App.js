import './App.css';
import PageRoutes from "./routes/PageRoutes";
import Header from "./components/global/Header";
import SidebarComponent from "./components/global/Sidebar";
import {Grid} from "@mui/material";
import {isAuthenticated, refreshToken} from "./utils/auth";
import {useEffect} from "react";

function App() {
     useEffect(() => {
        if (!isAuthenticated()) {
            refreshToken()
                .then(r => console.log(r))
                .catch(e => console.log(e));
        }
    }, []);

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