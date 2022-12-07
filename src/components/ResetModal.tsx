import React from "react";
import { BiRefresh } from "react-icons/bi";
import Modal from "./Modal";
import { EResolvedState } from "../models";

type TResetModal = {
  totalResolvedStates: EResolvedState[];
  onReset: VoidFunction;
};

const ResetModal = ({ totalResolvedStates, onReset }: TResetModal) => {
  const rightAnswers = totalResolvedStates.filter(
    (answer) => answer === EResolvedState.RIGHT
  );

  return (
    <Modal>
      <div className="reset-modal-wrapper">
        <p className="score-label">
          Your score is {rightAnswers.length} / {totalResolvedStates.length}
        </p>
        <div className="reset-button" onClick={onReset}>
          <BiRefresh />
          <span>Replay</span>
        </div>
      </div>
    </Modal>
  );
};

export default ResetModal;
