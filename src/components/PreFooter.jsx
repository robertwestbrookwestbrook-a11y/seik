export default function PreFooter() {
	return (
		<section className="bg-[#101411] border-t border-[#000100]">
			<div className="mx-auto max-w-7xl px-6 py-20">
				<div className="flex flex-col gap-10 rounded-3xl border border-[#000100] bg-[#132a15] p-10 md:flex-row md:items-center md:justify-between">

					{/* COPY */}
					<div className="max-w-md space-y-4">
						<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-[#e3be77]">
							Network Updates
						</h3>
						<p className="text-[#445042] leading-relaxed">
							Receive protocol updates, governance notices,
							security advisories, and ecosystem releases.
						</p>
					</div>

					{/* FORM */}
					<div className="w-full max-w-lg space-y-4">
						<form className="flex flex-col gap-4 sm:flex-row">
							<input
								required
								type="email"
								placeholder="Email address"
								className="flex-1 rounded-xl border border-[#000100] bg-[#101411] px-5 py-4 text-sm text-[#e3be77] placeholder:text-[#445042] outline-none focus:border-[#5ec768]"
								name="email"
							/>
							<button
								type="submit"
								className="rounded-xl border border-[#000100] bg-[#132a15] px-6 py-4 text-sm text-[#e3be77] hover:border-[#5ec768] transition"
							>
								Subscribe
							</button>
						</form>

						<p className="text-xs text-[#445042]">
							By subscribing, you agree to receive network communications.
							Read our{" "}
							<a
								href="/privacy-policy-homepage-web"
								className="text-[#e3be77] hover:underline"
								target="_blank"
								rel="noreferrer"
							>
								Privacy Policy
							</a>.
						</p>
					</div>

				</div>
			</div>
		</section>
	);
}
