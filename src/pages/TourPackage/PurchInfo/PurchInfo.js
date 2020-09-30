import React, { useEffect, useState } from "react";
import axios from "axios";
import history from "../../../history";

import Template from "../../../components/Template/Template";
import headerObj from "../../../components/Board/boardHeader.json";
import BoardFooter from "../../../components/Board/BoardFooter";
import PurchInfoTop from "./PurchInfoTop/PurchInfoTop";

const PurchInfo = ({ match }) => {
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
                );
                setPageData(response.data);
            } catch (err) {
                console.error("DataboardTable Fecth error:", err);
            }
        };
        getFetchData();
    }, [id]);

    const handleClickInsert = () => {
        history.push(`/tourpackage/purchinfo/form`);
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
            title="투어 관리"
            navCtg="tourpackage"
            isFooter={true}
            handleClickInsert={handleClickInsert}
            handleClickDelete={handleClickDelete}
        >
            <PurchInfoTop handleChangePageCtrl={handleChangePageCtrl} />
            {/* <AreaTop handleChangePageCtrl={handleChangePageCtrl} /> */}
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        {headerObj["tourpackage"].map((item) => (
                            <th key={item} scope="col">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {pageData.data.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.date}</td>
                            <td>{item.guestId}</td>
                            <td>{item.driver}</td>
                            <td>{item.region}</td>
                            <td>{item.totalNum}</td>
                            <td>{item.totalPrice}</td>
                            <td>{item.hours}</td>
                            <td>{item.schedule.length + "곳 방문"}</td>
                            <td>{item.done ? "O" : "X"}</td>
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

export default PurchInfo;
