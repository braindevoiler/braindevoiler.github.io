import { gateNotes } from '@/data/gateNotes';
import NoteViewer from '@/components/NoteViewer';

// Required for static export - generates all note pages at build time
export function generateStaticParams() {
    return gateNotes.map((note) => ({
        slug: note.id,
    }));
}

interface PageProps {
    params: { slug: string };
}

export default function NoteViewerPage({ params }: PageProps) {
    return <NoteViewer noteId={params.slug} />;
}
