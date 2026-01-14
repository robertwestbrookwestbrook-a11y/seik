import { useState } from "react";
import WalletModal from "./WalletModal";

export default function Seeker() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className="bg-[#101411] border-t border-[#000100]">
			<div className="mx-auto max-w-7xl px-6 py-28 space-y-20">

				{/* HEADER */}
				<header className="text-center space-y-6 max-w-3xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#e3be77]">
						Seeker Device
					</h2>

					<p className="text-lg text-[#445042] leading-relaxed">
						A mobile device built for verified access to the Seeker
						ecosystem. Secure hardware, authenticated identity,
						and native support for on-chain applications.
					</p>

					<div className="flex justify-center gap-4 pt-4">
						<button
							onClick={() => setIsModalOpen(true)}
							className="rounded-xl bg-[#132a15] border border-[#000100] px-6 py-3 text-[#e3be77] hover:border-[#5ec768] transition"
						>
							Enter Ecosystem
						</button>

						<button
							className="rounded-xl border border-[#000100] px-6 py-3 text-[#445042] hover:text-[#e3be77] transition"
						>
							View Specifications
						</button>
					</div>
				</header>

				{/* CONTENT GRID */}
				<div className="grid gap-12 min-[1400px]:grid-cols-[1fr_480px]">

					{/* FEATURE GRID */}
					<div className="grid grid-cols-2 gap-6 order-2 min-[1400px]:order-1">

						{[
							// {
							// 	label: "Genesis Token",
							// 	media: (
							// 		<video autoPlay loop muted playsInline className="h-full w-full object-cover">
							// 			<source src="/seeker-genesis-final.mp4" type="video/mp4" />
							// 		</video>
							// 	)
							// },
							{
								label: "SKR Distribution",
								media: (
									<img src="/skr-tokens.png" className="h-full w-full object-contain" />
								)
							},
							// {
							// 	label: "Seed Vault Wallet",
							// 	media: (
							// 		<img src="/seedvault.webp" className="h-full w-full object-cover" />
							// 	)
							// },
							{
								label: "Seeker ID",
								media: (
									<video autoPlay loop muted playsInline className="h-full w-full object-cover">
										<source src="/seeker-card.mp4" type="video/mp4" />
									</video>
								)
							}
						].map(({ label, media }) => (
							<div key={label} className="space-y-3">
								<div className="relative h-[220px] sm:h-[300px] overflow-hidden rounded-2xl border border-[#000100] bg-[#132a15]">
									{media}
								</div>
								<p className="text-sm text-[#445042]">{label}</p>
							</div>
						))}
					</div>

					{/* DAPP STORE */}
					<div className="order-1 min-[1400px]:order-2 space-y-4">
						<div className="relative h-[520px] overflow-hidden rounded-3xl border border-[#000100] bg-[#132a15]">
							<img
								src="/dapp-store.webp"
								alt="Seeker dApp Store"
								className="absolute inset-0 h-full w-full object-contain"
							/>
						</div>
						<p className="text-sm text-[#445042]">
							Access a growing ecosystem of verified Solana applications.
						</p>
					</div>

				</div>
			</div>

			<WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</section>
	);
}
