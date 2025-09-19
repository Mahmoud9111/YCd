import { defineType, defineField } from 'sanity'

export const startup = defineType({
    name: 'startup',
    title: 'startup',
    type: 'document',
    fields: [

        defineField({
            name: 'title',
            type:'string',
        }),

        defineField({
            name: 'slug',
            type:'slug',
            options: {
                source: 'title',
            }
        }),
        
        defineField({
            name: 'author',
            type:'reference',
            to:{ type:'author' }
        }),

        defineField({
            name: 'views',
            type:'number',
        }),

        defineField({
            name: 'discussion',
            type:'text',
        }),

        defineField({
            name: 'category',
            type:'string',
            validation: (Rule) => Rule.min(1).max(20).required().error('A category is required'),
        }),

        defineField({
            name: 'image',
            type:'url',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'pitch',
            type: "markdown",
        }),



    ],

})