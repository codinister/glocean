import { defineField, defineType } from 'sanity';


export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'company_name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Company name required!')],
    }),
    defineField({
      name: 'company_location',
      title: 'Company Location',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Company location required!'),
      ],
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
      validation: (Rule) => [
        Rule.required().error('Email required!'),
        Rule.regex(/^\S+@\S+\.\S+$/).error('Valid Email required!'),
      ],
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Wesbsite required!')],
    }),
    defineField({
      name: 'image',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'enquiry',
      title: 'Enquiry',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'currency', 
      type: 'string', 
      title: 'Currency', 
      validation: (Rule) => [Rule.required().error('Currency field required!')],
    })
  ],
});
