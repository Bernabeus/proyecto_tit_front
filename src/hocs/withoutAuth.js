import withAuthRedirect from "./withAuthRedirect";
import Routes from "../constants/routes";

/**
 * Require the user to be unauthenticated in order to render the component.
 * If the user is authenticated, forward to the given URL.
 */
export default function withoutAuth(WrappedComponent, location = Routes.INFORMACION) {

  return withAuthRedirect({
    WrappedComponent,
    location /*from ||*/,
    expectedAuth: false,
  });
}
