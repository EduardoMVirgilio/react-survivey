import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Survey from "./pages/Survey"
import SurveyDetail from "./pages/SurveyDetail"
import SurveyCreate from "./pages/SurveyCreate"
import SurveyEdit from "./pages/SurveyEdit"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      {
        path: "surveys",
        element: <Survey />,
        children: [
          { path: ":id", element: <SurveyDetail /> },
          { path: "new", element: <SurveyCreate /> },
          { path: "edit/:id", element: <SurveyEdit /> }
        ]
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />

export default App