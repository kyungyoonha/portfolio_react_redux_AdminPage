const navConfig = {
    dashboard: {
        path: "/dashboard",
        title: "Dashboard",
        icon: "chart-pie",
    },
    member: {
        path: "/member",
        title: "회원정보",
        icon: "user-cog",
        navList: [
            { to: "/member/user", title: "일반 회원" },
            { to: "/member/driver", title: "기사 회원" },
            { to: "/member/admin", title: "관리자" },
        ],
    },
    package: {
        path: "/package",
        title: "관광지 관리",
        icon: "map-marked-alt",
        navList: [
            { to: "/package/tour", title: "관광지 관리" },
            { to: "/package/nationcode", title: "국가 코드 관리" },
            { to: "/package/areacode", title: "지역 코드 관리" },
        ],
    },
    order: {
        path: "/order",
        title: "구매 관리",
        icon: "route",
        navList: [
            { to: "/order/purchase", title: "구매정보 관리" },
            { to: "/order/purchasecode", title: "구매코드 조회" },
        ],
    },
    cs: {
        path: "/cs",
        title: "공지사항",
        icon: "bell",
        navList: [
            { to: "/cs/push", title: "알림 관리" },
            { to: "/cs/notice", title: "공지사항 관리" },
            { to: "/cs/question", title: "문의사항 관리" },
        ],
    },
};

export default navConfig;
