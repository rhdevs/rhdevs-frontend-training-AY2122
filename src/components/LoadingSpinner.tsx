import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Spinner = styled.div`
  text-align: center;
  background-color: rgba(225, 225, 225, 0.4);
  z-index: 500;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  .ant-spin {
    color: #097ac0 !important;
  }
`;

const LoadingSpinner = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
  return (
    <Spinner>
      <Spin indicator={antIcon} />
    </Spinner>
  );
};

export default LoadingSpinner;
