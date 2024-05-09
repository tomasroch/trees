import CssBaseline from "@mui/joy/CssBaseline";
import React from "react";
import NavBar from "../../navigation/NavBar";
import Header from "../../navigation/Header";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import {CssVarsProvider, iconButtonClasses} from "@mui/joy";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ForestIcon from "@mui/icons-material/Forest";


export default function Tree({page, subpage}) {
    const isSinglePage = page.subpages === null;
    const mainPage = isSinglePage ? page : subpage;
    return (
        <CssVarsProvider>
            <CssBaseline/>
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

                    <Box sx={{ flex: 1, width: '100%' }}>
                        <Box
                            sx={{
                                position: 'sticky',
                                top: { sm: -100, md: -110 },
                                bgcolor: 'background.body',
                                zIndex: 9995,
                            }}
                        >
                            <Box sx={{ px: { xs: 2, md: 6 } }}>
                                <Breadcrumbs
                                    size="sm"
                                    aria-label="breadcrumbs"
                                    separator={<ChevronRightRoundedIcon fontSize="sm" />}
                                    sx={{ pl: 0 }}
                                >
                                    <Link
                                        underline="none"
                                        color="neutral"
                                        href="/"
                                        aria-label="Home"
                                    >
                                        <ForestIcon />
                                    </Link>
                                    {!isSinglePage ? (
                                        <Link
                                            underline="hover"
                                            color="neutral"
                                            href="#some-link"
                                            fontSize={12}
                                            fontWeight={500}
                                            disabled={true}
                                        >
                                            {page.name}
                                        </Link>
                                        ):(
                                        <Typography color="primary" fontWeight={500} fontSize={12}>
                                            {page.name}
                                        </Typography>
                                        )
                                    }

                                    {!isSinglePage &&
                                        <Typography color="primary" fontWeight={500} fontSize={12}>
                                            {subpage.name}
                                        </Typography>
                                    }

                                </Breadcrumbs>
                                <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
                                    {mainPage.name}
                                </Typography>
                            </Box>

                        </Box>
                        <Stack
                            spacing={4}
                            sx={{
                                display: 'flex',
                                maxWidth: '1000px',
                                mx: 'auto',
                                px: { xs: 2, md: 6 },
                                py: { xs: 2, md: 3 },
                            }}
                        >
                            <Card>
                                <Box sx={{ mb: 1 }}>
                                    {mainPage.textData.map(textData => (
                                        <div key={mainPage.path}>
                                            {textData.smallTitle !== null &&
                                                <Typography level="title-lg">{textData.smallTitle}</Typography>
                                            }
                                        <Typography level="body-md">
                                            {textData.text}
                                        </Typography>
                                        </div>
                                    ))}
                                </Box>

                                <Box
                                    className="Pagination-laptopUp"
                                    sx={{
                                        pt: 2,
                                        gap: 1,
                                        [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
                                        display: {
                                            xs: 'flex',
                                            md: 'flex',
                                        },
                                    }}
                                >
                                    <Button
                                        size="sm"
                                        variant="outlined"
                                        startDecorator={<KeyboardArrowLeftIcon />}
                                    >
                                        Previous
                                    </Button>
                                    <Box sx={{ flex: 1 }} />
                                    <Button
                                        size="sm"
                                        variant="outlined"
                                        endDecorator={<KeyboardArrowRightIcon />}
                                    >
                                        Next
                                    </Button>
                                </Box>
                            </Card>
                        </Stack>
                    </Box>

                </Box>
            </Box>
        </CssVarsProvider>
    )
}