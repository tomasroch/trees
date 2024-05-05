import CssBaseline from "@mui/joy/CssBaseline";
import React from "react";
import {Box, CssVarsProvider, Typography} from "@mui/joy";
import NavBar from "../navigation/NavBar";
import Header from "../navigation/Header";

export default function HomePage() {
    return (
        <CssVarsProvider>
            <CssBaseline/>
            <Box sx={{display: 'flex', minHeight: '100dvh'}}>
                <Header/>
                <NavBar/>
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: {xs: 2, md: 6},
                        pt: {
                            xs: 'calc(12px + var(--Header-height))',
                            sm: 'calc(12px + var(--Header-height))',
                            md: 3,
                        },
                        pb: {xs: 2, sm: 2, md: 3},
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1,
                    }}
                >
                    <Typography level="h2" component="h1">
                        HomePage
                    </Typography>
                </Box>
            </Box>
        </CssVarsProvider>
    )
}