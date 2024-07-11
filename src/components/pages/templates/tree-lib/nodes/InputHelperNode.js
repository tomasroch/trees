import React from 'react';
import {FormControl, FormLabel, Input} from "@mui/joy";

export default function InputInfoNode({ data, id })  {
    return (
        <>
            <FormControl sx={{mt: 2, mb: 1}}>
                <FormLabel>{data.label}</FormLabel>
                <Input sx={{width: data.width}}
                       size="sm" placeholder={data.placeHolder} color="primary"
                />
            </FormControl>
        </>
    );
}