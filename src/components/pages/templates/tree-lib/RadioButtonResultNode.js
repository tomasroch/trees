import React from 'react';
import {Box, List, ListDivider, ListItem, RadioGroup, Typography} from "@mui/joy";
import RadioButtonResult from "./RadioButtonResult";

export default function InputResultKruskalNode({data}) {
    return (
        <Box sx={{ minWidth: 240 }}>
            <Box
                sx={{
                    mb: 0.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography
                    id="example-payment-channel-label"
                    level="title-md"
                    textColor={'text.secondary'}
                    fontWeight="xl"
                >
                    {data.text}
                </Typography>
            </Box>
            <RadioGroup overlay color="primary">
                <List
                    component="div"
                    variant="outlined"
                    orientation="horizontal"
                    color="primary"
                    sx={{
                        borderRadius: 'sm',
                        boxShadow: 'sm',
                    }}
                >
                    {data.radio.map((value, index) => (
                        <React.Fragment key={value + index}>
                            {index !== 0 && <ListDivider color="primary" />}
                            <ListItem>
                                <RadioButtonResult data={value} />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </RadioGroup>
        </Box>
    );
}