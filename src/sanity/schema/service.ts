
import { defineField, defineType } from 'sanity'

export const service = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Service Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name (Lucide React)',
            type: 'string',
            description: 'e.g., Zap, Factory, ShieldCheck',
            options: {
                list: [
                    'Zap', 'Factory', 'UtilityPole', 'Briefcase', 'ShieldCheck', 'Award'
                ]
            }
        }),
    ],
})
