import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, CreateTemplate, SelectTemplate, Calculate } from "./pages";
import "./App.css";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			Component: Home
		},
		{
			path: "/create-template",
			Component: CreateTemplate
		},
		{
			path: "/select-template",
			Component: SelectTemplate
		},
		{
			path: "/calculate",
			Component: Calculate
		}
	]);

	return <RouterProvider router={router} />;
};

export default App;
