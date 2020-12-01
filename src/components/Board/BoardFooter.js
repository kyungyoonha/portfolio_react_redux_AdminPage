import React from "react";
import history from "../../history";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { changeObjToQuerystring } from "../../utils/helperFunc";

const BoardFooter = ({ pageCount, pages }) => {
    const { search, pathname } = history.location;
    const query = queryString.parse(search);
    const curPage = query.page || "1";

    const prevUrl =
        curPage !== "1"
            ? pathname +
              changeObjToQuerystring({ ...query, page: Number(curPage) - 1 })
            : pathname + search;

    const nextUrl =
        curPage < pageCount
            ? pathname +
              changeObjToQuerystring({ ...query, page: Number(curPage) + 1 })
            : pathname + search;

    const prevSpace = !pages.find((item) => item.number === 1);
    const nextSpace = !pages.find((item) => item.number === pageCount);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <Link className="page-link" to={prevUrl}>
                        이전
                    </Link>
                </li>

                {prevSpace && (
                    <li className="page-item">
                        <Link className="page-link" to={prevUrl}>
                            ...
                        </Link>
                    </li>
                )}

                {pages.map((item) => (
                    <li className="page-item" key={item.number}>
                        <Link
                            className={`page-link ${
                                curPage === String(item.number) &&
                                "bg-primary text-white"
                            }`}
                            to={item.url}
                        >
                            {item.number}
                        </Link>
                    </li>
                ))}
                {nextSpace && (
                    <li className="page-item">
                        <Link className="page-link" to={nextUrl}>
                            ...
                        </Link>
                    </li>
                )}
                <li className="page-item">
                    <Link className="page-link" to={nextUrl}>
                        다음
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default BoardFooter;
