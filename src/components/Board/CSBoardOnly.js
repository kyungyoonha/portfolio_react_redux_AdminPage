import React, { useEffect } from "react";
import history from "../../history";

// 리덕스
import { useSelector, useDispatch } from "react-redux";
import boardActions from "../../redux/actions/boardActions";
import {
    changeObjToQuerystring,
    changeDateFormat,
} from "../../utils/helperFunc";

const CSBoardOnly = ({ full }) => {
    const pathname = "/cs/question";
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.board);

    useEffect(() => {
        const query = changeObjToQuerystring({ replyYN: "N" });
        dispatch(boardActions.fetch(`${pathname + query}`));
        return () => dispatch(boardActions.initialize());
    }, [dispatch]);

    const handleClickRow = (idx) => {
        history.push(`/cs/question/form?type=edit&id=${idx}`);
    };

    return (
        <div className={`dashboardCard ${full && "full"}`}>
            <div className="card">
                <div className="card-header bg-white">
                    문의 및 신고 게시판 현황
                </div>
                <div className="card-body bg-white">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-group-item-secondary">
                            <div className="row">
                                <div className="col">내용</div>
                                <div className="col">작성자</div>
                                <div className="col">작성날짜</div>
                                <div className="col">답변여부</div>
                            </div>
                        </li>
                        {data.map((item, idx) => (
                            <li
                                key={idx}
                                className="list-group-item"
                                onClick={() => handleClickRow(item.idx)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="row">
                                    <div className="col">{item.contents}</div>
                                    <div className="col">{item.reguser}</div>
                                    <div className="col">
                                        {changeDateFormat(item.createdAt, full)}
                                    </div>
                                    <div className="col">{item.replyYN}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CSBoardOnly;
