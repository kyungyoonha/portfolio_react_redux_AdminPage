import React, { useEffect, useState } from "react";
import axios from "axios";
import history from "../../history";

import Board from "../../components/Board/Board";
import BoardTop from "../../components/Board/BoardTop";
import BoardFooter from "../../components/Board/BoardFooter";
import { ContentButton, ContentNav } from "../../components/Content/Content";
import memberObj from "./member.json";

const Member = ({ match }) => {
    const id = match.url.split("/")[2];
    const [selectedItem, setSelectedItem] = useState({});
    const [pageData, setPageData] = useState({
        data: [],
        totalPage: 5,
    });

    console.log(selectedItem);

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

    const handleSelectedItem = (item) => {
        if (selectedItem.id !== item.id) {
            setSelectedItem(item);
        } else {
            setSelectedItem({});
        }
    };

    const handleClickDelete = async () => {
        if (!selectedItem.id) {
            alert("삭제할 행을 선택해주세요");
        } else {
            try {
                //await axios.post("http://localhost:8000/region/delete", selectedItem.id);
                setPageData((state) => ({
                    ...state,
                    data: state.data.filter(
                        (item) => item.id !== selectedItem.id
                    ),
                }));
                setSelectedItem({});
            } catch (e) {
                console.error("Region Delete Error", e);
            }
        }
    };

    const handleChangePageCtrl = (name, value) => {
        setPageCtrl((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const headerList = memberObj[id].header;

    return (
        <React.Fragment>
            <ContentNav
                title={memberObj[id].title}
                navCtg={memberObj[id].navCtg}
            ></ContentNav>

            <div className="content__container">
                <BoardTop handleChangePageCtrl={handleChangePageCtrl} />
                <Board
                    headerList={headerList}
                    data={pageData.data}
                    selectedItem={selectedItem}
                    handleSelectedItem={handleSelectedItem}
                />
                <BoardFooter
                    totalPage={pageData.totalPage}
                    currentPage={pageCtrl.currentPage}
                    handleChangePageCtrl={handleChangePageCtrl}
                />

                <br />
                <br />
                <ContentButton
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={handleClickDelete}
                />
            </div>
        </React.Fragment>
    );
};

export default Member;
