import React, { useEffect, useState } from "react";
import axios from "axios";
import history from "../../../history";

import Template from "../../../components/template/Template";
import Board from "../../../components/Board/Board";
import BoardTop from "../../../components/Board/BoardTop";
import BoardFooter from "../../../components/Board/BoardFooter";

const User = ({ match }) => {
    const id = match.url.split("/")[2];
    const [pageData, setPageData] = useState({
        data: [],
        totalPage: 5,
    });

    const [pageCtrl, setPageCtrl] = useState({
        pageSize: 4,
        currentPage: 1,
        countryCtg: "",
        searchKeyword: "",
        sort: "",
    });

    useEffect(() => {
        const getFetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/json/${id}.json`
                    //     ?pageSize=${pageCtrl.pageSize}
                    //     &currentPage=${pageCtrl.currentPage}
                    //     &countryCtg=${pageCtrl.countryCtg}
                    //     &searchKeyword=${pageCtrl.searchKeyword}
                    //     &sort=${pageCtrl.sort}
                );
                setPageData(response.data);
            } catch (err) {
                console.error("DataboardTable Fecth error:", err);
            }
        };
        getFetchData();
    }, [id]);

    const handleClickInsert = () => {
        history.push(`/member/${id}/form`);
    };

    const handleChangePageCtrl = (name, value) => {
        setPageCtrl((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleClickDelete = () => {};

    return (
        <Template
            title="회원 정보"
            navCtg="member"
            handleClickInsert={handleClickInsert}
            handleClickDelete={handleClickDelete}
        >
            <BoardTop handleChangePageCtrl={handleChangePageCtrl} />
            <Board headerCtg="user" data={pageData.data} />
            <BoardFooter
                totalPage={pageData.totalPage}
                currentPage={pageCtrl.currentPage}
                handleChangePageCtrl={handleChangePageCtrl}
            />
        </Template>
    );
};

export default User;
