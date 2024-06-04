import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Accommodations from "./pages/Accommodations/Accommodations";
import ThingsToDo from "./pages/ThingsToDo/ThingsToDo";
import Home from "./pages/Home/Home";
import "./styles/main.sass";
import Book from "./pages/Book/Book";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div className="is-main-fonts">
				<Home />
			</div>
		)
	},
	{
		path: "/about-us",
		element: (
			<div className="is-main-fonts">
				<AboutUs />
			</div>
		)
	},
	{
		path: "/accommodations",
		element: (
			<div className="is-main-fonts">
				<Accommodations />
			</div>
		)
	},
	{
		path: "/things-to-do",
		element: (
			<div className="is-main-fonts">
				<ThingsToDo />
			</div>
		)
	},
	{
		path: "/book-now",
		element: (
			<div className="is-main-fonts">
				<Book />
			</div>
		)
	}
]);

function App() {
	return <RouterProvider router={router}/>
}

export default App;
