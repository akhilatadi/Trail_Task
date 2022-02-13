import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";


const Home: NextPage = (props) => {


  return (
    <div className="hello">
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

      <div className={styles.quiz_container}>
        <div className={styles.container}>
          <div className={styles.question_container}>
            <p className={styles.question}>
              Which of the below statements about electricity is not true?
            </p>
          </div>
          <div className={styles.answer_cards}>
            <div id={styles.answer1} className={styles.card1}>
              <div className={styles.input}></div>
             <p className={styles.answer}>
                Electricity is measured in units called watts.
              </p>
            </div>
            <div id={styles.answer2} className={styles.card2}>
              <div className={styles.input2}></div>
              <p className={styles.answer}>
                Electricity flows at the speed of light.
              </p>
            </div>
            <div id={styles.answer3} className={styles.card3}>
              <div className={styles.input}></div>
              <p className={styles.answer}>
                Electricity is a primary energy source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
