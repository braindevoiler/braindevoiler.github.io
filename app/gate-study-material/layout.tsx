import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'GATE Study Material | Ankur Gupta',
    description: 'Comprehensive notes and preparation strategy for GATE Computer Science aspirants. Access subject-wise PDF notes and expert guidance to secure a top rank.',
    keywords: ['GATE CS', 'GATE Notes', 'GATE CS Notes', 'Computer Science', 'GATE Preparation', 'Study Material', 'Handwritten Notes', 'GATE Strategy', 'Ankur Gupta', 'AIR 54'],
    openGraph: {
        title: 'GATE Study Material | Ankur Gupta - AIR 54',
        description: 'Get access to comprehensive notes and proven preparation strategies for GATE Computer Science. Helping aspirants since 2013.',
        url: 'https://ankurgupta.net/gate-study-material',
        type: 'website',
        images: [
            {
                url: 'https://ankurgupta.net/images/cone-method.jpeg', // Using the cone method image as a relevant preview
                width: 1200,
                height: 630,
                alt: 'GATE Preparation Strategy',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GATE Study Material | Ankur Gupta',
        description: 'Comprehensive notes and preparation strategy for GATE CS aspirants.',
        images: ['https://ankurgupta.net/images/cone-method.jpeg'],
    },
};

export default function GateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
