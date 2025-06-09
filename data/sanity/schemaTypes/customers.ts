import { defineField, defineType } from 'sanity';
import { uuid } from '@sanity/uuid';

const id = uuid();

export default defineType({
  name: 'customers',
  title: 'Customers',
  type: 'document',

  fields: [
    defineField({
      name: 'trackingcode',
      title: 'Tracking code',
      type: 'string',
      initialValue: id,
      validation: (Rule) => [Rule.required().error('Tracking code required!')],
    }),
    defineField({
      name: 'customerinfo',
      title: 'Customer info',
      type: 'customerdetails',
    }),

    defineField({
      name: 'itemsordered',
      title: 'Items Ordered',
      type: 'array',
      of: [{ type: 'items' }],
    }),

    defineField({
      name: 'deliverystatus',
      title: 'Delivery Status',
      description: 'Choose a status',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Shipped', value: 'shipped' },
          { title: 'In transit', value: 'transit' },
          { title: 'Out for delivery', value: 'delivering' },
          { title: 'Estimated delivery', value: 'estimateddelivery' },
          { title: 'Delivered', value: 'delivered' },
        ],
      },
    }),
    defineField({
      name: 'shippingdate',
      title: 'Shipping Date',
      type: 'datetime',
      validation: (Rule) => [Rule.required().error('Shipping date required!')],
    }),
    defineField({
      name: 'deliverydate',
      title: 'Delivery Date',
      type: 'datetime',
      validation: (Rule) => [Rule.required().error('Delivery date required!')],
    }),


    defineField({
      name: 'shippingcost',
      title: 'Shipping Cost',
      type: 'number',
      validation: (Rule) => [Rule.required().error('Shipping cost required!')],
    }),

    defineField({
      title: 'Payment Type',
      description: 'Select Type',
      name: 'paymenttype',
      type: 'string',
      options: {
        list: [
          { title: 'Cash', value: 'cash' },
          { title: 'Momo', value: 'momo' },
          { title: 'Cheque', value: 'cheque' },
          { title: 'Bank Deposit', value: 'bankdeposit' },
        ],
      },
      validation: (Rule) => Rule.required().error('Select payment type'),
    })




  ],
  preview: {
    select: {
      title: 'customerinfo.fullname',
      subtitle: 'customerinfo.phone',
    },
  },
});
