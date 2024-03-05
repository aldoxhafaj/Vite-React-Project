import { Dashboard } from "@containers/Dashboard";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
		</Routes>
	);
};

export default App;
