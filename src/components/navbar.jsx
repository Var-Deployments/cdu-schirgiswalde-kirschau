'use client'


import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Disclosure} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import ThemeToggle from "@/components/theme-toggle";
import Logo from "./logo.jsx";


const NavBar = ({instance}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 638);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const navigation = [
        {name: 'Startseite', href: '/'},
        {name: 'Kandidaten', href: '#candidates'},
        {name: 'Wahlprogramm', href: '/services'},
        {name: 'Kontakt', href: '/contact'},
    ];

    return (
        <Disclosure as="nav"
                    className="fixed top-0 left-0 z-50 flex h-16 w-[100vw] items-center justify-center backdrop-blur-lg transition-all duration-300 data-[scrolled=true]:bg-white/80 data-[scrolled=true]:shadow-md dark:data-[scrolled=true]:bg-gray-950/80">
            {({open}) => (
                <div className="w-full md:w-auto">
                    <div className="max-w-7xl sm:w-full mx-2 md:mx-auto px-4 sm:px-2 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center z-20">
                                    <Link href="/" legacyBehavior={false}
                                          className="flex flex-row items-center justify-center">
                                        <Logo instance={instance}></Logo>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href} legacyBehavior={false}>
                                            <span
                                                className="text-neutral-800 hover:bg-gray-700/15 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-100/20 px-3 py-2 rounded-md text-sm font-medium">
                                                {item.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {!isMobile && (
                                <div
                                    className="lg:mr-0 mr-4 flex ml-4 items-center justify-center text-2xl text-black dark:text-white">
                                    <ThemeToggle duration={750} toggled={!isDarkMode} toggle={toggleTheme}/>
                                </div>)}
                            <div className="-mr-2 flex items-center justify-center sm:hidden z-20 fixed top-4 right-6">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-400 hover:text-white hover:bg-gray-200 dark:hover:bg-gray-100/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6 text-gray-600 dark:text-gray-300"
                                                   aria-hidden="true"/>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6 text-gray-600 dark:text-gray-300"
                                                   aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel
                        className="sm:hidden fixed top-0 left-0 h-[100vh] w-[100vw] flex flex-col items-center dark:bg-neutral-950 bg-white z-10">
                        <div className="w-full p-2 pt-2 pb-3 space-y-2 mt-20">
                            {navigation.map((item) => (
                                <Link className="w-full" key={item.name} href={item.href} legacyBehavior={false}>
                                    <span
                                        className="text-2xl text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-300/10 block pl-6 px-3 py-2 rounded-md">
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                            <div
                                className="ml-5 !mt-8 items-center justify-center !text-4xl text-black dark:text-white">
                                {isMobile && (
                                    <ThemeToggle duration={750} toggled={!isDarkMode} toggle={toggleTheme}/>)}
                            </div>
                        </div>

                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
};

NavBar.displayName = 'NavBar';
export default NavBar;