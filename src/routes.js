// pages
import Dashboard from "./pages/Dashboard/DashBoard";
import MemberBoard from './pages/Member/MemberBoard';
import MemberFormUser from './pages/Member/MemberFormUser'
import MemberFormDriver from './pages/Member/MemberFormDriver';
import MemberFormAdmin from './pages/Member/MemberFormAdmin';

import PackageBoard from './pages/Package/PackageBoard';
import PackageFormTour from './pages/Package/PackageFormTour';
import PackageFormNation from "./pages/Package/PackageFormNation";
import PackageFormArea from "./pages/Package/PackageFormArea";

import OrderBoard from './pages/Order/OrderBoard';
import OrderFormPurchase from './pages/Order/OrderFormPurchase';
import OrderFormPurchaseCode from "./pages/Order/OrderFormPurchaseCode";

import CSBoard from './pages/CS/CSBoard';
import CSFormPush from './pages/CS/CSFormPush';
import CSFormNotice from './pages/CS/CSFormNotice';
import CSFormQuestion from './pages/CS/CSFormQuestion';

const routes = [
    { path: "/dashboard", exact: true, component: Dashboard },
    { path: "/member/user", exact: true, component: MemberBoard}, 
    { path: "/member/user/form",  component: MemberFormUser },
    { path: "/member/driver", exact: true, component: MemberBoard },
    { path: "/member/driver/form",  component: MemberFormDriver },
    { path: "/member/admin", exact: true,  component: MemberBoard },
    { path: "/member/admin/form",  component: MemberFormAdmin },

    { path: "/package/tour", exact: true,  component: PackageBoard },
    { path: "/package/tour/form",  component: PackageFormTour},
    { path: "/package/nationcode", exact: true,  component: PackageBoard },
    { path: "/package/nationcode/form", component: PackageFormNation },
    { path: "/package/areacode", exact: true,  component: PackageBoard },
    { path: "/package/areacode/form", component: PackageFormArea },

    { path: "/order/purchase", exact: true,  component: OrderBoard },
    { path: "/order/purchase/form", exact: true,  component: OrderFormPurchase },
    { path: "/order/purchasecode", exact: true,  component: OrderBoard },
    { path: "/order/purchasecode/form", exact: true,  component: OrderFormPurchaseCode },

    { path: "/cs/push", exact: true, component: CSBoard },
    { path: "/cs/push/form", exact: true, component: CSFormPush },
    { path: "/cs/notice", exact: true, component: CSBoard },
    { path: "/cs/notice/form", exact: true, component: CSFormNotice },
    { path: "/cs/question", exact: true, component: CSBoard },
    { path: "/cs/question/form", component: CSFormQuestion },
    
];

export default routes;