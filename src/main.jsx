import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import Error from "./pages/error/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./contexts/jobcontext/JobContext.jsx";
import JobDetails from "./pages/job_details/JobDetails.jsx";
import ApplayedJob from "./pages/home/applayed_job/ApplayedJob.jsx";

const route = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/details/:id",
				element: <JobDetails />,
			},
			{
				path: "/applied",
				element: <ApplayedJob />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<RouterProvider router={route}>
			<App />
		</RouterProvider>
	</ContextProvider>
);
