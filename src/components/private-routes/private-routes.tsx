import { Navigate, Route } from "react-router-dom";
import { Favorites } from "../../pages/favourite/favourite-page";
import { AppRoute } from "../../exports/app-route-types";
import { Offer } from "../../pages/offer/offer-page";
import React from "react";
import { Login } from "../../pages/login/login-page";

export function PrivateRoutes({ isAuthorized }: { isAuthorized: boolean }) {
    const privateRoutes = [
        { path: AppRoute.Favourites, element: <Favorites /> },
        { path: AppRoute.Offer, element: <Offer /> }
    ];

    return (
        <React.Fragment>
            {privateRoutes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={isAuthorized ? element : <Navigate to={AppRoute.Login} replace />}
                />
            ))}
            <Route
                path={AppRoute.Login}
                element={isAuthorized ? <Navigate to={AppRoute.Main} replace /> : <Login />}
            />
        </React.Fragment>
    );
}
