
import { defineField, defineType } from 'sanity'

export const home = defineType({
    name: 'home',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'hero_badge',
            title: 'Hero Badge Text',
            type: 'string',
            initialValue: 'ISO Certified • Est. 2015',
        }),
        defineField({
            name: 'hero_title',
            title: 'Hero Title',
            type: 'string',
            initialValue: 'Solar EPC & Electrical Infrastructure.',
        }),
        defineField({
            name: 'hero_description',
            title: 'Hero Description',
            type: 'text',
        }),
        defineField({
            name: 'hero_image',
            title: 'Hero Background Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'stats',
            title: 'Statistics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'value', type: 'string', title: 'Value (e.g. 50+)' },
                        { name: 'label', type: 'string', title: 'Label (e.g. Projects)' }
                    ]
                }
            ]
        })
    ],
})
