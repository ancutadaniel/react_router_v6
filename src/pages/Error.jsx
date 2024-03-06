import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();
  const title = error ? error.status : "An unknown error occurred!";
  const message = error ? error.statusText : "An unknown error occurred!";

  return (
    <div>
      <MainNavigation />
      <main>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </main>
    </div>
  );
};

export default ErrorPage;
