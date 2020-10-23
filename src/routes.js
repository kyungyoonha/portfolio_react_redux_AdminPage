// pages
import Dashboard from "./pages/Dashboard/DashBoard";

import MemberBoard from './pages/Member/MemberBoard/MemberBoard';
import MemberFormUser from './pages/Member/MemberFormUser/MemberFormUser'
import MemberFormDriver from './pages/Member/MemberFormDriver/MemberFormDriver';
import MemberFormManager from './pages/Member/MemberFormManager/MemberFormManager';

import TourBoard from './pages/Tour/TourBoard/TourBoard';
import TourFormPackage from './pages/Tour/TourFormPackage/TourFormPackage';
import TourFormNation from "./pages/Tour/TourFormNation/TourFormNation";
import TourFormArea from "./pages/Tour/TourFormArea/TourFormArea";

import PurchBoard from './pages/Purch/PurchBoard/PurchBoard';
import PurchFormInfo from './pages/Purch/PurchFormInfo/PurchFormInfo';
import PurchFormCode from "./pages/Purch/PurchFormCode/PurchFormCode";

import CSBoard from './pages/CS/CSBoard/CSBoard';
import CSFormPush from './pages/CS/CSFormPush/CSFormPush';
import CSFormNotice from './pages/CS/CSFormNotice/CSFormNotice';
import CSFormQuestion from './pages/CS/CSFormQuestion/CSFormQuestion';

const routes = [
    { path: "/", exact: true, component: Dashboard },
    { path: "/dashboard", exact: true, component: Dashboard },
    { path: "/member/user", exact: true, component: MemberBoard},
    { path: "/member/user/form",  component: MemberFormUser },
    { path: "/member/driver", exact: true, component: MemberBoard },
    { path: "/member/driver/form",  component: MemberFormDriver },
    { path: "/member/manager", exact: true,  component: MemberBoard },
    { path: "/member/manager/form",  component: MemberFormManager },

    { path: "/tour/tourpackage", exact: true,  component: TourBoard },
    { path: "/tour/tourpackage/form",  component: TourFormPackage},
    { path: "/tour/nationcode", exact: true,  component: TourBoard },
    { path: "/tour/nationcode/form/:id", component: TourFormNation },
    { path: "/tour/areacode", exact: true,  component: TourBoard },
    { path: "/tour/areacode/form/:id", component: TourFormArea },


    { path: "/purch/purchinfo", exact: true,  component: PurchBoard },
    { path: "/purch/purchinfo/form", exact: true,  component: PurchFormInfo },
    { path: "/purch/purchasecode", exact: true,  component: PurchBoard },
    { path: "/purch/purchasecode/form", exact: true,  component: PurchFormCode },

    { path: "/cs/push", exact: true, component: CSBoard },
    { path: "/cs/push/form", exact: true, component: CSFormPush },
    { path: "/cs/notice", exact: true, component: CSBoard },
    { path: "/cs/notice/form", exact: true, component: CSFormNotice },
    { path: "/cs/question", exact: true, component: CSBoard },
    { path: "/cs/question/form/:id", component: CSFormQuestion },
    
];

export default routes;