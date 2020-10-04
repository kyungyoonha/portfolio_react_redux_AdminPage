// pages
import Dashboard from "./pages/Dashboard/DashBoard";

import UserBoard from './pages/User/UserBoard/UserBoard';
import UserFormMember from './pages/User/UserFormMember/UserFormMember'
import UserFormDriver from './pages/User/UserFormDriver/UserFormDriver';
import UserFormManager from './pages/User/UserFormManager/UserFormManager';

import TourBoard from './pages/Tour/TourBoard/TourBoard';
import TourAreaForm from './pages/Tour/TourAreaForm/TourAreaForm';




import PurchInfo from "./pages/Purch/PurchInfo/PurchInfo";
import PurchInfoForm from "./pages/Purch/PurchInfoForm/PurchInfoForm";
import PurchCode from "./pages/Purch/PurchCode/PurchCode";
import PurchCodeForm from "./pages/Purch/PurchCodeForm/PurchCodeForm";

const routes = [
    { path: "/", exact: true, component: Dashboard },
    { path: "/dashboard", exact: true, component: Dashboard },
    { path: "/user/member", exact: true, component: UserBoard},
    { path: "/user/member/form",  component: UserFormMember },
    { path: "/user/driver", exact: true, component: UserBoard },
    { path: "/user/driver/form",  component: UserFormDriver },
    { path: "/user/manager", exact: true,  component: UserBoard },
    { path: "/user/manager/form",  component: UserFormManager },
    
    { path: "/tour/area", exact: true,  component: TourBoard },
    { path: "/tour/area/form",  component: TourAreaForm},
    { path: "/tour/region",  component: TourBoard},

    { path: "/purch/purchinfo", exact: true,  component: PurchInfo },
    { path: "/purch/purchinfo/form", exact: true,  component: PurchInfoForm },
    { path: "/purch/purchcode", exact: true,  component: PurchCode },
    { path: "/purch/purchcodeform", exact: true,  component: PurchCodeForm },

    { path: "/notice", exact: true, component: Dashboard },
];

export default routes;