// import React, { useState } from "react";

// export const TourBoardModal = ({
//     type,
//     handleClickInsert,
//     handleClickDelete,
// }) => {

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalType, setModalType] = useState("");

//     return (
//         <div className="tourBoardButton">
//             <button
//                 type="button"
//                 className="btn btn-outline-secondary"
//                 onClick={handleClickDelete}
//             >
//                 삭제하기
//             </button>

//             <button
//                 type="button"
//                 className="btn btn-outline-secondary"
//                 onClick={() => handleModalOpen("new")}
//             >
//                 새로 추가하기
//             </button>

//             <button
//                 type="button"
//                 className="btn btn-outline-secondary"
//                 onClick={() => handleModalOpen("copy")}
//             >
//                 복사하기
//             </button>
//             <button
//                 type="button"
//                 className="btn btn-outline-secondary"
//                 onClick={() => handleModalOpen("edit")}
//             >
//                 수정하기
//             </button>
//         </div>
//     );
// };
