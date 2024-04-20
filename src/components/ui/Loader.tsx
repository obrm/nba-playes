import loader from '../../assets/loading.gif';

const Loader: React.FC = () => {
  return <div className="flex justify-center items-center"><img src={loader} alt="Loading..." /></div>;
};

export default Loader;