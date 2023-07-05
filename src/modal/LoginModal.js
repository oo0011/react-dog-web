import React, { useState } from "react";
import styles from "../css/LoginModal.module.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../fbase";

function LoginModal({ setModalOpen }) {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className={styles.modal_box}>
        <div className={styles.login_box}>
          <button
            onClick={closeModal}
            type="button"
            className={`btn btn-danger ${styles.close_button}`}
          >
            X
          </button>

          <div className={styles.login_title}>
            <h2>Dogs 로그인</h2>
            <span>계정이 없으신가요?</span>
            <span>세 계정 만들기</span>
          </div>

          <form>
            <input type="text" placeholder="아이디" />
            <br />
            <input type="password" placeholder="비밀번호" />
          </form>
          <button type="button" className="btn btn-primary btn-lg">
            로그인
          </button>
        </div>

        <div className={styles.login_box2}>
          <button
            onClick={handleGoogleLogin}
            type="button"
            class="btn btn-light"
          >
            Google 로그인
          </button>
          {userData ? userData.displayName : null}

          <button type="button" className="btn btn-primary">
            Facebook 로그인
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default LoginModal;
