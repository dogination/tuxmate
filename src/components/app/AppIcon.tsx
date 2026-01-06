'use client';

import { useState } from 'react';

// App icon with lazy loading, falls back to first letter if it fails
export function AppIcon({ url, name }: { url: string; name: string }) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="w-[18px] h-[18px] rounded bg-[var(--accent)] flex items-center justify-center text-[10px] font-bold">
                {name[0]}
            </div>
        );
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={url}
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            className="w-[18px] h-[18px] object-contain opacity-75"
            onError={() => setError(true)}
            loading="lazy"
        />
    );
}
