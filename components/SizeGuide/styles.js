import css from "styled-jsx/css";

export default css`
.hero-image {
  background-image: url(/static/images/header-uniform.png);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  width: 32%;
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
  margin-top: 40px;
  cursor: pointer;
}

.main-sub-title {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  margin-top: 10px;
}

.header-divider {
  height: 2px;
  background-color: rgba(255,255,255,0.8);
  width: 50%;
  margin-top: 20px;
}

.main-title {
  font-size: 48px;
  font-weight: 600;
  color: #fff;
}
  .main-container {
    padding: 0 7%;
  }
  .option-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  .option-buttons {
    background: lightgray;
    border: none;
    width: 150px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
  }

  .selected {
    background-color: #00f;
    color: #fff;
  }

  .sub-title {
    color: #000;
  }
  .line {
    height: 2px;
    background-color: gray;
    width: 100%;
    margin: 40px 0;
  }
  .clothes-options {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 40px;
  }

  .options {
    font-size: 18px;
    text-transform: uppercase;
  }

  .header-container {
    display: flex;
    justify-content: center;
  }

  .header-wrapper {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .heading {
    font-size: 28px;
    font-weight: 600;
    text-transform: Captilize;
    margin: 20px 0;
  }

  .divider-line {
    height: 3px;
    background-color: gray;
    width: 40%;
    margin: 20px 0;
  }

  .tips-container {
    background: rgba(0, 0, 0, 0.1);
    padding: 20px 30px 20px 20px;
    border-radius: 20px;
    margin-bottom: 60px;
  }

  .tips-container > h2 {
    color: #000;
    text-transform: uppercase;
  }

  .tips-number {
    width: 40px;
    height: 40px;
    background: orange;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 20px;
    font-size: 24px;
  }

  .tips {
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .tips-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tips-map {
    width: 70%;
  }

  .tip-text {
    font-size: 18px;
  }

  .measuring-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .measuring-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .measuring-divider {
    height: 1px;
    background-color: #000;
    width: 35%; 
  }

  @media(max-width: 576px) {
    .main-container {
      padding: 0 4%;
    }
    .tips-number {
      width: 30px;
      height: 30px;
      background: orange;
      margin-right: 10px;
      font-size: 14px;
    }
    .tips {
      padding-left: 0;
    }
    .tips-container {
      padding: 15px;
    }
    .tip-text {
      font-size: 14px;
    }
    .tips-map {
      width: 75%;
    }
    .wrapper {
      margin-top: 20px;
      width: 70%;
    }
    .measuring-divider {
      width: 30%; 
    }

    @media(max-width: 900px) {
      .measuring-divider {
        width: 30%; 
      }
    }
`;