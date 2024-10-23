import { Route } from "react-router-dom";
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome , new User</p>
      </Route>
      {/* Route evaluated only when the welcome page is active */}
    </section>
  );
};

export default Welcome;
