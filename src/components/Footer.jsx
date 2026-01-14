export default function Footer() {
	return (
		<footer className="bg-[#101411] border-t border-[#000100]">
			<div className="mx-auto max-w-7xl px-6 py-16 space-y-12">

				{/* TOP GRID */}
				<div className="grid gap-10 md:grid-cols-3">

					{/* PROTOCOL */}
					<div className="space-y-4">
						<h4 className="text-sm font-medium text-[#e3be77] uppercase tracking-wide">
							Ecosystem
						</h4>
						<ul className="space-y-2 text-sm text-[#445042]">
							<li><a href="#" className="hover:text-[#e3be77]">Press Kit</a></li>
							<li><a href="#" className="hover:text-[#e3be77]">Support</a></li>
							<li><a href="#" className="hover:text-[#e3be77]">Deposit Agreement</a></li>
						</ul>
					</div>

					{/* LEGAL */}
					<div className="space-y-4">
						<h4 className="text-sm font-medium text-[#e3be77] uppercase tracking-wide">
							Legal
						</h4>
						<ul className="space-y-2 text-sm text-[#445042]">
							<li><a href="#" className="hover:text-[#e3be77]">Terms of Service</a></li>
							<li><a href="#" className="hover:text-[#e3be77]">Terms of Sale</a></li>
							<li><a href="#" className="hover:text-[#e3be77]">Privacy Policy</a></li>
							<li><a href="#" className="hover:text-[#e3be77]">Return Policy</a></li>
							<li><a href="#" className="hover:text-[#e3be77]">Cookie Policy</a></li>
							<li>
								<a
									href="#"
									className="ot-sdk-show-settings hover:text-[#e3be77]"
								>
									Cookie Settings
								</a>
							</li>
						</ul>
					</div>

					{/* COMPANY */}
					<div className="space-y-4">
						<h4 className="text-sm font-medium text-[#e3be77] uppercase tracking-wide">
							Company
						</h4>
						<ul className="space-y-2 text-sm text-[#445042]">
							<li>
								<a
									href="#"
									target="_blank"
									rel="noreferrer"
									className="hover:text-[#e3be77]"
								>
									Warranty
								</a>
							</li>
						</ul>
					</div>

				</div>

				{/* BOTTOM BAR */}
				<div className="flex flex-col items-center justify-between gap-6 border-t border-[#000100] pt-6 md:flex-row">

					<p className="text-sm text-[#445042]">
						© 2025 Seeker.
					</p>

					<div className="flex items-center gap-4">
						<a
							href="#"
							target="_blank"
							rel="noreferrer"
							className="text-[#445042] hover:text-[#e3be77]"
						>
							Discord
						</a>
						<a
							href="#"
							target="_blank"
							rel="noreferrer"
							className="text-[#445042] hover:text-[#e3be77]"
						>
							X
						</a>
					</div>

				</div>
			</div>
		</footer>
	);
}
