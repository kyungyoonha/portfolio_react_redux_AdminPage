import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Region.scss";
import TemplateNav from "../../../components/template/TemplateNav/TemplateNav";
import RegionTable from "./RegionTable/RegionTable";
import BoardFooter from "../../../components/Board/BoardFooter";
import RegionModal from "./RegionModal/RegionModal";

const Region = ({ match }) => {
    const id = match.url.split("/")[2];
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [checkId, setCheckId] = useState("");
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

    const handleModalOpen = () => {
        if (!selectedItem.id) {
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

    const handleClickDelete = () => {};
    return (
        <div className="card template">
            <div className="card-header bg-white">
                <i className="fas fa-user-cog"></i>
                관광지 관리
            </div>
            <div className="card-body bg-white">
                <TemplateNav navCtg="code" />
                <div className="template__buttonContainer">
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleModalOpen}
                    >
                        수정하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleModalOpen}
                    >
                        복사하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleModalOpen}
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
                    selectedItem={selectedItem}
                    handleModalClose={handleModalClose}
                />
            </div>
            {/* Footer */}
            <div className="card-footer bg-white">
                <div className="template__buttonContainer"></div>
            </div>
        </div>
    );
};

export default Region;
