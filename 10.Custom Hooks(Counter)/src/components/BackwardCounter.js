import Card from "./Card";
import useCounter from "../hooks/use-counter";
const BackwardCounter = () => {
  const counter = useCounter((prevCounter) => prevCounter - 1);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
