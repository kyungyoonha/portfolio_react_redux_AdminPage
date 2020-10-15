// pages
import Dashboard from "./pages/Dashboard/DashBoard";

import UserBoard from './pages/User/UserBoard/UserBoard';
import UserFormMember from './pages/User/UserFormMember/UserFormMember'
import UserFormDriver from './pages/User/UserFormDriver/UserFormDriver';
import UserFormManager from './pages/User/UserFormManager/UserFormManager';

import TourBoard from './pages/Tour/TourBoard/TourBoard';
import TourFormArea from './pages/Tour/TourFormArea/TourFormArea';

import PurchBoard from './pages/Purch/PurchBoard/PurchBoard';
import PurchFormInfo from './pages/Purch/PurchFormInfo/PurchFormInfo';
import PurchFormCode from "./pages/Purch/PurchFormCode/PurchFormCode";

import CSBoard from './pages/CS/CSBoard/CSBoard';
import CSFormPush from './pages/CS/CSFormPush/CSFormPush';
import CSFormNotice from './pages/CS/CSFormNotice/CSFormNotice';
import CSFormCstmSvc from './pages/CS/CSFormCstmSvc/CSFormCstmSvc';



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
    { path: "/tour/area/form",  component: TourFormArea},
    { path: "/tour/region",  component: TourBoard},

    { path: "/purch/purchinfo", exact: true,  component: PurchBoard },
    { path: "/purch/purchinfo/form", exact: true,  component: PurchFormInfo },
    { path: "/purch/purchcode", exact: true,  component: PurchBoard },
    { path: "/purch/purchcodeform", exact: true,  component: PurchFormCode },

    { path: "/cs/push", exact: true, component: CSBoard },
    { path: "/cs/push/form", exact: true, component: CSFormPush },
    { path: "/cs/notice", exact: true, component: CSBoard },
    { path: "/cs/notice/form", exact: true, component: CSFormNotice },
    { path: "/cs/service", exact: true, component: CSBoard },
    { path: "/cs/service/form", exact: true, component: CSFormCstmSvc },
    
];

export default routes;