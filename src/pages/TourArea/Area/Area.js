import React, { useEffect, useState } from "react";
import axios from "axios";
import history from "../../../history";

import Template from "../../../components/Template/Template";
import headerObj from "../../../components/Board/boardHeader.json";

import AreaTop from "./AreaTop/AreaTop";
import BoardFooter from "../../../components/Board/BoardFooter";

const Area = ({ match }) => {
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
        history.push(`/tourarea/${id}/form`);
    };

    const handleChangePageCtrl = (name, value) => {
        setPageCtrl((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleClickDelete = () => {};
    return (
        <Template title="관광지 관리" navCtg="tourarea">
            <div className="template__top">
                <h4> </h4>
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleClickInsert}
                    >
                        추가하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleClickDelete}
                    >
                        삭제하기
                    </button>
                </div>
            </div>

            <AreaTop handleChangePageCtrl={handleChangePageCtrl} />
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        {headerObj["tourarea"].map((item) => (
                            <th key={item} scope="col">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {pageData.data.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.country}</td>
                            <td>{item.state}</td>
                            <td>{item.city}</td>
                            <td>{item.category}</td>
                            <td>{item.number}</td>
                            <td>{item.placeName}</td>
                            <td>{item.info ? "O" : "X"}</td>
                            <td>{item.description ? "O" : "X"}</td>
                            <td>{item.kr ? "O" : "X"}</td>
                            <td>{item.en ? "O" : "X"}</td>
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

export default Area;
