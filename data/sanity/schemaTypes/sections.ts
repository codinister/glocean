import { defineArrayMember, defineField, defineType,  } from 'sanity';

export default defineType({
  name: 'sections',
  title: 'Sections',
  type: 'document',
  fields: [
    defineField({
      name: 'mainsection',
      title: 'Main Section',
      type: 'card',
    }),
    defineField({
      name: 'subsection',
      title: 'Sub Section',
      type: 'array', 
      of: [
        defineArrayMember({
          type: 'card'
        })
      ]
    }),
  ],
  preview: {
    select: {
      title: 'mainsection.title'
    }
  }
});
