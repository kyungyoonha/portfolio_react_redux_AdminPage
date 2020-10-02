// pages
import Dashboard from "./pages/Dashboard/DashBoard";

import UserBoard from './pages/User/UserBoard/UserBoard';
import UserFormMember from './pages/User/UserFormMember/UserFormMember'
import UserFormDriver from './pages/User/UserFormDriver/UserFormDriver';
import UserFormManager from './pages/User/UserFormManager/UserFormManager';

import Area from './pages/TourArea/Area/Area'
import AreaForm from './pages/TourArea/AreaForm/AreaForm';
import Region from './pages/TourArea/Region/Region';

import PurchInfo from "./pages/TourPackage/PurchInfo/PurchInfo";
import PurchInfoForm from "./pages/TourPackage/PurchInfoForm/PurchInfoForm";
import PurchCode from "./pages/TourPackage/PurchCode/PurchCode";
import PurchCodeForm from "./pages/TourPackage/PurchCodeForm/PurchCodeForm";

const routes = [
    { path: "/", exact: true, component: Dashboard },
    { path: "/dashboard", exact: true, component: Dashboard },
    { path: "/user/member", exact: true, component: UserBoard},
    { path: "/user/member/form",  component: UserFormMember },
    { path: "/user/driver", exact: true, component: UserBoard },
    { path: "/user/driver/form",  component: UserFormDriver },
    { path: "/user/manager", exact: true,  component: UserBoard },
    { path: "/user/manager/form",  component: UserFormManager },
    
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