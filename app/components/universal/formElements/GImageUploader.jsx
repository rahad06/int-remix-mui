import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/AddAPhotoOutlined';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    width: '200px',
    borderRadius: '12px%',
    border: '2px dashed #999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover, &.Mui-focusVisible': {
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
    },
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function GImageUploader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ImageButton focusRipple>
                <AddIcon fontSize="large" color="primary" />
                <ImageMarked className="MuiImageMarked-root" />
            </ImageButton>
        </Box>
    );
}
