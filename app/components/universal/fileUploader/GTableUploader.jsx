import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

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



export default function InputFileUpload(props) {
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

    return (
        <div>
            <VisuallyHiddenInput
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                id={props.fileId ?? 'hiddenInput'}
            />
            <UploadIcon onClick={handleClick} fontSize="medium"
                        id={props.uploaderId ?? 'uploadIcon'}
            sx={{
                cursor:'pointer'
            }}
            />
        </div>
    );
}
