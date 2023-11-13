import css from "styled-jsx/css";

export default css`

.header-image {
  background-color: #32425c;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
}

.add-to-bag {
  background-color: #3b4463;
  display: flex;
  align-items: center;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.right-side {
  width: 40%;
}

.left-side {
  width: 60%;
}

.header-title {
  font-size: 48px;
  font-weight: 600;
  color: #fff;
}

.header-divider {
  height: 2px;
  background: rgba(255,255,255,.8);
  width: 35%;
  margin-top: 22px;
  margin-left: 20px;
}

.header-container {
  display: flex;
  align-items: center;
}

.header-sub-title {
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  line-height: 24px;
}
  .title {
    color: #000;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
  }

  .sub-title {
    color: #000;
    margin-bottom: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: normal;
  }

  .main-container {
    padding: 0 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .main-wrapper {
    width: 90%;
  }

  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px
  }

  .card-wrapper {
    max-width: 350px;
  }

  .range-inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  .range {
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 5px;
  }

  .about-card-image {
    width: 100%;
    height: 200px;
    border-radius: 40px;
  }

  .card-title {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
  }

  .our-company-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
  }

  .company-values-container {
    display: flex;
    width: 100%;
    margin-bottom: 80px;
  }

  .company-values-wrapper {
    width: 50%;
    padding: 0 50px;
  }

  .company-right-box {
    width: 50%;
  }

  .company-left-box {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .logo-block {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }

  .profle-image {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 1px solid #000;
    margin-right: 20px;
  }

  .text-container > p {
    color: #000;
  }

  .contact-form {
    padding: 0 5%;
  }

  .bottom-section {
    background-color: #3b4463;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 50px 0 50px;
    height: 335px;
    position: relative;
    margin-top: 20px;
  }

  .hr-line {
    height: 1px;
    background-color: #000;
    width: 38%;
  }
  
  .our-company-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .our-product-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .main-container {
      padding: 0 20px;
    }
    .card-container {
      justify-content: center;
      flex-wrap: wrap;
    }
    .company-values-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 30px;
    }

    .company-values-wrapper {
      width: 100%;
      padding: 0 20px;
    }
    .company-right-box {
      width: 100%;
    }

    .company-left-box {
      width: 100%;
    }
    .profle-image {
      height: 70px;
      width: 70px;
    }
    .bottom-section {
      padding: 20px;
      height: 260px;
    }
    .nav-wrapper {
      padding: 20px;
      flex-direction: column;
    }
    .right-side {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .left-side {
      width: 100%;
      margin-top: 30px;
    }
    .header-sub-title {
      font-size: 14px;
      text-align: center;
    }
    .header-title {
      font-size: 28px;
    }
  }

  @media (max-width: 576px) {
    .right-side {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .add-to-bag {
      margin-top: 20px;
    }
    .our-company-container {
      margin-top: 20px;
    }
    .hr-line {
      width: 26%;
    }
    .bottom-section {
      margin-bottom: 100px;
    }
  }
`;