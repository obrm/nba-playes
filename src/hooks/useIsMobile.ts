import { useState, useEffect } from 'react';

function useIsMobile(): boolean {
	const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= 767);

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 767);
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobile;
}

export default useIsMobile;
