
import React from 'react';
import { Studio } from 'sanity';
import config from '../src/sanity/config';

export default function SanityStudio() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Studio config={config} />
        </div>
    );
}
