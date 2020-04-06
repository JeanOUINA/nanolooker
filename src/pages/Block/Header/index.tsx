import React from "react";
import { BlockOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import Copy from "components/Copy";

const BlockHeader = () => {
  const { block = "" } = useParams();

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "16px",
          marginRight: "6px",
          wordWrap: "break-word",
          position: "relative",
          marginBottom: "12px",
        }}
        className="color-normal"
      >
        <BlockOutlined
          style={{
            fontSize: "18px",
            marginRight: "6px",
          }}
        />
        <span style={{ marginRight: "6px" }}>
          <span>{block.substr(block.length * -1, block.length - 64)}</span>
          <span style={{ color: "#1890ff" }}>{block.substr(-64, 7)}</span>
          <span>{block.substr(-57, 50)}</span>
          <span style={{ color: "#1890ff" }}>{block.substr(-7)}</span>
        </span>
        <Copy text={block} />
      </div>
    </>
  );
};

export default BlockHeader;
