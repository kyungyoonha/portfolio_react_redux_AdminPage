import React, { useState, useEffect } from "react";
import axios from "axios";
import { BoardFooter } from "../../../components/Board/Board";
import RegionTable from "./RegionTable/RegionTable";
import RegionModal from "./RegionModal/RegionModal";
import randomKey from "../../../util/randomKey";
import Template from "../../../components/Template/Template";

const Region = ({ match }) => {
    const id = match.url.split("/")[2];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [selectedItem, setSelectedItem] = useState({});
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

    const handleModalOpen = (type) => {
        setModalType(type);

        if (!selectedItem.id && type !== "new") {
            alert("데이터 행을 체크해주세요.");
        } else {
            setIsModalOpen(true);
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSelectedItem = (item) => {
        if (selectedItem.id !== item.id) {
            setSelectedItem(item);
        } else {
            setSelectedItem({});
        }
    };

    const handleChangePageCtrl = (name, value) => {
        setPageCtrl((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleChangePageData = (newData) => {
        if (newData.id) {
            setPageData((state) => ({
                ...state,
                data: state.data.map((item) =>
                    item.id === newData.id ? newData : item
                ),
            }));
        } else {
            setPageData((state) => ({
                ...state,
                data: [...state.data, { id: randomKey(), ...newData }],
            }));
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
    return (
        <Template title="관광지 관리" navCtg="tour">
            <div className="template__top">
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleClickDelete}
                    >
                        삭제하기
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => handleModalOpen("new")}
                    >
                        새로 추가하기
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => handleModalOpen("copy")}
                    >
                        복사하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => handleModalOpen("edit")}
                    >
                        수정하기
                    </button>
                </div>
            </div>
            <RegionTable
                data={pageData.data}
                selectedItem={selectedItem}
                handleSelectedItem={handleSelectedItem}
            />
            <BoardFooter
                totalPage={pageData.totalPage}
                currentPage={pageCtrl.currentPage}
                handleChangePageCtrl={handleChangePageCtrl}
            />
            <RegionModal
                isModalOpen={isModalOpen}
                modalType={modalType}
                selectedItem={selectedItem}
                handleModalClose={handleModalClose}
                handleChangePageData={handleChangePageData}
            />
        </Template>
    );
};

export default Region;
