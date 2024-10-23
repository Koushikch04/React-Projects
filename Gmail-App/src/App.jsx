import React, { Fragment } from "react";
import Dock from "./components/Dock/Dock";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Dock />
      </Layout>
    </>
    // <Layout>
    //   <Suspense
    //     fallback={
    //       <div className="centered">
    //         <LoadingSpinner />
    //       </div>
    //     }
    //   >
    //     <Switch>
    //       <Route path="/" exact>
    //         <Redirect to="/quotes"></Redirect>
    //       </Route>
    //       <Route path="/quotes" exact></Route>
    //       <Route path="/quotes/:quoteId"></Route>
    //       <Route path="/new-quote"></Route>
    //       <Route path="*"></Route>
    //     </Switch>
    //   </Suspense>
    // </Layout>
  );
};
export default App;
