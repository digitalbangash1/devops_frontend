// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
} from "@iconscout/react-unicons"

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

//Recent Card Imports
import img1 from "../../Imgs/img1.png";
import img2 from "../../Imgs/img2.png";
import img3 from "../../Imgs/img3.png";



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