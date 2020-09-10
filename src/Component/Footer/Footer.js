import React from "react";
import { connect } from "react-redux";
import {
  setVisibilityFilter,
  visibilityFilter,
} from "../../store/action/action";

const Footer = ({ setVisibilityFilter }) => {
  return (
    <div>
      <span>Show :</span>
      <button
        onClick={() => {
          setVisibilityFilter(visibilityFilter.SHOW_ALL);
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setVisibilityFilter(visibilityFilter.SHOW_ACTIVE);
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          setVisibilityFilter(visibilityFilter.SHOW_COMPLETED);
        }}
      >
        Completed
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => {
      dispatch(setVisibilityFilter(filter));
    },
  };
};

export default connect(null, mapDispatchToProps)(Footer);
