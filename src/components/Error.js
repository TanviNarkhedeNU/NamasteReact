import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPs... Something went wrong</h1>
    </div>
  );
};
export default Error;
