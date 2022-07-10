import { ContactSupport, FolderShared, Home, ImportContacts } from "@mui/icons-material";

export const routers = [
    {
        route: '/',
        name: 'main',
        icon: <Home />,
    },
    {
        route: '/portfolio',
        name: 'portfolio',
        icon: <FolderShared />,
    },
    {
        route: '/about',
        name: 'about',
        icon: <ContactSupport />,
    },
    {
        route: '/contact',
        name: 'contact',
        icon: <ImportContacts />,
    }
]