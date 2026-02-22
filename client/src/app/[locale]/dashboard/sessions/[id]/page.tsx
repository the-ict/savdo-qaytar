'use client';

import React from 'react';
import { SessionDetails } from '@/features/dashboard/ui/SessionDetails';
import { useParams } from 'next/navigation';

export default function SessionDetailsPage() {
    const params = useParams();
    const id = params.id as string;

    return (
        <SessionDetails id={id || '1'} />
    );
}
