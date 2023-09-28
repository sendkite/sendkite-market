import {useRouteError} from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error)

  return (
    <div>
      <h2>Oops!😨</h2>
      <h2>Sorry, error has occurred.</h2>
      <h2>
        <i>{error.statusText || error.message}</i>
      </h2>
    </div>
  )
}

export default NotFound;