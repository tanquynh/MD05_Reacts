import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import routerConfig from "./routerConfig"
export default function AppRouter() {
    function renderRoutes(router) {
        return router.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
                {route.children && renderRoutes(route.children)}
            </Route>
        ))
    }

    return <Routes>{renderRoutes(routerConfig)}</Routes>
}
