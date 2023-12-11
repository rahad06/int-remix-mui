import React from 'react';
import {Button, Card, CardContent, Grid} from "@mui/material";

function GPageButtons(props) {
    return (
        <Card>
            <CardContent>
                {props.btns?.map(b =>
                    !b.clickable ? (
                        <Button
                            rel="noopener noreferrer"
                            href={b.url}
                            sx={{margin: 1}}
                            variant="contained"
                            color={b.color}
                        >
                            {b.name}
                        </Button>
                    ) : (
                        <Button
                            sx={{margin: 1}}
                            variant="contained"
                            onClick={() => b.btnFn()}
                            color={b.color}
                        >
                            {b.name}
                        </Button>
                    ))}
            </CardContent>
        </Card>
    );
}

export default GPageButtons;