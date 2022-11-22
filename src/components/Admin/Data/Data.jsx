// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,

} from "@iconscout/react-unicons"





//Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: 'Dashboard',
    },
    {
        icon: UilClipboardAlt,
        heading: 'Orders',
    },
    {
        icon: UilUsersAlt,
        heading: 'Customers',
    },
    {
        icon: UilPackage,
        heading: 'Products',
        url: '/admin/create',
    },
];