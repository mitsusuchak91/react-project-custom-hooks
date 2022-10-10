import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter(); //we want default value so we didnt mention true/false

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
