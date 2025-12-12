
import { defineField, defineType } from 'sanity'

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Residential', value: 'Residential' },
                    { title: 'Commercial', value: 'Commercial' },
                    { title: 'Industrial', value: 'Industrial' },
                    { title: 'Infrastructure', value: 'Infrastructure' },
                    { title: 'Government', value: 'Government' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'capacity',
            title: 'Capacity (e.g., 500KW)',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'gallery',
            title: 'Project Gallery',
            type: 'array',
            of: [{ type: 'image' }],
            description: 'Add multiple photos for this project',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
    ],
})
