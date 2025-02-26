import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("charaPage", "routes/charaPage.tsx"),
    route("Page", "routes/Page.tsx"),
] satisfies RouteConfig;
