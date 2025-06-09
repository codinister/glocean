import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'customerdetails',
  title: 'Add customer details',
  type: 'object',

  fields: [
    defineField({
      name: 'fullname',
      title: 'Full name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Full name required!')],
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Phone required!')],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'postaladdress',
      title: 'Postal Address',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      initialValue: 'Ghana',
      validation: (Rule) => [Rule.required().error('Country required!')],
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => [Rule.required().error('City required!')],
    }),
  ],
});
