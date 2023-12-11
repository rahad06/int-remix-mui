import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Card, CardActionArea, CardContent, useTheme,   Avatar,
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const CardAddAction = styled(Card)(
    ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`
);
const AvatarAddWrapper = styled(Avatar)(
    ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

export default function GCardUploader() {
    const theme=useTheme()
    const fileInputRef = React.useRef(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        // console.log(event.target.files);
    };
    const handleDragOver = (event) => {
        event.preventDefault();
        // todo: Highlight the drop area
    };
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        //todo: Handle dropped files here
        console.log(droppedFiles);
    };
    return (
        <div
        >
            <VisuallyHiddenInput
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
            <CardAddAction onClick={handleClick}>
                <CardActionArea sx={{px: 1}} onDragOver={handleDragOver} onDrop={handleDrop}>
                    <CardContent>
                        <AvatarAddWrapper>
                            <AddTwoToneIcon fontSize="large"/>
                        </AvatarAddWrapper>
                    </CardContent>
                </CardActionArea>
            </CardAddAction>
        </div>
    );
}
