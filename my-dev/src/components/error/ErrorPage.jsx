import React from 'react';
import {useRouteError} from "react-router-dom";
import styles from "./ErrorPage.module.css"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className={styles.error}>
            <h1>Ой, что-то пошло не так!</h1>
            <p>Произошла ошибка</p>
            <p><i>{error.status || error.message}</i></p>
        </div>
    );
};

export default ErrorPage;