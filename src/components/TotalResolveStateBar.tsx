import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { EResolvedState } from "../models";

type TTotalResolveStateBar = {
  totalResolveCount: number;
  totalResolvedStates: EResolvedState[];
};

const TotalResolveStateBar = ({
  totalResolveCount,
  totalResolvedStates,
}: TTotalResolveStateBar) => {
  return (
    <div className="total-state-bar">
      {new Array(totalResolveCount).fill(0).map((item, index) => (
        <div key={index} className="state-bar-item">
          {totalResolvedStates[index] === EResolvedState.RIGHT ? (
            <FaCheck className="state-bar-item-right" />
          ) : totalResolvedStates[index] === EResolvedState.WRONG ? (
            <FaTimes className="state-bar-item-wrong" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TotalResolveStateBar;
