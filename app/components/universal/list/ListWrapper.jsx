import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ListWrapper(props) {
    let data = props.data;
    
    return (
        <List sx={{ width: '100%'}} className={'main-list-el'}>
            {data.map(d => (
                <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    className={'list-inner-text'}
                    primary={d.name}
                    secondary={
                        <React.Fragment>
                            {`${d.val}`}
                        </React.Fragment>
                    }
                />
            </ListItem>
            {/*<Divider variant="inset" component="li" className={'list-devider'}/>*/}
                </>
    ))}
        </List>
    );
}