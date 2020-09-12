// pages
import Dashboard from "./components/Dashboard/Dashboard";
import MemberTable from './components/member/MemberTable';
import MemberInsertUser from './components/member/MemberInsertUser';
import MemberInsertDriver from './components/member/MemberInsertDriver';
import MemberInsertManager from './components/member/MemberInsertManager';
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

const routes = [
    // { path: "/signup", title: "회원가입", component: Signup},
    // { path: "/login", title: "로그인", component: Login },
    { path: "/", exact: true, title: "Dashboard", component: Dashboard, icon: "chart-pie" },
    { path: "/member/user", exact: true, title: "회원정보", component: MemberTable, icon: "user-cog"},
    { path: "/member/user/insert", title: "회원 추가", component: MemberInsertUser},
    { path: "/member/driver", exact: true, title: "회원정보", component: MemberTable },
    { path: "/member/driver/insert", title: "드라이버 추가", component: MemberInsertDriver },
    { path: "/member/manager", exact: true, title: "회원정보", component: MemberTable },
    { path: "/member/manager/insert", title: "매니저 추가", component: MemberInsertManager },
    { path: "/place", exact: true, title: "관광지 관리", component: Dashboard, icon: "map-marked-alt" },
    { path: "/tour", exact: true, title: "투어 관리", component: Dashboard, icon: "route" },
    { path: "/notice", exact: true, title: "공지사항", component: Dashboard, icon: "bell" },
];

export default routes;
