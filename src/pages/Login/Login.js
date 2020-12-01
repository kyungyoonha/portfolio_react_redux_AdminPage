import React, { useState } from "react";
import { validate } from "../../utils/validate";
import { useDispatch, useSelector } from "react-redux";
import "./Login.scss";
import { authAction_errors, authAction_logIn } from "../../redux/actions";

const initialValue = {
    id: "",
    pw: "",
};

const Login = () => {
    const dispatch = useDispatch();

    const { errors } = useSelector((state) => state.auth);
    const [inputs, setInputs] = useState(initialValue);

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;
        const errorMessage = validate("login", name, value);

        dispatch(authAction_errors({ [name]: errorMessage }));

        setInputs((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authAction_logIn(inputs));
    };

    return (
        <div className="login">
            <div className="login__container">
                <h1>TRIPSODA</h1>

                <div className="login__form">
                    <h2>로그인</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>아이디</label>
                            <input
                                type="id"
                                name="id"
                                value={inputs.id}
                                onChange={handleChangeInputs}
                                autoComplete="off"
                                className={`form-control ${
                                    errors.id && "is-invalid"
                                }`}
                            />
                            {errors.id && (
                                <div className="invalid-feedback">
                                    {errors.id}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label>비밀번호</label>
                            <input
                                type="password"
                                name="pw"
                                value={inputs.pw}
                                onChange={handleChangeInputs}
                                className={`form-control ${
                                    errors.pw && "is-invalid"
                                }`}
                            />
                            {errors.pw && (
                                <div className="invalid-feedback">
                                    {errors.pw}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                        >
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
