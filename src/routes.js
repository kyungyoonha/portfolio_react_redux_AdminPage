// pages
import Dashboard from "./views/Dashboard/Dashboard";
import User from './views/member/user/User';
import UserInsert from './views/member/user/UserInsert';
import Driver from './views/member/driver/Driver';
import Insert from './views/member/driver/DriverInsert';
import Manager from './views/member/manager/Manager';
import ManagerInsert from './views/member/manager/ManagerInsert';


// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

const routes = [
    // { path: "/signup", title: "회원가입", component: Signup},
    // { path: "/login", title: "로그인", component: Login },
    { path: "/", exact: true, title: "Dashboard", component: Dashboard, icon: "chart-pie" },
    { path: "/member/user", exact: true, title: "회원정보", component: User, icon: "user-cog"},
    { path: "/member/user/insert", title: "회원 추가", component: UserInsert},
    { path: "/member/driver", exact: true, title: "회원정보", component: Driver },
    { path: "/member/driver/insert", title: "드라이버 추가", component: Insert },
    { path: "/member/manager", exact: true, title: "회원정보", component: Manager },    
    { path: "/member/manager/insert", title: "매니저 추가", component: ManagerInsert },
    { path: "/place", exact: true, title: "관광지 관리", component: Dashboard, icon: "map-marked-alt" },
    { path: "/tour", exact: true, title: "투어 관리", component: Dashboard, icon: "route" },
    { path: "/notice", exact: true, title: "공지사항", component: Dashboard, icon: "bell" },
];

export default routes;