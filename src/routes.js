// pages
import Dashboard from "./pages/Dashboard/DashBoard";

import MemberBoard from './pages/Member/MemberBoard/MemberBoard';
import MemberFormUser from './pages/Member/MemberFormUser/MemberFormUser'
import MemberFormDriver from './pages/Member/MemberFormDriver/MemberFormDriver';
import MemberFormManager from './pages/Member/MemberFormManager/MemberFormManager';

import PackageBoard from './pages/Package/PackageBoard/PackageBoard';
import PackageFormTour from './pages/Package/PackageFormTour/PackageFormTour';
import PackageFormNation from "./pages/Package/PackageFormNation/PackageFormNation";
import PackageFormArea from "./pages/Package/PackageFormArea/PackageFormArea";

import OrderBoard from './pages/Order/OrderBoard/OrderBoard';
import OrderFormPurchase from './pages/Order/OrderFormPurchase/OrderFormPurchase';
import OrderFormPurchaseCode from "./pages/Order/OrderFormPurchaseCode/OrderFormPurchaseCode";

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

    { path: "/package/tour", exact: true,  component: PackageBoard },
    { path: "/package/tour/form",  component: PackageFormTour},
    { path: "/package/nationcode", exact: true,  component: PackageBoard },
    { path: "/package/nationcode/form/:id", component: PackageFormNation },
    { path: "/package/areacode", exact: true,  component: PackageBoard },
    { path: "/package/areacode/form/:id", component: PackageFormArea },


    { path: "/order/purchase", exact: true,  component: OrderBoard },
    { path: "/order/purchase/form", exact: true,  component: OrderFormPurchase },
    { path: "/order/purchasecode", exact: true,  component: OrderBoard },
    { path: "/order/purchasecode/form", exact: true,  component: OrderFormPurchaseCode },

    { path: "/cs/push", exact: true, component: CSBoard },
    { path: "/cs/push/form", exact: true, component: CSFormPush },
    { path: "/cs/notice", exact: true, component: CSBoard },
    { path: "/cs/notice/form", exact: true, component: CSFormNotice },
    { path: "/cs/question", exact: true, component: CSBoard },
    { path: "/cs/question/form/:id", component: CSFormQuestion },
    
];

export default routes;