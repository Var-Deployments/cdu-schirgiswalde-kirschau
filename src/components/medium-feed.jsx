"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import convert from 'xml-js';

const MediumFeed = ({ blog }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const url = `https://corsproxy.io/?https://medium.com/feed/@${blog.mediumUsername}`;
            try {
                const response = await axios.get(url);
                const result = convert.xml2js(response.data, { compact: true, spaces: 4 });
                const fetchedPosts = result.rss.channel.item;
                if (fetchedPosts) {
                    const normalizedPosts = Array.isArray(fetchedPosts) ? fetchedPosts : [fetchedPosts];
                    setPosts(normalizedPosts);
                } else {
                    setPosts([]);
                }
            } catch (error) {
                console.error('Error fetching Medium feed:', error);
                setPosts([]);
            }
        };

        fetchPosts();
    }, [blog.mediumUsername]);

    const displayPosts = posts;


    return (
        <div id="news" className="w-full flex flex-col justify-center items-center text-black dark:text-white">
        <h1 className="text-5xl font-bold mb-8 text-black dark:text-white" dangerouslySetInnerHTML={{__html: blog.title}}></h1>
        <span className="text-2xl font-light -mt-3 text-center" dangerouslySetInnerHTML={{__html: blog.subtitle}}></span>
            {  !displayPosts.length ?
            (
                <div className="flex mt-24 mb-24 gap-x-6 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>
                    </svg>
                    <span className="font-semibold">Noch keine Blog-Einträge vorhanden.<br /><span className="font-light">Kommen Sie bald wieder um hier Inhalte zu sehen!</span></span>
                </div>
            ) :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {
                displayPosts.map((post, index) => (
                <a href={post.link._text} target="_blank" key={index} className="cursor-pointer bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    {post.image && (
                        <img src={post.image.url._text} alt={post.title._cdata} className="w-full rounded-t-lg" />
                    )}
                    <div className="p-4">
                        <h2 className="text-xl font-bold dark:text-white">{post.title._cdata}</h2>
                        <div className="flex gap-x-2">
                            { /* <span className="text-gray-600 dark:text-gray-300">{post["dc:creator"]._cdata}</span> */ }
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-light">Veröffentlicht: {new Date(post.pubDate._text).toLocaleDateString()}</span>
                        </div>
                            <a href={post.link._text} target="_blank" className="mt-2 items-center justify-center gap-x-2 rounded-md flex bg-green-500 bg-opacity-10 px-2 py-1 text-green-500 hover:text-green-400  hover:bg-opacity-20 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-4 h-4">
                                    <path fill-rule="evenodd"
                                          d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                                          clip-rule="evenodd"/>
                                </svg>
                                Lesen</a>
                    </div>
                </a>
            ))}

            <button
                    className="col-span-full mx-auto mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => setShowAll(!showAll)}>
                    View All
            </button>
        </div>
            }
        </div>
    );
};

MediumFeed.displayName = "MediumFeed";
export default MediumFeed;