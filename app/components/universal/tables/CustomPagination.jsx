import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function CustomPagination(props) {
    return (
        <Box p={2} variant={'div'} component={'div'} sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Stack spacing={2}>
                <Pagination count={props.count} variant="outlined" shape="rounded" />
            </Stack>
        </Box>
    );
}

export default CustomPagination;
