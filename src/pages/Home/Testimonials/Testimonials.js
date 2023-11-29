import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function Testimonials() {
  const [reviewData, setReviewData] = useState([]);
  const [error, setError] = useState("");
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer rkRLe3LDGZayhnqm6q8V_eX9LngJTZIBhsaMV5pMRoz6Scdip5PgPLyTGdm0da2bqS3MJhOBntexZIPZx8rq78aCio3fOotnudenE9v2Zx7gJFIIzqfcNn1kfCeZZHYx",
    },
  };

  useEffect(() => {
    axios
      .get("http://3.147.76.97/api/reviews", options)
      .then((response) => {
        setReviewData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  console.log(reviewData);

  return (
    <div className="Testimonials">
      <div className="testimonials-wrapper"></div>
    </div>
  );
}

export default Testimonials;
