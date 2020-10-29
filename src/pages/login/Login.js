import React, { useState } from "react";
import useInputs from "../../Hooks/useInputs";
import { validateLogin } from "../../util/validate";
import { useDispatch } from "react-redux";
import "./Login.scss";
import { userAction_logIn } from "../../redux/actions";

const initialValue = {
    id: "",
    password: "",
};

const Login = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateLogin,
        setErrors
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userAction_logIn(inputs));
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
                                name="password"
                                value={inputs.password}
                                onChange={handleChangeInputs}
                                className={`form-control ${
                                    errors.password && "is-invalid"
                                }`}
                            />
                            {errors.password && (
                                <div className="invalid-feedback">
                                    {errors.password}
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
