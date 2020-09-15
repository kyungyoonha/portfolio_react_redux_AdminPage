import React, { useEffect, useState } from "react";
import axios from "axios";
import history from "../../../history";

import Template from "../../../components/template/Template";
import Board from "../../../components/Board/Board";

const Manager = ({ match }) => {
    const id = match.url.split("/")[2];
    const [data, setData] = useState([]);

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
                setData(response.data);
            } catch (err) {
                console.error("DataboardTable Fecth error:", err);
            }
        };
        getFetchData();
    }, [id, pageCtrl]);

    const handleClickInsert = () => {
        history.push(`/member/${id}/insert`);
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
            title="매니저 정보"
            handleClickInsert={handleClickInsert}
            handleClickDelete={handleClickDelete}
        >
            <Board
                handleChangePageCtrl={handleChangePageCtrl}
                headerCtg="manager"
                data={data}
            />
        </Template>
    );
};

export default Manager;
