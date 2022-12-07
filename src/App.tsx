import React, { useEffect, useState } from "react";
import Number from "./components/Number";
import TotalResolveStateBar from "./components/TotalResolveStateBar";
import ResolveStateModal from "./components/ResolveStateModal";
import ResetModal from "./components/ResetModal";
import { EResolvedState } from "./models";
import { getRandomNumber } from "./utils/number";
import "./App.css";

const TOTAL_RESOLVE_COUNT = 10;

const App = () => {
  const [numberA, setNumberA] = useState<number>(getRandomNumber());
  const [numberB, setNumberB] = useState<number>(getRandomNumber());
  const [resolvedState, setResolvedState] = useState<EResolvedState>(
    EResolvedState.NOT
  );
  const [totalResolvedState, setTotalResolvedState] = useState<
    EResolvedState[]
  >([]);

  const handleClickA = () => {
    if (numberA >= numberB) {
      setResolvedState(EResolvedState.RIGHT);
    } else {
      setResolvedState(EResolvedState.WRONG);
    }
  };

  const handleClickB = () => {
    if (numberA <= numberB) {
      setResolvedState(EResolvedState.RIGHT);
    } else {
      setResolvedState(EResolvedState.WRONG);
    }
  };

  const resetNumbers = () => {
    setResolvedState(EResolvedState.NOT);
    setNumberA(getRandomNumber());
    setNumberB(getRandomNumber());
  };

  const resetQuestion = () => {
    setTotalResolvedState((prev) => [...prev, resolvedState]);
    resetNumbers();
  };

  const resetQuestions = () => {
    setTotalResolvedState([]);
    resetNumbers();
  };

  useEffect(() => {
    if (resolvedState !== EResolvedState.NOT) {
      setTimeout(resetQuestion, 1200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedState]);

  return (
    <div className="App">
      <div>
        <h1 className="header">Which number is larger?</h1>
        <div className="number-panel">
          <Number number={numberA} onClick={handleClickA} />
          <Number number={numberB} onClick={handleClickB} />
        </div>
        <div className="total-state-bar-wrapper">
          <TotalResolveStateBar
            totalResolveCount={TOTAL_RESOLVE_COUNT}
            totalResolvedStates={totalResolvedState}
          />
        </div>
      </div>
      {resolvedState !== EResolvedState.NOT && (
        <ResolveStateModal resolveState={resolvedState} />
      )}
      {totalResolvedState.length === TOTAL_RESOLVE_COUNT && (
        <ResetModal
          totalResolvedStates={totalResolvedState}
          onReset={resetQuestions}
        />
      )}
    </div>
  );
};

export default App;
