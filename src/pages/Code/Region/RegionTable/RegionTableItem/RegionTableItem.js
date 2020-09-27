import React from "react";

const RegionTableItem = ({ item, isChecked, handleSelectedItem }) => {
    return (
        <tr onClick={() => handleSelectedItem(item)}>
            <td>
                <input
                    type="checkbox"
                    aria-label="Checkbox"
                    checked={isChecked}
                    onChange={() => handleSelectedItem(item)}
                />
            </td>
            <td>{item.country}</td>
            <td>{item.countryCode}</td>
            <td>{item.countrySort}</td>
            <td>{item.state}</td>
            <td>{item.stateSort}</td>
            <td>{item.city}</td>
            <td>{item.hasImgMain ? "O" : "X"}</td>
            <td>{item.cityCode}</td>
            <td>{item.citySort}</td>
            <td>{item.editMng}</td>
            <td>{item.editDate}</td>
            <td>{item.makeMng}</td>
            <td>{item.makeDate}</td>
        </tr>
    );
};

export default RegionTableItem;
