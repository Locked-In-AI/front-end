import { useState, useEffect } from 'react';
import './App.css';
import PageRoutes from "./routes/PageRoutes";
import Header from "./components/global/Header";
import SidebarComponent from "./components/global/Sidebar";
import {Grid} from "@mui/material";
import {isAuthenticated, refreshToken} from "./utils/auth";

function App() {
    const [isAuth, setIsAuth] = useState(isAuthenticated());

    useEffect(() => {
        if (!isAuth) {
            refreshToken()
                .then(r => {
                    console.log(r);
                    setIsAuth(isAuthenticated());
                })
                .catch(e => console.log(e));
        }
    }, [isAuth]);

    return (
        <div className="App">
            <Header/>
            <Grid container spacing={2}>
                    <Grid item>
                        {isAuth && (<SidebarComponent/>)}
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