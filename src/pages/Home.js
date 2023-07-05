import React, { useState } from "react";
import styles from "../css/Home.module.css";
import homeImg from "../img/home_img.png";
import LoginModal from "../modal/LoginModal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className={styles.home_box}>
      <div className={styles.image_box}>
        <img src={homeImg} alt="homeImg" />
      </div>

      <div className={styles.button_box}>
        <h1>
          <em>Dogs!</em>
        </h1>

        <button
          onClick={showModal}
          type="button"
          className="btn btn-primary"
          style={{ width: "400px", height: "60px", fontSize: "25px" }}
        >
          로그인
        </button>
        {modalOpen && <LoginModal setModalOpen={setModalOpen} />}

        <br />
        <button
          type="button"
          className="btn btn-success custom-btn"
          style={{ width: "400px", height: "60px", fontSize: "25px" }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Home;
