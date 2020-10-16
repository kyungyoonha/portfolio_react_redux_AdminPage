import axios from "axios";
import { toast } from "react-toastify";

const uploadCroudinary = async (resourceType, file) => {
    const formData = new FormData();
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
    formData.append("file", file);
    let toastId = null;
    const config = {
        onUploadProgress: (p) => {
            const progress = p.loaded / p.total;
            if (toastId === null) {
                toastId = toast.info("업로드 중...", {
                    progress,
                });
            } else {
                toast.update(toastId, {
                    progress,
                });
            }
        },
    };
    try {
        const { data } = await axios.post(
            `${process.env.REACT_APP_CLOUDINARY_URL}/${resourceType}/upload`,
            formData,
            config
        );

        toast.dismiss(toastId);
        toast.success("업로드 성공!");

        return data.secure_url;
    } catch (e) {
        toast.error("업로드 오류");
    }
};

export default uploadCroudinary;
