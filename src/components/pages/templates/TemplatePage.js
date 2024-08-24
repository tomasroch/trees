import CssBaseline from "@mui/joy/CssBaseline";
import React from "react";
import NavBar from "../../navigation/NavBar";
import Header from "../../navigation/Header";
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import {
    AspectRatio,
    CardContent,
    CardOverflow,
    CssVarsProvider, Tab,
    TabList,
    TabPanel,
    Tabs
} from "@mui/joy";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ForestIcon from "@mui/icons-material/Forest";
import {exampleMap} from "../../../data/ExamplesMap";
import CustomTreeFlow from "./tree-lib/CustomTreeFlow";
import OrderingInputs from "./tree-lib/components/OrderingInputs";
import ApsAphTable from "./ApsAphTable";
import Question from "./Question";

export default function TemplatePage({page, subpage}) {
    const isSinglePage = page.subpages === null;
    const mainPage = isSinglePage ? page : subpage;
    const hasTabs = mainPage.tabs !== null;
    return (
        <CssVarsProvider>
            <CssBaseline/> {/*Důležitý - normalizace a resetování stylů v celé webové aplikaci. Napříč různými prohlížeči*/}
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
                                    {!isSinglePage ? (
                                        <Link
                                            underline="hover"
                                            color="neutral"
                                            fontSize={12}
                                            fontWeight={500}
                                            disabled={true}
                                        >
                                            {page.name}
                                        </Link>
                                    ) : (
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
                                <Typography level="h2" component="h1" sx={{mt: 1, mb: 2}}>
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
                                px: {xs: 2, md: 6},
                                py: {xs: 2, md: 3},
                            }}
                        >
                            <Card>          {/*multiple tabs page*/}
                                {hasTabs ? (
                                    <Tabs>
                                        <TabList sx={{mb:1}}>
                                            {mainPage.tabs.map(tab => (
                                                <Tab key={tab.name} sx={{flexGrow: 1}}>
                                                    <Typography level="title-sm">{tab.name}</Typography>
                                                </Tab>
                                            ))}
                                        </TabList> {/*MAP INDEX -> iteration number*/}
                                        {mainPage.tabs.map((tab, index) => (
                                            <TabPanel key={tab.name} value={index} sx={{p: 0}}>
                                                <Box sx={{mb: 1}}>
                                                    {tab.textData.map((textData, index) => (
                                                        <div key={index}>
                                                            {textData.smallTitle !== null &&
                                                                <Typography
                                                                    level="title-lg">{textData.smallTitle}</Typography>
                                                            }
                                                            {/*it is safe to use dangerouslySetInnerHTML because data are static!*/}
                                                            <Typography level="body-md">
                                                                <span
                                                                    dangerouslySetInnerHTML={{__html: textData.text}}/>
                                                            </Typography>
                                                            {/*přidání doplňku ke cvičením prohledávání do šířky/hloubky*/}
                                                            {textData.exercise !== undefined && textData.exercise.dfs !== undefined && <OrderingInputs dfs={textData.exercise.dfs} data={exampleMap[textData.exercise.name].exampleNodes[0].data} /> }
                                                            {/*přidání cvičení*/}
                                                            {textData.exercise !== undefined && <CustomTreeFlow nodes={exampleMap[textData.exercise.name].exampleNodes} edges={exampleMap[textData.exercise.name].exampleEdges} />}
                                                            {/*přidání aps/aph cvičení*/}
                                                            {textData.apsaph !== undefined && <ApsAphTable nodes={exampleMap[textData.apsaph.name].exampleNodes} edges={exampleMap[textData.apsaph.name].exampleEdges} fifo={textData.apsaph.fifo} />}
                                                            {/*přidání otázek*/}
                                                            {textData.question !== undefined && <Question result={textData.question.answer} placeHolder={textData.question.placeHolder} label={textData.question.name} />}

                                                            {textData.images !== null && textData.images.map(image => (
                                                                // <Box display="flex" justifyContent="center" alignItems="center">
                                                                //     minWidth:{
                                                                //     xs: '100%',   // Minimální šířka na velmi malých zařízeních (mobilní telefony)
                                                                //     sm: '100%',   // Minimální šířka na malých zařízeních (tablety)
                                                                //     md: '100%',   // Minimální šířka na středních zařízeních (malé desktopy)
                                                                //     lg: '50%',   // Minimální šířka na velkých zařízeních (velké desktopy)
                                                                //     xl: '50%'    // Minimální šířka na extra velkých zařízeních (velké monitory)
                                                                // } ,
                                                                <Card key={image.imagePath} variant="outlined"
                                                                      sx={{maxWidth: 1000, mb: 1}}>
                                                                    <CardOverflow>
                                                                        <AspectRatio objectFit="contain"
                                                                                     ratio={image.aspectRatio}>
                                                                            <img
                                                                                src={image.imagePath}
                                                                                loading="lazy"
                                                                                alt={image.imageDescription}
                                                                            />
                                                                        </AspectRatio>
                                                                    </CardOverflow>
                                                                    <CardContent>
                                                                        <Typography
                                                                            level="body-sm">{image.imageDescription}</Typography>
                                                                    </CardContent>
                                                                </Card>
                                                                // </Box>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </Box>
                                            </TabPanel>
                                        ))}
                                    </Tabs>
                                ) : ( /*Only one tab - singlepage*/
                                    <Box sx={{mb: 1}}>
                                        {mainPage.textData.map((textData, index) => (
                                            <div key={mainPage.path + index}>
                                                {textData.smallTitle !== null &&
                                                    <Typography level="title-lg">{textData.smallTitle}</Typography>
                                                }
                                                <Typography level="body-md">
                                                    <span dangerouslySetInnerHTML={{__html: textData.text}}/>
                                                </Typography>
                                                {textData.images !== null && textData.images.map(image => (
                                                    <Card key={mainPage.path} variant="outlined"
                                                          sx={{maxWidth: 1000, mb: 1}}>
                                                        <CardOverflow>
                                                            <AspectRatio objectFit="contain" ratio={image.aspectRatio}>
                                                                <img
                                                                    src={image.imagePath}
                                                                    loading="lazy"
                                                                    alt={image.imageDescription}
                                                                />
                                                            </AspectRatio>
                                                        </CardOverflow>
                                                        <CardContent>
                                                            <Typography
                                                                level="body-sm">{image.imageDescription}</Typography>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        ))}
                                    </Box>
                                )}

                                {/* For both multipleTabPage and SinglePage*/}
                                {/*TODO Dodělat Next and previous Page odkazy!
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
                                </Box>*/}
                            </Card>
                        </Stack>
                    </Box>

                </Box>
            </Box>
        </CssVarsProvider>
    )
}