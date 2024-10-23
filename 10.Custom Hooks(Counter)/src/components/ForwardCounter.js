import Card from "./Card";
import useCounter from "../hooks/use-counter";
// import { useCallback, useMemo } from "react";

const ForwardCounter = () => {
  const counter = useCounter((prevCounter) => prevCounter + 1);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
