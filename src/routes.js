// pages
import Dashboard from "./pages/dashboard/DashBoard";

import User from './pages/member/user/User';
import UserForm from './pages/member/user/form/UserForm';
import Driver from './pages/member/driver/Driver';
import DriverForm from './pages/member/driver/form/DriverForm';
import Manager from './pages/member/manager/Manager';
import ManagerForm from './pages/member/manager/form/ManagerForm';
import PlaceCode from './pages/place/placecode/PlaceCode'
import PlaceCodeForm from './pages/place/placecode/form/PlaceCodeForm';
import RegionCode from './pages/place/regioncode/RegionCode';


// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

const routes = [
    // { path: "/signup", title: "회원가입", component: Signup},
    // { path: "/login", title: "로그인", component: Login },
    { path: "/", exact: true, title: "Dashboard", component: Dashboard, icon: "chart-pie" },
    
    { path: "/member/user", exact: true, title: "회원정보", component: User, icon: "user-cog"},
    { path: "/member/user/form", title: "회원 추가", component: UserForm},
    { path: "/member/driver", exact: true, title: "드라이버 정보", component: Driver },
    { path: "/member/driver/form", title: "드라이버 추가", component: DriverForm },
    { path: "/member/manager", exact: true, title: "매니저 정보", component: Manager },    
    { path: "/member/manager/form", title: "매니저 추가", component: ManagerForm },
    
    { path: "/place/placecode", exact: true, title: "관광지 관리", component: PlaceCode, icon: "map-marked-alt" },
    { path: "/place/placecode/form",  title: "관광지 추가", component: PlaceCodeForm},
    { path: "/place/regioncode",  title: "지역코드 관리", component: RegionCode},
    
    { path: "/tour", exact: true, title: "투어 관리", component: Dashboard, icon: "route" },
    { path: "/notice", exact: true, title: "공지사항", component: Dashboard, icon: "bell" },
];

export default routes;