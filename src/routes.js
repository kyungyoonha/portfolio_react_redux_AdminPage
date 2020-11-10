// pages
import Dashboard from "./containers/Dashboard/DashBoard";
import MemberBoard from './containers/Member/MemberBoard';
import MemberFormUser from './containers/Member/MemberFormUser'
import MemberFormDriver from './containers/Member/MemberFormDriver';
import MemberFormAdmin from './containers/Member/MemberFormAdmin';

import PackageBoard from './containers/Package/PackageBoard';
import PackageFormTour from './containers/Package/PackageFormTour';
import PackageFormNation from "./containers/Package/PackageFormNation";
import PackageFormArea from "./containers/Package/PackageFormArea";

import OrderBoard from './containers/Order/OrderBoard';
import OrderFormPurchase from './containers/Order/OrderFormPurchase';
import OrderFormPurchaseCode from "./containers/Order/OrderFormPurchaseCode";

import CSBoard from './containers/CS/CSBoard';
import CSFormPush from './containers/CS/CSFormPush';
import CSFormNotice from './containers/CS/CSFormNotice';
import CSFormQuestion from './containers/CS/CSFormQuestion';

const routes = [
    { path: "/", exact: true, component: Dashboard },
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