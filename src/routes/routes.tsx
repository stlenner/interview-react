import { Route } from "react-router-dom";
import { lazy } from "react";

/* eslint-disable-next-line react-refresh/only-export-components */
const RootLayout = lazy(() => import('../pages/root'));
/* eslint-disable-next-line react-refresh/only-export-components */
const Index = lazy(() => import('../pages/index'));

export default (
    <Route
        path="/"
        Component={RootLayout}
    >
        <Route
            index
            Component={Index}
        />
    </Route>
)