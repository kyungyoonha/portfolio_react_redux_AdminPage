import React from "react";
import RegionTableItem from "./RegionTableItem/RegionTableItem";

const RegionValueList = [
    { key: "check", value: false, name: "체크박스" },
    { key: "country", value: "", name: "국가" },
    { key: "countryCode", value: "", name: "국가코드" },
    { key: "countrySort", value: "", name: "국가정렬" },
    { key: "state", value: "", name: "시/도" },
    { key: "stateSort", value: "", name: "시/도 정렬" },
    { key: "city", value: "", name: "지역" },
    { key: "hasImgMain", value: false, name: "대표사진 유무" },
    { key: "cityCode", value: "", name: "지역 코드" },
    { key: "citySort", value: "", name: "지역 정렬" },
    { key: "editMng", value: "", name: "최근 수정 관리자" },
    { key: "editDate", value: "", name: "최근 수정 날짜" },
    { key: "makeMng", value: "", name: "생성 관리자" },
    { key: "makeDate", value: "", name: "생성 일자" },
];

const RegionTable = ({ data, checkId, handleCheckId }) => {
    return (
        <table className="table table-hover table-bordered text-center">
            <thead>
                <tr>
                    {RegionValueList.map((item) => (
                        <th key={item.key} scope="col">
                            {item.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => (
                    <RegionTableItem
                        key={idx}
                        item={item}
                        isChecked={checkId === item.id}
                        handleCheckId={handleCheckId}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default RegionTable;
