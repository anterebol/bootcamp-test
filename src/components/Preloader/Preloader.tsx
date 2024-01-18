import spinner from '../../assets/spinner.svg';

export const Preloader = () => {
  return <div className="preloader">
    <img src={spinner} alt="loading..." />
  </div>;
};
