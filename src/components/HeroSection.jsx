import React, {useState} from "react";
import WalletModal from "./WalletModal";

const HeroSection = () => {
		const [isModalOpen, setIsModalOpen] = useState(false);
	
		const handleOpenModal = () => setIsModalOpen(true);
		const handleCloseModal = () => setIsModalOpen(false);
	
	return (
		<section className="relative bg-[#101411] border-b border-[#000100]">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">

					{/* LEFT: CONTENT */}
					<div className="space-y-10">

						{/* Identity */}
						<div className="space-y-4">
							<span className="inline-block text-xs tracking-widest uppercase text-[#445042]">
								Native Digital Asset
							</span>

							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#e3be77]">
								Seeker Protocol
							</h1>

							<p className="max-w-xl text-lg leading-relaxed text-[#445042]">
								Seeker is an on-chain asset powering mobile-first
								infrastructure on Solana. Built for secure access,
								settlement, and programmable ownership.
							</p>
						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4">
							<button 
							className="inline-flex items-center justify-center rounded-xl bg-[#132a15] border border-[#000100] px-6 py-3 text-[#e3be77] hover:border-[#5ec768] transition"
							onClick={handleOpenModal}
							>
								Enter App
							</button>

							<a
								href="#"
								className="inline-flex items-center justify-center rounded-xl border border-[#000100] px-6 py-3 text-[#445042] hover:text-[#e3be77] transition"
							>
								Read Documentation
							</a>
						</div>

						{/* Context Signals */}
						<div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#000100] max-w-md">
							<div>
								<div className="text-sm font-medium text-[#e3be77]">
									Solana
								</div>
								<div className="text-xs text-[#445042]">
									Base Network
								</div>
							</div>

							<div>
								<div className="text-sm font-medium text-[#e3be77]">
									SKR
								</div>
								<div className="text-xs text-[#445042]">
									Native Asset
								</div>
							</div>

							<div>
								<div className="text-sm font-medium text-[#5ec768]">
									Mainnet
								</div>
								<div className="text-xs text-[#445042]">
									Live
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT: VISUAL */}
					<div className="relative">
						<div className="aspect-square rounded-2xl bg-[#132a15] overflow-hidden">
							<img
								src="/hero.png"
								alt="Seeker protocol visualization"
								className="h-full w-full object-cover opacity-90"
							/>
						</div>

						{/* Architectural framing */}
						{/* <div className="pointer-events-none absolute -inset-6 rounded-3xl border border-[#000100]/40" /> */}
					</div>

				</div>
			</div>
			<WalletModal isOpen={isModalOpen} onClose={handleCloseModal} />
		</section>
		
	);
};

export default HeroSection;
