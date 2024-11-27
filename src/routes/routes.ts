import { lazy, LazyExoticComponent } from "react";

type JSXComponents = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    components: LazyExoticComponent<JSXComponents> | JSXComponents;
    name: string;
}

const LazyPage1 = lazy(() => import("../01-Lazyload/pages/LazyPage1"));
const LazyPage2 = lazy(() => import("../01-Lazyload/pages/LazyPage2"));
const LazyPage3 = lazy(() => import("../01-Lazyload/pages/LazyPage3"));

export const routes: Route[] = [
    {
        to: '/lazy-1',
        path: 'lazy-1',
        components: LazyPage1,
        name: 'Lazy-1',
    },
    {
        to: '/lazy-2',
        path: 'lazy-2',
        components: LazyPage2,
        name: 'Lazy-2',
    },
    {
        to: '/lazy-3',
        path: 'lazy-3',
        components: LazyPage3,
        name: 'Lazy-3',
    },
]