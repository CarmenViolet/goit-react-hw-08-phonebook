import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";

import { AuthNavigation } from "./AuthNavigation/AuthNavigation";
import { Navigation } from "./Navigation/Navigation";
import { UserAuthMenu } from "./UserAuthNavigation/UserAuthNavigation";

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Navigation />
      {token ? <UserAuthMenu /> : <AuthNavigation />}
    </>
  );
};