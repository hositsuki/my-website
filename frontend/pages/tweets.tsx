// pages/tweets.tsx
import { useEffect, useState } from 'react';

interface Tweet {
    tweetId: string;
    text: string;
    date: string;
}

export default function TweetsPage() {
    const [tweets, setTweets] = useState<Tweet[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getTweets`)
            .then((res) => res.json())
            .then(setTweets);
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Twitter Feed</h1>
            <ul className="space-y-4">
                {tweets.map((tweet) => (
                    <li key={tweet.tweetId} className="bg-gray-100 p-4 rounded shadow">
                        <p>{tweet.text}</p>
                        <p className="text-sm text-gray-500">{new Date(tweet.date).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
