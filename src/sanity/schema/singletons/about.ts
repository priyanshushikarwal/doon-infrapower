
import { defineField, defineType } from 'sanity'

export const about = defineType({
    name: 'about',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Main Description',
            type: 'text',
        }),
        defineField({
            name: 'director_name',
            title: 'Director Name',
            type: 'string',
        }),
        defineField({
            name: 'director_role',
            title: 'Director Role',
            type: 'string',
        }),
        defineField({
            name: 'director_quote',
            title: 'Director Quote',
            type: 'text',
        }),
        defineField({
            name: 'director_image',
            title: 'Director Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'certificates',
            title: 'Certifications',
            type: 'array',
            of: [{ type: 'image' }]
        })
    ],
})
