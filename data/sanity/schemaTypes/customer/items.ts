import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'items',
  title: 'Items',
  type: 'object',

  fields: [
    defineField({
      name: 'qty',
      title: 'Qty',
      type: 'number',
      validation: (Rule) => [Rule.required().error('Qty required!')],
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Description required!')],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Price required!')],
    }),
  ],
});
