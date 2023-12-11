import * as React from 'react';
import { CardHeader, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const GCardHeader = (props) => {
    return (
        <CardHeader
            title={
                <div className={'d-flex align-center'} >
                    {props.title}
                    <IconButton aria-label="add" className={'btn-primary'} id={props.addId ?? 'addIcon'}>
                        <AddTwoToneIcon fontSize="medium" className={'white'}
                        onClick={() => props.addClick()}
                        />
                    </IconButton>
                </div>
            }
            action={props.action ? (
                <IconButton aria-label="settings" id={props.actionId ?? 'actionIcon'}>
                    <MoreHorizIcon fontSize="medium" className={'white'}/>
                </IconButton>
            ) : null
            }
        />
    );
};

export default GCardHeader;
