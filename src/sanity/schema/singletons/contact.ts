
import { defineField, defineType } from 'sanity'

export const contact = defineType({
    name: 'contact',
    title: 'Contact & Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'address',
            title: 'Office Address',
            type: 'text',
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'social_links',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', type: 'string', title: 'Platform Name' },
                        { name: 'url', type: 'url', title: 'URL' }
                    ]
                }
            ]
        })
    ],
})
