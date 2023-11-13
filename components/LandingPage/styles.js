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
  }

  .right-side {
    width: 40%;
  }

  .left-side {
    width: 60%;
  }

  .title {
    font-size: 48px;
    font-weight: 700;
    text-align: left;
  }

  .sub-title {
    font-size: 22px;
    font-weight: normal;
    text-align: left;
    line-height: 20px;
  }

  .hero-section > h1 {
    text-align: center;
    color: #000;
  }
  .hero-section > p {
    text-align: center;
    color: #000;
  }

  .weather-options {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  .weather-options > li {
    margin-left: 10px;
    list-style-type: none;
  }
  .middle-section {
    display: flex;
    justify-content: center;
  }
  .product-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    flex-wrap: wrap;
    gap: 20px;
  }

  .product-card {
    background-image: url(/static/images/sample.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 66%;
    height: 250px;
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

  .button-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .button-container > button {
    background-color: #32425c;
    border: none;
    color: #fff;
    margin-top: 40px;
    margin-bottom: 30px;
    text-transform: uppercase;
    padding: 10px 20px 10px 20px;
    cursor: pointer;
  }

  .hr {
    position: relative;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.6);
    width: 3.5px;
    margin-right: 10%;
  }

  .line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-left: 2px solid rgba(255, 255, 255, 0.6);
    height: 40%;
    background-color: rgba(255, 255, 255, 0.6);
  }

  @media only screen and (max-width: 768px) {
    .bottom-section {
      padding: 20px;
      height: 260px;
    }
    .product-card {
      background-repeat: no-repeat;
      width: 100%;
      height: 250px;
    }
    .button-container > button {
      margin-top: 130px;
    }
    .nav-wrapper {
      padding: 20px;
    }
    .hr {
      margin-right: 5%;
    }
    .right-side {
      width: 50%;
    }
  
    .left-side {
      width: 50%;
    }
    .title {
      font-size: 20px;
    }
  
    .sub-title {
      font-size: 14px;
    }
  }
`;
