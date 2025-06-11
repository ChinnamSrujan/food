import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search your favorite Restaurant..."
          id="search_field"
          className="form-control"
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn">
            <FaSearch className="fa-search" />
          </button>
        </div>
      </div>
    </form>
  );
}