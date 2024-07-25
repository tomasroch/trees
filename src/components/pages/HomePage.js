import CssBaseline from "@mui/joy/CssBaseline";
import React from "react";
import {Box, CssVarsProvider, Divider, Typography} from "@mui/joy";
import NavBar from "../navigation/NavBar";
import Header from "../navigation/Header";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Link from "@mui/joy/Link";
import ForestIcon from "@mui/icons-material/Forest";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";

export default function HomePage() {
    return (
        <CssVarsProvider>
            <CssBaseline/>
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        backgroundImage: "url('../images/background.jpg')",*/}
            {/*        backgroundRepeat: "repeat",*/}
            {/*    }}*/}
            {/*>*/}
            <Box sx={{display: 'flex', minHeight: '100dvh'}}>
                <NavBar/>
                <Header/>
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        pt: {xs: 'calc(12px + var(--Header-height))', md: 3},
                        pb: {xs: 2, sm: 2, md: 3},
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1,
                        overflow: 'auto',
                    }}
                >

                    <Box sx={{flex: 1, width: '100%'}}>
                        <Box
                            sx={{
                                position: 'sticky',
                                top: {sm: -100, md: -110},
                                bgcolor: 'background.body',
                                zIndex: 9995,
                            }}
                        >
                            <Box sx={{px: {xs: 2, md: 6}}}>
                                <Breadcrumbs
                                    size="sm"
                                    aria-label="breadcrumbs"
                                    separator={<ChevronRightRoundedIcon fontSize="sm"/>}
                                    sx={{pl: 0}}
                                >
                                    <Link
                                        underline="none"
                                        color="neutral"
                                        href="/"
                                        aria-label="Home"
                                    >
                                        <ForestIcon/>
                                    </Link>
                                    <Typography color="primary" fontWeight={500} fontSize={12}>
                                        Stromy
                                    </Typography>

                                </Breadcrumbs>
                                <Typography level="h2" component="h1" sx={{mt: 1, mb: 2}}>
                                    Úvod
                                </Typography>
                            </Box>

                        </Box>
                        <Stack
                            spacing={4}
                            sx={{
                                display: 'flex',
                                maxWidth: '1000px',
                                mx: 'auto',
                                px: {xs: 2, md: 6},
                                py: {xs: 2, md: 3},
                            }}
                        >
                            <Card>
                                <Box sx={{mb: 1}}>
                                    {/*<Typography level="title-lg">Small Title</Typography>*/}

                                    <Typography level="body-md" sx={{mb: 2}}>
                                        Tato webová aplikace slouží na podporu výuky předmětů diskrétní matematika a
                                        teorie grafů. Zaměřuje se primárně na stromy.
                                    </Typography>
                                    <Typography level="body-md" sx={{mb: 2}}>
                                        Každá stránka nabízí teorii k danému tématu a vybraná témata obsahují interaktivní příklady na procvičování.
                                    </Typography>
                                    <Typography level="body-md" sx={{mb: 2}}>
                                        Webovou aplikaci lze přepnout do tmavého/světlého režimu kliknutím na ikonu slunce/měsíce v navigačním menu.
                                    </Typography>
                                    <Divider/>
                                    <Typography level="body-md" sx={{mt: 1}}>
                                        Univerzita Hradec Králové
                                    </Typography>
                                    <Typography level="body-md">
                                        Fakulta informatiky a managementu
                                    </Typography>
                                    <Typography level="body-md">
                                        Typ práce: Diplomová
                                    </Typography>
                                    <Typography level="body-md">
                                        Vedoucí práce: Ševčíková Andrea, RNDr. Ph.D.
                                    </Typography>
                                    <Typography level="body-md">
                                        Autor: Tomáš Roch
                                    </Typography>
                                </Box>
                            </Card>
                        </Stack>
                    </Box>
                </Box>
                {/*</Box>*/}
            </Box>
        </CssVarsProvider>
    )
}