import FullComment from "./pages/FullComment/FullComment";
import HomePage from "./pages/HomePage";
import NewComment from "./pages/NewComment/NewComment";
import NotFound from "./pages/NotFound";

const routes = [ 
    { path: "/comment/:id", component: FullComment},
    { path: "/new-comment", component: NewComment},
    { path: "/", component: HomePage, exact: true },
    {component: NotFound},
]

export default routes;
