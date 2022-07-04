import React, { useState, useEffect } from "react";
import './defaultButton.css';

export default function DefaultButton(props) {
  
    const {text, onClick, className} = props;

  return (
    <div className="container row">
      <div className="col-4">
        <button
          className={className}
          onClick={onClick}
        >
            {text}
        </button>
      </div>
    </div>
  );
}
