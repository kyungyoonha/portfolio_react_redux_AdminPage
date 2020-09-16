import React, { useEffect, useState } from "react";
import axios from "axios";
import history from "../../../history";

import Template from "../../../components/template/Template";
import headerObj from "../../../components/Board/boardHeader.json";
import BoardTop from "../../../components/Board/BoardTop";
import BoardFooter from "../../../components/Board/BoardFooter";

const Driver = ({ match }) => {
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
    }, [id, pageCtrl]);

    const handleClickInsert = () => {
        history.push(`/member/${id}/insert`);
    };

    const handleClickDelete = () => {};

    const handleChangePageCtrl = (name, value) => {
        setPageCtrl((state) => ({
            ...state,
            [name]: value,
        }));
    };
    console.log(pageData);
    return (
        <Template
            title="기사 정보"
            handleClickInsert={handleClickInsert}
            handleClickDelete={handleClickDelete}
        >
            <BoardTop handleChangePageCtrl={handleChangePageCtrl} />
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        {headerObj["driver"].map((item) => (
                            <th key={item} scope="col">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {pageData.data.map((item, idx) => (
                        <tr key={idx}>
                            <th scope="row">{idx}</th>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.country}</td>
                            <td>{item.history.length}건</td>
                            <td>{item.cs.length} 건</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <BoardFooter
                totalPage={pageData.totalPage}
                currentPage={pageCtrl.currentPage}
                handleChangePageCtrl={handleChangePageCtrl}
            />
        </Template>
    );
};

export default Driver;
