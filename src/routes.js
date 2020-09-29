// pages
import Dashboard from "./pages/Dashboard/DashBoard";


import User from './pages/Member/User/User';
import UserForm from './pages/Member/UserForm/UserForm'
import Driver from './pages/Member/Driver/Driver';
import DriverForm from './pages/Member/DriverForm/DriverForm';
import Manager from './pages/Member/Manager/Manager'
import ManagerForm from './pages/Member/ManagerForm/ManagerForm';

import Area from './pages/TourArea/Area/Area'
import AreaForm from './pages/TourArea/AreaForm/AreaForm';
import Region from './pages/TourArea/Region/Region';

import PurchInfo from "./pages/TourPackage/PurchInfo/PurchInfo";
import PurchInfoForm from "./pages/TourPackage/PurchInfoForm/PurchInfoForm";
import PurchCode from "./pages/TourPackage/PurchCode/PurchCode";
import PurchCodeForm from "./pages/TourPackage/PurchCodeForm/PurchCodeForm";

const routes = [
    { path: "/", exact: true, component: Dashboard },
    { path: "/Dashboard", exact: true, component: Dashboard },
    { path: "/member/user", exact: true, component: User},
    { path: "/member/user/form",  component: UserForm },
    { path: "/member/driver", exact: true, component: Driver },
    { path: "/member/driver/form",  component: DriverForm },
    { path: "/member/manager", exact: true,  component: Manager },
    { path: "/member/manager/form",  component: ManagerForm },
    
    { path: "/tourarea/area", exact: true,  component: Area },
    { path: "/tourarea/area/form",  component: AreaForm},
    { path: "/tourarea/region",  component: Region},

    { path: "/tourpackage/purchinfo", exact: true,  component: PurchInfo },
    { path: "/tourpackage/purchinfo/form", exact: true,  component: PurchInfoForm },
    { path: "/tourpackage/purchcode", exact: true,  component: PurchCode },
    { path: "/tourpackage/purchcodeform", exact: true,  component: PurchCodeForm },


    { path: "/notice", exact: true, component: Dashboard },
];

export default routes;