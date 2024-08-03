import { useRouteError } from "react-router-dom";

let ErrorPage = () => {
  const error = useRouteError();
  return <div>oh ini halaman error</div>;
};

export default ErrorPage;
