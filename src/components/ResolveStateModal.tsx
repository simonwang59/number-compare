import React, { useLayoutEffect, useRef } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { gsap, Bounce } from "gsap";
import Modal from "./Modal";
import { EResolvedState } from "../models";

type TResolveStateModal = {
  resolveState: EResolvedState;
};

const ResolveStateModal = ({ resolveState }: TResolveStateModal) => {
  const alertRef = useRef(null);

  useLayoutEffect(() => {
    if (resolveState === EResolvedState.RIGHT) {
      gsap.fromTo(
        alertRef.current,
        0.6,
        { scale: 0 },
        { scale: 1, ease: Bounce.easeOut }
      );
    } else {
      gsap.fromTo(
        alertRef.current,
        0.01,
        { x: -20 },
        { x: 20, clearProps: "x", repeat: 40 }
      );
      gsap.fromTo(
        alertRef.current,
        0.02,
        { y: -20 },
        { y: 20, clearProps: "y", repeat: 20 }
      );
    }
  }, [resolveState]);

  return (
    <Modal>
      <div
        className={`resolve-state-modal-wrapper ${
          resolveState === EResolvedState.RIGHT ? "right" : "wrong"
        }`}
      >
        <div className="resolve-state-alert" ref={alertRef}>
          {resolveState === EResolvedState.RIGHT ? <FaCheck /> : <FaTimes />}
          <span>
            {resolveState === EResolvedState.RIGHT ? "Right!" : "Wrong!"}
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default ResolveStateModal;
