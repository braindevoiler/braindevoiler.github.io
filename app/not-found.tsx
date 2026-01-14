
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/');
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <p className="mb-4">Redirecting you to the home page...</p>
            <a href="/" className="text-blue-500 hover:underline">
                Click here if you are not redirected
            </a>
        </div>
    );
}
