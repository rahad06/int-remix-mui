
import {
  Box,
  styled,
} from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactsIcon from '@mui/icons-material/Contacts';
import {useTranslation} from "react-i18next";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ListBox from "./ListBox";
import GScroll from "../../universal/scroll/GScroll";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import useSidebarStore from "../../../stores/useSidebarStore";
const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.black[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);


function SidebarMenu() {
  const { closeSidebar } = useSidebarStore();
  const { t, ready } = useTranslation('common')
    
    if(!ready) return <></>
  return (
    <GScroll>
      <MenuWrapper>
          {/*<ListBox*/}
          {/*noSub*/}
          {/*item={{id:1, name: t("home"), url: '/', icon:(<HomeIcon />)}}*/}
          {/*/>*/}
        <ListBox
            closeSidebar={closeSidebar}
        subname={t("colleagues")}
        subList={[
            {id:1, 
          name: t("current_colleagues"), 
              url: '/currentColleagues', 
              icon: <SupervisorAccountIcon />
            },
            {id:3,
                name: t("former_colleagues"),
                url: '/formerColleagues',
                icon: <ContactsIcon />
            },
            {id:2, 
          name: t("all_colleagues"), 
              url: '/colleagues', 
              icon: <BadgeIcon />
            },
           
            {id:4, 
          name: t("add_colleague"), 
              url: '/addColleague', 
              icon: <PersonAddAlt1Icon />
            },
        ]}
        />
      </MenuWrapper>
     </GScroll>
  );
}

export default SidebarMenu;
