import css from "styled-jsx/css";

export default css`
table {
    border-collapse: collapse;
    border-radius: 8px;
    border-style: hidden;
    box-shadow: 0 0 0 1px #666;
}

.our-product-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .our-product-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .our-product-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .our-product-header > p {
    color: #000;
  }

  .our-product-header > h1 {
    margin-bottom: 0;
  }
  
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 10px;
    cursor: pointer;
    font-size: 13px;
  }

`