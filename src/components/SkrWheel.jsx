export default function SkrWheel() {
    return (
        <section className="bg-[#101411] border-t border-[#000100]">
            <div className="mx-auto max-w-7xl px-6 py-28 space-y-20">

                {/* HEADER */}
                <header className="text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#e3be77]">
                        SKR Economic Flywheel
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-[#445042]">
                        SKR coordinates incentives across the ecosystem, aligning
                        builders, users, hardware providers, and verifiers through
                        ownership and on-chain rewards.
                    </p>
                </header>

                {/* CONTENT */}
                <div className="grid gap-16 min-[1420px]:grid-cols-2 items-center">

                    {/* ROLES */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {[
                            {
                                title: "Developers",
                                lead: "Capture value from the applications you build.",
                                body: "Deploy without platform rent. Earn directly from usage, distribution, and SKR-aligned incentives."
                            },
                            {
                                title: "Users",
                                lead: "Participate as owners, not products.",
                                body: "Access verified applications while earning rewards for meaningful participation."
                            },
                            {
                                title: "Hardware Providers",
                                lead: "Distribute trust-verified devices globally.",
                                body: "Integrate with the platform to reach on-chain users through secure mobile hardware."
                            },
                            {
                                title: "Guardians",
                                lead: "Maintain network integrity.",
                                body: "Verify devices, applications, and actors to uphold system trust and earn protocol rewards."
                            }
                        ].map(({ title, lead, body }) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-[#000100] bg-[#132a15] p-6 space-y-4"
                            >
                                <p className="text-xs uppercase tracking-widest text-[#445042]">
                                    {title}
                                </p>
                                <p className="text-sm font-medium text-[#e3be77]">
                                    {lead}
                                </p>
                                <p className="text-sm text-[#445042] leading-relaxed">
                                    {body}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* VISUAL */}
                    <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden">
                        <video
                            className="absolute inset-0 h-full w-full object-contain min-[1420px]:object-cover opacity-90"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/flywheel.mp4" type="video/mp4" />
                        </video>
                    </div>

                </div>

                {/* FOOTNOTE */}
                <p className="text-center text-sm text-[#445042]">
                    SKR functions as the incentive layer coordinating economic
                    activity across the Seeker ecosystem.
                </p>
            </div>
        </section>
    );
}
