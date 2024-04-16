import React from "react";
import styles from "./landing-methodic.module.css"
import Image from "next/image";
import teamwork from "../icons/teamwork.svg";
import coding from "../icons/coding.svg";

export default function LandingMethodic() {
    return (
        <div className={styles.methodicWrapper}>
            <div className={styles.methodicObjects}>
                <div className={styles.imgContainerFirst}><Image className={styles.teamwork} src={teamwork} alt="teamwork-image"/></div>
                    <div className={styles.textContOutFirst}>
                        <div className={styles.textCont}>
                            <h2 className={styles.methodic}>Методика обучения</h2>
                            <p className={styles.ourАpproach}>
                            Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, 
                            а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. 
                            Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.
                            </p>
                        </div>
                    </div>
                    <div className={styles.textContOutSecond}>
                        <div className={styles.textCont}>
                            <h2 className={styles.support}>Помощь и поддержка</h2>
                            <p className={styles.question}>Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику.</p>
                            <p className={styles.codeReview}>
                                Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру.
                                Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше. 
                            </p>
                        </div>
                    </div>
                <div className={styles.imgContainerSecond}><Image className={styles.coding} src={coding} alt="coding-image"/></div>
            </div>
        </div>
    );
}