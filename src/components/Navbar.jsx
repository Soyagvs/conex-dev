import { useState } from 'preact/hooks';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="pt-10">
            <nav className="flex justify-center gap-5 items-center max-sm:hidden">
                <h3 className="flex items-center text-3xl font-bold">
                    C
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        ></path>
                    </svg>
                    NEX
                </h3>
                <ol className="flex justify-between border rounded-2xl h-12 items-center bg-[#E2E2E2]">
                    <div className="flex gap-10 px-10">
                        <li className="text-base">
                            <a href="/">Home</a>
                        </li>
                        <li className="text-base">
                            <a href="/about/">About</a>
                        </li>
                        <li className="text-base">
                            <a href="/faq/">FAQ</a>
                        </li>
                        <li className="text-base text-[#7F56D9]">
                            <a href="/projects/">Projects</a>
                        </li>
                    </div>
                </ol>
            </nav>
            <div className="flex justify-end items-end mx-10 sm:hidden">
                <button id="openModalButton" onClick={toggleModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                id="modal"
                className={`sm:hidden fixed inset-0 z-50 flex-col justify-center items-center bg-black bg-opacity-50 pl-60 pt-10 ${isModalOpen ? '' : 'hidden'}`}
            >
                <div className="bg-white w-52 h-auto rounded-lg flex flex-col p-5 relative">
                    <div className="space-y-9 flex flex-col">
                        <a className="border-b" href="/">Home</a>
                        <a className="border-b" href="/about/">About</a>
                        <a className="border-b" href="/faq/">FAQ</a>
                        <a className="border-b" href="/projects/">Projects</a>
                    </div>
                    <div className="flex justify-start items-center mt-9">
                        <a
                            className="bg-green-500 h-8 w-20 rounded-lg flex justify-center items-center"
                            href="/auth/"
                        >
                            ingresar
                        </a>
                    </div>
                    <button id="closeModalButton" className="absolute top-2 right-2" onClick={toggleModal}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
