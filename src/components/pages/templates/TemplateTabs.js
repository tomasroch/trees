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
import {CssVarsProvider, iconButtonClasses, Tab, TabList, TabPanel, Tabs} from "@mui/joy";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ForestIcon from "@mui/icons-material/Forest";


export default function TemplateTabs() {
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
                                        href="/public"
                                        aria-label="Home"
                                    >
                                        <ForestIcon/>
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="neutral"
                                        href="#some-link"
                                        fontSize={12}
                                        fontWeight={500}
                                        disabled={true}
                                    >
                                        Základní pojmy
                                    </Link>
                                    <Typography color="primary" fontWeight={500} fontSize={12}>
                                        Strom
                                    </Typography>
                                </Breadcrumbs>
                                <Typography level="h2" component="h1" sx={{mt: 1, mb: 2}}>
                                    Strom
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
                                <Tabs>
                                    <TabList>
                                        <Tab sx={{flexGrow: 1}}>
                                            <Typography level="title-sm">Details</Typography>
                                        </Tab>
                                        <Tab sx={{flexGrow: 1}}>
                                            <Typography level="title-sm">Activity</Typography>
                                        </Tab>
                                    </TabList>
                                    <TabPanel value={0} sx={{p: 0}}>
                                        <Box sx={{mb: 1}}>
                                            {/*<Typography level="title-lg">Personal info</Typography>*/}
                                            <Typography level="body-md">
                                                Customize how your profile information will apper to the networks.
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat
                                                volutpat. Proin in tellus sit amet nibh dignissim sagittis. Maecenas
                                                libero. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.
                                                Etiam egestas wisi a erat. Mauris metus. Mauris elementum mauris vitae
                                                tortor. Integer lacinia. Curabitur sagittis hendrerit ante. Integer
                                                pellentesque quam vel velit. Duis bibendum, lectus ut viverra rhoncus,
                                                dolor nunc faucibus libero, eget facilisis enim ipsum id lacus.

                                                Aenean placerat. Duis condimentum augue id magna semper rutrum. Duis
                                                bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget
                                                facilisis enim ipsum id lacus. Nunc dapibus tortor vel mi dapibus
                                                sollicitudin. Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur. Nulla est. Nullam feugiat,
                                                turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum
                                                odio risus sit amet ante. Sed vel lectus. Donec odio tempus molestie,
                                                porttitor ut, iaculis quis, sem. Vivamus luctus egestas leo. Integer
                                                tempor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id,
                                                felis. Nulla quis diam. Aenean id metus id velit ullamcorper pulvinar.
                                                Morbi scelerisque luctus velit.

                                                In enim a arcu imperdiet malesuada. Proin in tellus sit amet nibh
                                                dignissim sagittis. Cum sociis natoque penatibus et magnis dis
                                                parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Fusce
                                                aliquam vestibulum ipsum. Suspendisse sagittis ultrices augue. Nulla non
                                                lectus sed nisl molestie malesuada. Neque porro quisquam est, qui
                                                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                                                non numquam eius modi tempora incidunt ut labore et dolore magnam
                                                aliquam quaerat voluptatem. Cras elementum. Fusce tellus.

                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                                officia deserunt mollit anim id est laborum. Pellentesque ipsum. Class
                                                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                                inceptos hymenaeos. Nam quis nulla. Cum sociis natoque penatibus et
                                                magnis dis parturient montes, nascetur ridiculus mus. In convallis.
                                                Vestibulum fermentum tortor id mi. Quisque porta. Fusce nibh.
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames ac turpis egestas. Temporibus autem quibusdam et aut officiis
                                                debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                                                repudiandae sint et molestiae non recusandae. Mauris dolor felis,
                                                sagittis at, luctus sed, aliquam non, tellus. Aenean id metus id velit
                                                ullamcorper pulvinar.

                                                In convallis. Class aptent taciti sociosqu ad litora torquent per
                                                conubia nostra, per inceptos hymenaeos. Phasellus rhoncus. Integer
                                                malesuada. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu,
                                                orci. Maecenas libero. Nullam sit amet magna in magna gravida vehicula.
                                                Nullam dapibus fermentum ipsum. Aenean vel massa quis mauris vehicula
                                                lacinia. Nullam sit amet magna in magna gravida vehicula. Nullam justo
                                                enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Nunc
                                                auctor. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.
                                                Curabitur bibendum justo non orci. Integer vulputate sem a nibh rutrum
                                                consequat. Donec quis nibh at felis congue commodo. Proin in tellus sit
                                                amet nibh dignissim sagittis. Nemo enim ipsam voluptatem quia voluptas
                                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                                eos qui ratione voluptatem sequi nesciunt. Duis ante orci, molestie
                                                vitae vehicula venenatis, tincidunt ac pede. Curabitur sagittis
                                                hendrerit ante.
                                            </Typography>
                                        </Box>

                                        <Box
                                            className="Pagination-laptopUp"
                                            sx={{
                                                pt: 2,
                                                gap: 1,
                                                [`& .${iconButtonClasses.root}`]: {borderRadius: '50%'},
                                                display: {
                                                    xs: 'flex',
                                                    md: 'flex',
                                                },
                                            }}
                                        >
                                            <Button
                                                size="sm"
                                                variant="outlined"
                                                startDecorator={<KeyboardArrowLeftIcon/>}
                                            >
                                                Previous
                                            </Button>
                                            <Box sx={{flex: 1}}/>
                                            <Button
                                                size="sm"
                                                variant="outlined"
                                                endDecorator={<KeyboardArrowRightIcon/>}
                                            >
                                                Next
                                            </Button>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel
                                        value={1}
                                        sx={{display: 'flex', flexDirection: 'column', gap: 3}}
                                    >
                                        <Typography level="title-md">This week</Typography>

                                        <Box
                                            className="Pagination-laptopUp"
                                            sx={{
                                                pt: 2,
                                                gap: 1,
                                                [`& .${iconButtonClasses.root}`]: {borderRadius: '50%'},
                                                display: {
                                                    xs: 'flex',
                                                    md: 'flex',
                                                },
                                            }}
                                        >
                                            <Button
                                                size="sm"
                                                variant="outlined"
                                                startDecorator={<KeyboardArrowLeftIcon/>}
                                            >
                                                Previous
                                            </Button>
                                            <Box sx={{flex: 1}}/>
                                            <Button
                                                size="sm"
                                                variant="outlined"
                                                endDecorator={<KeyboardArrowRightIcon/>}
                                            >
                                                Next
                                            </Button>
                                        </Box>
                                    </TabPanel>
                                </Tabs>
                            </Card>
                        </Stack>
                    </Box>

                </Box>
            </Box>
        </CssVarsProvider>
    )
}