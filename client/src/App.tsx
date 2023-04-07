import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserLayout} from "./Components/Layout/UserLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./Components/Layout/MainLayout";
import {HomePage} from "./Pages/HomePage";
import {ProjectsListComponents} from "./Components/Project/List/ProjectsListComponents";
import {GroupsPage} from "./Pages/GroupsPage";
import {WorkspacePage} from "./Pages/WorkspacePage";
import {DetailProjectComponent} from "./Components/Project/Detail/DetailProjectComponent";
import {DetailGroupComponent} from "./Components/Group/Detail/DetailGroupComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <div>hello world</div>
            }
        ]
    },
    {
        path: "/app",
        element: <UserLayout />,
        children: [
            {
                path: "/app/",
                element: <HomePage />
            },
            {
                path: "/app/projects",
                children: [
                    {
                        path: "/app/projects/list",
                        element: <ProjectsListComponents />
                    },
                    {
                        path: `/app/projects/project/:projectId`,
                        element: <DetailProjectComponent />
                    },
                ]
            },
            {
                path: "/app/groups",
                children: [
                    {
                        path: "/app/groups/list",
                        element: <GroupsPage />
                    },
                    {
                        path: `/app/groups/group/:groupId`,
                        element: <DetailGroupComponent />
                    }
                ]
            },

            {
                path: "/app/workspace",
                element: <WorkspacePage />
            }
        ]
    }
])
const App = () => {
    return <RouterProvider router={router} />
}

export default App;