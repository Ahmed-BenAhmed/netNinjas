import React from "react";
import {
    BrowserRouter as Router,
    RouterProvider,
    createBrowserRouter,
    LinkProps as RouterLinkProps, Link as RouterLink
} from "react-router-dom";
import SearchForVoyageurComponent from "./pages/SearchForVoyageurComponent"
import './App.css';
import {NewVoyage} from "./pages/voyagePages/NewVoyage";
import {NavBar} from "./layout/NavBar";
import {VoyagesPage} from "./pages/voyagePages/VoyagesPage";
import {SendPackagePage} from "./pages/cashPackagesPages/SendPackagePage";
import {CashPackagesPage} from "./pages/cashPackagesPages/CashPackagesPage";
import {createTheme, ThemeProvider} from "@mui/material";
import {orange} from "@mui/material/colors";
import {LinkProps} from "@mui/material/Link";
import MainLayout from "./layout/MainLayout";
import {HelloWorld} from "./pages/HelloWorld";
import {PdfPage} from "./pages/PdfPage";
import {LogInPage} from "./pages/UserPages/LogInPage";
import {RegisterPage} from "./pages/UserPages/RegisterPage";
import UserPageLayout from "./layout/UserPageLayout";
import {UserAccountSettings} from "./pages/UserPages/UserAccountSettings";


const LinkBehavior = React.forwardRef<
    HTMLAnchorElement,
    Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
    >((props, ref) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />;
});


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <SearchForVoyageurComponent />
            },
            {
                path: "/login",
                element: <LogInPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/newVoyage",
                element: <NewVoyage />
            },

            {
                path: "/voyageur_a/:city",
                element: <VoyagesPage type={"to"} />
            },
            {
                path: "/voyageur_du/:city",
                element: <VoyagesPage type={"from"} />
            },
            {
                path: "/send_package/:voyageId",
                element: <SendPackagePage />
            },
            {
                path: "/voyageurs",
                element: <HelloWorld />
            },
            {
                path: "/cashpackages",
                element: <CashPackagesPage />
            }
        ]
    },
    {
        path: "/app",
        element: <UserPageLayout />,
        children: [
            {
                path: "/app",
                element: <UserAccountSettings />
            }
        ]
    },
    {
        path: "/pdfPage",
        element: <PdfPage />
    }
])

const outerTheme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
});

const App: React.FC = () => {

    return (
        <ThemeProvider theme={outerTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>

  );
}

export default App;