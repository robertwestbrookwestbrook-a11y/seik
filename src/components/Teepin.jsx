import { useState } from "react";
import WalletModal from "./WalletModal";

export default function Teepin() {
        const [isModalOpen, setIsModalOpen] = useState(false);
    
        const handleOpenModal = () => setIsModalOpen(true);
        const handleCloseModal = () => setIsModalOpen(false);
    

    return (
        <section className="bg-[#101411] border-t">
            <div className="mx-auto max-w-7xl px-6 py-24 space-y-24">

                {/* HEADER */}
                <header className="text-center space-y-6">
                    <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#e3be77]">
                        TEEPIN
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-[#445042]">
                        Trusted Execution Environment Platform Infrastructure Network.
                        A decentralized foundation for verified devices, users, and applications.
                    </p>
                </header>

                {/* ACTIONS */}
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        "Seeker Confirmation",
                        "Region Validation",
                        "Device Rectification",
                        "Shipping Status"
                    ].map(label => (
                        <button
                            key={label}
                            onClick={() => setIsModalOpen(true)}
                            className="rounded-xl border bg-[#132a15] px-6 py-3 text-sm text-[#e3be77] hover:border-[#5ec768] transition"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* LAYERS */}
                <div className="space-y-32">

                    {/* HARDWARE */}
                    <section className="grid lg:grid-cols-2 gap-16 items-center">
                        <img
                            src="/download.png"
                            alt="Secure hardware layer"
                            className="rounded-2xl"
                        />

                        <div className="space-y-8">
                            <p className="text-xs uppercase tracking-widest text-[#445042]">
                                Hardware Layer
                            </p>

                            <h3 className="text-3xl md:text-4xl font-medium text-[#e3be77]">
                                Secure crypto hardware with verifiable trust
                            </h3>

                            <ul className="space-y-6">
                                <li>
                                    <p className="font-medium text-[#e3be77]">Verifiable State</p>
                                    <p className="text-[#445042]">
                                        Devices attest to identity, boot integrity, and software authenticity.
                                    </p>
                                </li>
                                <li>
                                    <p className="font-medium text-[#e3be77]">Hardware-Backed Trust</p>
                                    <p className="text-[#445042]">
                                        TEE-based proofs enable tamper-resistant on-chain verification.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* PLATFORM */}
                    <section className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <p className="text-xs uppercase tracking-widest text-[#445042]">
                                Platform Layer
                            </p>

                            <h3 className="text-3xl md:text-4xl font-medium text-[#e3be77]">
                                Where verified dApps meet authenticated users
                            </h3>

                            <ul className="space-y-6">
                                <li>
                                    <p className="font-medium text-[#e3be77]">On-Chain Verification</p>
                                    <p className="text-[#445042]">
                                        Device and builder status validated against smart contracts.
                                    </p>
                                </li>
                                <li>
                                    <p className="font-medium text-[#e3be77]">Global Distribution</p>
                                    <p className="text-[#445042]">
                                        Verified applications reach users worldwide without excessive friction.
                                    </p>
                                </li>
                                <li>
                                    <p className="font-medium text-[#e3be77]">Authentic Userbase</p>
                                    <p className="text-[#445042]">
                                        Unique, high-signal users access the next generation of on-chain products.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <img
                            src="/download1.png"
                            alt="Platform layer"
                            className="rounded-2xl border"
                        />
                    </section>

                    {/* VERIFICATION */}
                    <section className="grid lg:grid-cols-2 gap-16 items-center">
                        <img
                            src="/download2.png"
                            alt="Verification network"
                            className="rounded-2xl border"
                        />

                        <div className="space-y-8">
                            <p className="text-xs uppercase tracking-widest text-[#445042]">
                                Verification Layer
                            </p>

                            <h3 className="text-3xl md:text-4xl font-medium text-[#e3be77]">
                                A decentralized trust network spanning devices and applications
                            </h3>

                            <p className="text-[#445042]">
                                TEEPIN establishes a shared verification fabric that allows
                                assets, applications, and identities to interact with provable trust.
                            </p>

                            <p className="text-sm text-[#5ec768]">
                                Network status: Active
                            </p>
                        </div>
                    </section>

                </div>
            </div>

            <WalletModal isOpen={isModalOpen} onClose={handleCloseModal} />

        </section>
    );
}
