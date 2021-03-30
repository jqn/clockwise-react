import React from "react";

export default function TimeZone() {
  return (
    <div className="card h-100 p-2">
      <h4 className="card-title text-center">Time Zones</h4>
      <div className="form-group">
        <input className="form-control" placeholder="8:46 AM" />
      </div>
      <div className="form-group">
        <select className="form-control">
          <option>Local time</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <input className="form-control" placeholder="1:46 AM" />
      </div>
      <div className="form-group">
        <select className="form-control">
          <option>Denver</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  );
}
