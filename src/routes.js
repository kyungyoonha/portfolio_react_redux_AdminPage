// pages
import Dashboard from "./pages/Dashboard";
import UserBoard from './pages/UserBoard';
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

const routes = [
    // { path: "/signup", title: "회원가입", component: Signup},
    // { path: "/login", title: "로그인", component: Login },
    { path: "/", nav: true, exact: true, title: "Dashboard", component: Dashboard, icon: "chart-pie" },
    { path: "/member/customer", nav: true, exact: true, title: "회원정보", component: UserBoard, icon: "user-cog"},
    { path: "/member/driver", exact: true, title: "회원정보", component: UserBoard },
    { path: "/member/manager", exact: true, title: "회원정보", component: UserBoard },
    { path: "/place", nav: true, exact: true, title: "관광지 관리", component: Dashboard, icon: "map-marked-alt" },
    { path: "/tour", nav: true, exact: true, title: "투어 관리", component: Dashboard, icon: "route" },
    { path: "/notice", nav: true, exact: true, title: "공지사항", component: Dashboard, icon: "bell" },
];

export default routes;
