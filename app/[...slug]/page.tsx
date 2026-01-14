
import { redirects } from '@/data/redirects';
import { redirect, notFound } from 'next/navigation';

export function generateStaticParams() {
    return Object.keys(redirects).map((path) => ({
        slug: path.split('/').filter(Boolean),
    }));
}

export const dynamicParams = false;

export default function Page({ params }: { params: { slug: string[] } }) {
    const path = '/' + params.slug.join('/');
    const target = redirects[path];

    if (target) {
        redirect(target);
    } else {
        notFound();
    }
}
