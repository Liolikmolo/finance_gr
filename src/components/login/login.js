import React from "react";
import styles from "./login.module.css"
import Link from 'next/link';
import { CustomButton } from '../button/button';

export default function Login() {
    return (
        <div className={styles.loginWindow}>
            <h1 className={styles.enter}>Вход</h1>
            <form className={styles.form}>
                <label for="nickname" className={styles.NameItem}>Имя пользователя</label>
                    <input className={styles.fillItem} type="text" name="nickname" placeholder="Ваше имя пользователя"/>
                <label for="email" className={styles.NameItem}>E-mail</label>
                    <input className={styles.fillItem} type="email" name="email" placeholder="Ваш E-mail"/>
                <label for="password" className={styles.NameItem}>Пароль</label>
                    <input className={styles.fillItem} type="password" name="password" placeholder="Ваш пароль"/>
                <h2 className={styles.welcome}>Добро пожаловать!</h2>
                <Link className={styles.confirm} href='/'>
            <CustomButton>
					Подтвердить
			</CustomButton>
                </Link>
            </form>
        </div>
    );
}