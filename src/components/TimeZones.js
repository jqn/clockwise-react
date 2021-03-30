import React from "react";

export default function TimeZone() {
  return (
    <div className="card h-100 p-2">
      <h5 className="card-title">Time Zones</h5>
      <div controlId="exampledivInput1">
        <div placeholder="8:46 AM" />
      </div>
      <div controlId="exampledivSelect1">
        <div as="select">
          <option>Local time</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </div>
      </div>
      <div controlId="exampledivInput1">
        <div placeholder="1:46 AM" />
      </div>
      <div controlId="exampledivSelect1">
        <div as="select">
          <option>Denver</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </div>
      </div>
    </div>
  );
}
