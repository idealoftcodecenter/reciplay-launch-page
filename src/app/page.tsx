"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ShareButton from "@/components/ShareButton";
import RecipeSwiper from "@/components/RecipeSwiper";
import ArrowNext from "@/components/ArrowNext";
import Drawer from "@/components/Drawer";

export default function Home() {

	const [showAboutUs, setShowAboutUs] = useState<boolean>(false);
	const [showAboutChef, setShowAboutChef] = useState<boolean>(false);
	const [showVideo, setShowVideo] = useState<boolean>(false);
	const [currentSlide, setCurrentSlide] = useState<number>(0);

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

	return <>
		<Drawer isActive={showAboutUs} setIsActive={setShowAboutUs}>
			<h1 className="text-xl font-bold">About Us</h1>
			<p className="mt-4 text-sm leading-[1.3em]">Sundar and Nishi met three years ago and decided to work on something very close to their hearts. Food, Presentation and the Joy of Sharing.</p>
			<p className="mt-3 text-sm leading-[1.3em]">Engineering Precision met Emotions, Design and Presentation and it was love at first sight for both with their NEW IDEA.</p>
			<p className="mt-3 text-sm leading-[1.3em]">Having toiled for 3 years on this patented idea for a Recipe Player, we are close to a launch, but not before a sneak peek for our closest friends, family and well wishers.</p>
			<p className="mt-3 text-sm leading-[1.3em]">If you are reading this, your Feedback may change our future for the better. Please do not forget to share your candid feedback.</p>
			<p className="mt-3">
				<Image src="/assets/cont/nishi-bhat.webp" alt="Nishi Bhat : Design and Stategy partner" className="inline-block w-[70px] h-[70px]" width={70} height={70} />
				<Image src="/assets/cont/sundar.webp" alt="Nishi Bhat : Design and Stategy partner" className="inline-block w-[70px] h-[70px] ml-6" width={70} height={70} />
			</p>
			<p className="mt-3 text-sm leading-[1.3em]">Made with love & patience over 3 years, <br /><span className="underline">Nishi Bhat</span> &amp; <span className="underline">Sundar K</span></p>
			<footer className="px-[32px] pb-[32px] mt-8">
				<Link target='_blank' href="https://wa.me/9372392734" passHref={true} className="block h-[40px] leading-[40px] w-full bg-[#6D50E8] rounded-full text-white text-sm text-center font-bold relative shadow-about-us-btn">
					I want to Know More
					<Image src="/assets/icns/WhatsApp.webp" alt="WhatsApp" className="absolute top-[8px] right-[24px] inline-block w-[24px] h-[24px]" width={24} height={24} />
				</Link>
			</footer>
		</Drawer>

		<Drawer isActive={showAboutChef} setIsActive={setShowAboutChef}>
			<header className="flex w-full items-end justify-between border-b-2 border-b-black px-[12px]">
				<section>
					<h4 className="text-xs font-bold text-[#263238]/[.5]">CHEF</h4>
					<h1 className="text-xl font-bold leading-[1.1em] mt-2">Khursheed<br />Alam</h1>
					<p className="text-xs mt-4 mb-3">a.k.a <span className="font-bold">Bhargain Ka Chef</span></p>
				</section>
				<section className="text-right">
					<Image src="/assets/cont/khursheed-alam-with-yt-btn.webp" alt="Khursheed Alam" className="inline-block w-[102px] h-[124px]" width={102} height={124} />
				</section>
			</header>
			<section className="px-[12px]">
				<p className="pt-6 text-xs">Is a renowned chef, with over a million viewers whom we have onboarded to work on his content. To get a taste of what we have been cooking, we share one single recipe of his, Bhindi Popcorn, a truly unique snack which we hope you will try to cook for your family and share your feedback</p>
				<a href="#" className="flex items-center justify-between w-full bg-[#EBE7FC] rounded-[10px] p-[10px] my-8">
					<Image src="/assets/cont/recipe-slider/bhindi-popcorn.webp" className='inline-block h-[45px] w-[78px] rounded-xl border-1 border-[#F5C413]' alt="Bhindi Popcorn" width={200} height={200} />
					<span className="text-sm flex-grow font-bold pl-4 leading-[1.2em]">Explore Bhindi<br />Popcorn Now!</span>
					<ArrowNext />
				</a>
				<footer className="px-[32px] pb-[32px] mt-8">
					<Link target='_blank' href="https://wa.me/9372392734" passHref={true} className="block h-[40px] leading-[40px] w-full bg-[#6D50E8] rounded-full text-white text-sm text-center font-bold relative shadow-about-us-btn">I want to Know More</Link>
				</footer>
			</section>
		</Drawer>


		{
			showVideo && 
			<article className={`w-full px-[14px] fixed bottom-0 top-0 left-0 right-0 z-20 bg-black/[0.8] backdrop-blur-sm transition-all duration-100`} onClick={() => { setShowVideo(false); }}>
				<section className='max-w-[364px] mx-auto shadow-md h-auto px-[20px] pt-[42px] relative'>
					{/* Video goes here */}
				</section>
			</article>
		}

		
		<main className="w-full max-w-[392px] mx-auto pt-[60px]">
			{/* ======================================== Page header */}
			<header className="w-full flex items-center justify-between">
				<Link href="/" className="w-[158px] h-[62px] bg-[#DE503C] border-2 border-black flex items-center justify-center text-white text-[28px] leading-[20px] font-jersey">Cookable<br />Recipes.com</Link>
				<ShareButton />
			</header>
			
			{/* ======================================== Hero section */}
			<article className="w-full mt-[40px]">
				<h1 className="text-[28px] font-bold">Hi, there!</h1>
				<h3 className="font-bold text-[20px] leading-[24px]">We are ready to go LIVE, and<br />we&apos;d love to hear from you!</h3>
				<section className="w-full mt-4 bg-[#FBB900] pt-4">
					<header className="px-4">
						<h3 className="text-sm font-bold mb-1">Ready?</h3>
						<h1>
							<span className="inline-block text-xl font-bold text-white px-4 leading-normal bg-[#FF8F1F] border-2 border-black">
								{currentSlide === 0 ? "Test this Recipe" : "This one is up next"}
							</span>
							<Image src="/assets/icns/hand.png" alt="Test this Recipe" className="inline-block ml-2" width={19} height={25} />
						</h1>
					</header>
					<div className="w-full translate-y-[100px] mt-[-100px]">
						<RecipeSwiper setCurrentSlide={setCurrentSlide} />
					</div>
				</section>
			</article>
			
			{/* ======================================== Main Activity section */}
			<article className="mt-[130px] bg-[#F5ECDB] rounded-bl-[14px] rounded-br-[14px]">
				<header className="w-full rounded-tl-0 rounded-tr-0 rounded-br-0 rounded-bl-3xl bg-[#FFFCF7]">
					<Image src="/assets/cont/nishi-bhat.webp" alt="Nishi Bhat : Design and Stategy partner" className="inline-block w-[52px] h-[52px] ml-1 my-2" width={32} height={32} />
					<Image src="/assets/cont/sundar.webp" alt="Sunder : Founder" className="inline-block w-[52px] h-[52px] ml-4 my-2" width={32} height={32} />
				</header>
				<section className="py-[18px] pl-[18px] pr-[60px]">
					<section className="bg-white rounded-tl-0 rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] px-[20px] pt-[24px] pb-[26px]">
						<h2 className="text-sm font-bold">Hi, friends!</h2>
						<p className="text-sm mt-2 leading-[1.3em]">
							We are building a platform to share cookable recipe videos in any language. And we want to hear from you!
						</p>
					</section>
					<section className="flex items-center justify-between bg-white rounded-[14px] mt-[14px] px-[12px] py-[9px] cursor-pointer" onClick={() => setShowAboutUs(true)}>
						<Image src="/assets/icns/waving-hand.svg" alt="Ready our story" className="inline-block w-[26px] h-[26px]" width={26} height={26} />
						<div className="flex-grow">
							<h2 className="text-sm font-bold pl-3">Read Our Story</h2>
						</div>
						<ArrowNext />
					</section>
					<Link href="https://wa.me/9372392734" passHref={true} target="_blank" className="flex items-center justify-between bg-white rounded-[14px] mt-[14px] px-[12px] py-[9px] cursor-pointer">
						<Image src="/assets/icns/WhatsApp.webp" alt="Ready our story" className="inline-block w-[26px] h-[26px]" width={26} height={26} />
						<div className="flex-grow">
							<h2 className="text-sm font-bold pl-3">Interested? Let&apos;s Talk</h2>
						</div>
						<ArrowNext />
					</Link>
					<section className="flex items-center justify-between bg-white rounded-[14px] mt-[14px] px-[12px] py-[9px] cursor-pointer" onClick={sharePage}>
						<Image src="/assets/icns/shoutout.svg" alt="Ready our story" className="inline-block w-[26px] h-[26px]" width={26} height={26} />
						<div className="flex-grow">
							<h2 className="text-sm font-bold pl-3">Share this link!</h2>
						</div>
						<ArrowNext />
					</section>
					<section className="flex items-center justify-between bg-white rounded-[14px] mt-[14px] px-[12px] py-[9px] cursor-pointer" onClick={() => setShowAboutChef(true)}>
						<Image src="/assets/cont/recipe-slider/khursheed-alam.webp" alt="Ready our story" className="inline-block w-[26px] h-[26px]" width={26} height={26} />
						<div className="flex-grow">
							<h2 className="text-sm font-bold pl-3">About Khursheed Alam</h2>
						</div>
						<ArrowNext />
					</section>
				</section>
			</article>
			
			{/* ======================================== Video section */}
			<article className="mt-8 bg-[#F5ECDB] rounded-[14px] px-[18px] pt-[50px] flex">
				<header className="flex-grow">
					<h1 className="text-xl font-bold leading-[1.2em]">Explore cookable<br />recipe videos</h1>
					<h2 className="text-sm font-semibold mt-4 inline-block">
						How does it work?
						<button onClick={() => { setShowVideo(true); }} className="flex h-[32px] mt-1 items-center justify-between gap-3 px-3 bg-[#6D50E8] rounded-full text-white font-semibold text-sm">
							Watch Intro
							<span className="inline-block w-[20px] h-[20px] bg-white rounded-full">
								<span className="w-[20px] h-[20px] flex items-center justify-center group">
									<span className="inline-block w-[12px] h-[2px] bg-[#1D1C20] transition-all duration-500 group-hover:w-[16px] relative after:w-[8px] after:h-[8px] after:block after:border-t-2 after:border-r-2 after:border-[#1D1C20] after:absolute after:right-0 after:top-[-3px] after:rotate-45"></span>
								</span>
							</span>
						</button>
					</h2>
				</header>
				<figure className="w-[160px] relative">
					<Image src="/assets/cont/video-area/like.webp" alt="Like" className="w-[60px] h-[60px] absolute left-[-30px] top-[-30px]" width={48} height={48} />
					<Image src="/assets/cont/video-area/mobile.webp" alt="Cookable Recipes" className="w-full" width={140} height={140} />
				</figure>
			</article>
			
			{/* ======================================== Pre footer */}
			<article className="mt-8 relative">
				<h1 className="absolute left-[20px] top-[40px] font-jersey text-[38px] bold text-[#6D50E8] leading-[0.8em]">Made with love <br/>[for food]</h1>
				<Image src="/assets/cont/pre-footer/made-with-love-for-food.webp" width={400} height={270} alt="Made with love for food" className="inline-blokc w-full h-auto" />
			</article>

			{/* ======================================== Footer section */}
			<footer className="w-ful bg-[#6D50E8] py-3">
				<p className="text-xs text-white text-center flex items-center justify-center gap-2"><span className="text-[24px]">&copy;</span> <span>Copyright 2024</span></p>
			</footer>
		</main>;
	</>
}