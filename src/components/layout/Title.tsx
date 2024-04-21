import { ITitleProps } from '../../types/interfaces';

const Title: React.FC<ITitleProps> = ({ title }) => {
  return (
    <h2 className="text-lg font-bold text-center mb-2">{title}</h2>
  );
};

export default Title;