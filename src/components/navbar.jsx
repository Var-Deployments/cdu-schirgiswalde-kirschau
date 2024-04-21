'use client'


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import "@theme-toggles/react/css/Expand.css"
import ThemeToggle from "@/components/theme-toggle";


const NavBar = ({ instance }) => {
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-center backdrop-blur-lg transition-all duration-300 data-[scrolled=true]:bg-white/80 data-[scrolled=true]:shadow-md dark:data-[scrolled=true]:bg-gray-950/80">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/" legacyBehavior={false} className="flex flex-row items-center justify-center">
                                        <Image
                                            src="/img/saxon-union-icon.png"
                                            alt="Saxon Union Icon"
                                            width={25}
                                            height={25}
                                        />
                                        <span className="ml-1.5 text-2xl font-bold"><span className="text-red-500">CDU</span> <span className="text-black dark:text-white">{ instance }</span></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href} legacyBehavior={false}>
                                            <span className="text-neutral-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                                {item.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="ml-4 flex items-center justify-center text-2xl text-black dark:text-white">
                                <ThemeToggle duration={750} toggled={!isDarkMode} toggle={toggleTheme} />
                            </div>
                            <div className="-mr-2 flex sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} legacyBehavior={false}>
                                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default NavBar;