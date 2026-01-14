import React, { useState } from "react";
import { Menu, X, Wallet } from "lucide-react";
import WalletModal from "./WalletModal";

/* ---------- Header ---------- */
const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<>
			<header className="sticky top-0 z-40 border-b border-[#000100] bg-[#101411]/80 backdrop-blur-md">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 lg:h-20 items-center justify-between">

						{/* Brand */}
						<div className="flex items-center gap-3">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#132a15]">
								<img src="/logo.png" />
							</div>
							<span className="text-lg font-semibold text-[#e3be77] tracking-tight">
								SEEKER
							</span>
						</div>

						{/* Desktop Nav */}
						<nav className="hidden lg:flex items-center gap-6">
							{["Markets", "Protocols", "Developers", "Governance"].map(link => (
								<a
									key={link}
									href="#"
									className="text-sm text-[#445042] hover:text-[#e3be77] transition"
								>
									{link}
								</a>
							))}
						</nav>

						{/* Actions */}
						<div className="hidden lg:flex items-center gap-4">
							<div className="text-xs text-[#445042]">
								Network: <span className="text-[#5ec768]">Mainnet</span>
							</div>

							<button
								onClick={() => handleOpenModal()}
								className="flex items-center gap-2 rounded-lg bg-[#132a15] border border-[#000100] px-4 py-2 text-sm text-[#e3be77] hover:border-[#5ec768] transition"
							>
								Connect Wallet
							</button>
						</div>

						{/* Mobile Toggle */}
						<button
							onClick={() => setMobileOpen(true)}
							className="lg:hidden text-[#e3be77]"
						>
							<Menu />
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div className="fixed inset-0 z-50 bg-[#101411]">
					<div className="flex items-center justify-between p-4 border-b border-[#000100]">
						<span className="text-[#e3be77] font-semibold">Phantom</span>
						<button onClick={() => setMobileOpen(false)}>
							<X className="text-[#e3be77]" />
						</button>
					</div>

					<nav className="p-6 space-y-4">
						{["Markets", "Protocols", "Developers", "Governance"].map(link => (
							<a
								key={link}
								href="#"
								className="block text-lg text-[#445042] hover:text-[#e3be77]"
							>
								{link}
							</a>
						))}

						<button
							onClick={() => {
								handleOpenModal();
								setMobileOpen(false);
							}}
							className="mt-6 w-full rounded-xl bg-[#132a15] border border-[#000100] py-3 text-[#e3be77]"
						>
							Connect Wallet
						</button>
					</nav>
				</div>
			)}
			<WalletModal isOpen={isModalOpen} onClose={handleCloseModal} />
		</>
	);
};

export default Header;
