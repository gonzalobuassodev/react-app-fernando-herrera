import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-Lazyload/pages/NoLazy";

type JSXComponents = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    components: LazyExoticComponent<JSXComponents> | JSXComponents;
    name: string;
}

const LazyLayout = lazy(() => import("../01-Lazyload/layout/LazyLayout"));

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        components: LazyLayout,
        name: 'LazyLayout - Dash',
    },
    {
        to: '/no-lazy',
        path: '/no-lazy/*',
        components: NoLazy,
        name: 'NoLazy - Dash',
    },
]