
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schema'

// These will be populated by the user later
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'fmrcedhu'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export default defineConfig({
    name: 'default',
    title: 'Doon Infrapower Admin',
    basePath: '/sanity',

    projectId,
    dataset,

    plugins: [structureTool()],

    schema: {
        types: schemaTypes,
    },
})
