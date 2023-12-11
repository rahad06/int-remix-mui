import React from 'react';
import {alpha, Box, Button, List, ListItem, ListSubheader, styled} from "@mui/material";
import NavListItem from "./NavListItem";
const SubMenuWrapper = styled(Box)(
    ({ theme }) => `
    .MuiList-root {
direction: rtl;
      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.black[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.black[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-left: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.black[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.06)};
            color: ${theme.colors.alpha.black[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.black[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.black[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
        'transform',
        'opacity'
    ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function ListBox(props) {
    const {subname, subList, closeSidebar, noSub, item} = props
    if(noSub) {
        return (
            <List component="div" className={'menu-wrapper-box'}>
                <SubMenuWrapper>
                    <List component="div">
                        <NavListItem
                        l={item}
                        closeSidebar={closeSidebar}
                        className={'nowrap'}
                        />
                    </List>
                </SubMenuWrapper>
            </List>

        )
    }
    return (

        <List
            className={'menu-wrapper-box'}
            component="div"
            subheader={
                <ListSubheader component="div" disableSticky>
                    {subname}
                </ListSubheader>
            }
        >
            <SubMenuWrapper>
                <List component="div">
                    {subList.map(l => (
                        <React.Fragment key={`nav-sublink-${l.name}-${l.id}`}>
                   <NavListItem l={l}
                   closeSidebar={closeSidebar}
                                className={'nowrap'}

                   />
                        </React.Fragment>
                    ))}
                </List>
            </SubMenuWrapper>
        </List>
    );
}

export default ListBox;
