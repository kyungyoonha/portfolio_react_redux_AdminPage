const navMap = {
    member: [
        { to: "/member/user", title: "일반 회원" },
        { to: "/member/driver", title: "기사 회원" },
        { to: "/member/admin", title: "관리자" },
    ],
    package: [
        { to: "/package/tour", title: "관광지 관리" },
        { to: "/package/nationcode", title: "국가 코드 관리" },
        { to: "/package/areacode", title: "지역 코드 관리" },
    ],
    order: [
        { to: "/order/purchase", title: "구매정보 관리" },
        { to: "/order/purchasecode", title: "구매코드 조회" },
    ],
    cs: [
        { to: "/cs/push", title: "알림 관리" },
        { to: "/cs/notice", title: "공지사항 관리" },
        { to: "/cs/question", title: "문의사항 관리" },
    ],
};

export default navMap;
