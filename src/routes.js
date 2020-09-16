// pages
import Dashboard from "./views/dashboard/Dashboard";
import User from './views/member/user/User';
import UserForm from './views/member/user/UserForm';
import Driver from './views/member/driver/Driver';
import DriverForm from './views/member/driver/DriverForm';
import Manager from './views/member/manager/Manager';
import ManagerForm from './views/member/manager/ManagerForm';

import PlaceCode from './views/place/placeCode/PlaceCode'
import PlaceCodeForm from './views/place/placeCode/PlaceCodeForm';
import RegionCode from './views/place/regionCode/RegionCode';


// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

const routes = [
    // { path: "/signup", title: "회원가입", component: Signup},
    // { path: "/login", title: "로그인", component: Login },
    { path: "/", exact: true, title: "Dashboard", component: Dashboard, icon: "chart-pie" },
    { path: "/member/user", exact: true, title: "회원정보", component: User, icon: "user-cog"},
    { path: "/member/user/insert", title: "회원 추가", component: UserForm},
    { path: "/member/driver", exact: true, title: "회원정보", component: Driver },
    { path: "/member/driver/insert", title: "드라이버 추가", component: DriverForm },
    { path: "/member/manager", exact: true, title: "회원정보", component: Manager },    
    { path: "/member/manager/insert", title: "매니저 추가", component: ManagerForm },
    { path: "/place/place-code", exact: true, title: "관광지 관리", component: PlaceCode, icon: "map-marked-alt" },
    { path: "/place/place-code/insert",  title: "관광지 추가", component: PlaceCodeForm},
    { path: "/place/region-code",  title: "지역코드 관리", component: RegionCode},
    { path: "/tour", exact: true, title: "투어 관리", component: Dashboard, icon: "route" },
    { path: "/notice", exact: true, title: "공지사항", component: Dashboard, icon: "bell" },
];

export default routes;