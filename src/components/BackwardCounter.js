import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter(false); //false bcz we want other value than default

  return <Card>{counter}</Card>;
};

export default BackwardCounter;