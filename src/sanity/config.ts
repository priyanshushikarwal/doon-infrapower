
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

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Website Content')
                    .items([
                        // Singleton: Home Page
                        S.listItem()
                            .title('Home Page')
                            .child(S.document().schemaType('home').documentId('home')),

                        // Singleton: About Page
                        S.listItem()
                            .title('About Page')
                            .child(S.document().schemaType('about').documentId('about')),

                        // Singleton: Contact Details
                        S.listItem()
                            .title('Contact Details')
                            .child(S.document().schemaType('contact').documentId('contact')),

                        S.divider(),

                        // Regular Documents
                        S.documentTypeListItem('project').title('Projects'),
                        S.documentTypeListItem('service').title('Services'),
                    ]),
        }),
    ],

    schema: {
        types: schemaTypes,
    },
})
