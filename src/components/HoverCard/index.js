import React from "react";
import { Button } from "reactstrap";

import "./Hover.scss";

const HoverCard = ({ img, title, description, link }) => {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: "30px",
        overflow: "hidden",
        boxShadow:
          "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
      }}
      className="hoverCard"
    >
      <img src={img} alt={img} style={{ marginBottom: "0" }} />
      <div
        className="descDiv"
        style={{
          position: "absolute",
          right: "0",
          left: "0",
          bottom: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          margin: "1rem",
          padding: "11rem 0.5rem 0.5rem 0.5rem",
          background:
            "linear-gradient(to bottom, rgba(0,47,75,0.6) 0%,rgba(220, 66, 37, 0.6) 100%)",
        }}
      >
        <h5
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "0.1rem",
          }}
        >
          <u>{title}</u>
        </h5>
        <p
          style={{
            textAlign: "center",
            color: "whitesmoke",
            marginBottom: "0.1rem",
            lineHeight: "1rem",
          }}
        >
          {description}
        </p>
        <Button>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
              width: "100%",
              height: "100%",
              textDecoration: "none",
              margin: "1px",
            }}
          >
            Click ME!
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HoverCard;
