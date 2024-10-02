"use client";

import Image from "next/image";

const ShareButton = () => {
    const sharePage = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: 'All new patented recipe player',
					text: 'Convert any recipe into a cookable recipe. Share with chefs!',
					url: window.location.href,
				});
				console.log('Page shared successfully');
			} catch (error) {
				console.error('Error sharing the page:', error);
			}
		} else {
			console.warn('Web Share API is not supported in this browser.');
		}
	};

    return (
        <button onClick={sharePage} className="w-[48px] h-[48px] bg-[#EBE7FC] border-2 border-black rounded-full flex items-center justify-center">
            <Image src="/assets/icns/share.svg" className='w-[22px] h-[22px]' alt="Menu" width={22} height={22} />
        </button>
    );
}

export default ShareButton;
