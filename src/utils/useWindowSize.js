/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const getWidth = () =>{
	return {
		width: window.innerWidth
	}
}

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWidth());
	const handleResize = () => setWindowDimensions(getWidth());
	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
};
