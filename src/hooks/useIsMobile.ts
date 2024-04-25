import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

function useIsMobile(maxWidth: number = 767): boolean {
	const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= maxWidth);

	useEffect(() => {
		const handleResize = throttle(() => {
			setIsMobile(window.innerWidth <= maxWidth);
		}, 100);

		window.addEventListener('resize', handleResize);

		return () => {
			handleResize.cancel();
			window.removeEventListener('resize', handleResize);
		};
	}, [maxWidth]);

	return isMobile;
}

export default useIsMobile;
