export type Sectiontype = {
  data: {
    mainsection: {
      title: string;
      subtitle: string;
      body: string;
      excerpt: string;
      _type: string;
      image: string;
    };
    subsection: {
      title: string;
      body: string;
      subtitle: string;
      icon: React.ReactNode;
      excerpt: string;
      _type: string;
      image: string;
    }[];
  };
};

export type CustomersType = {
  customerinfo: {
    city: string;
    country: string;
    email: string;
    fullname: string;
    phone: string;
    postaladdress: string;
    _type: string;
  };
  deliverydate: string;
  deliverystatus: string;
  itemsordered: {
    desc: string;
    price: string;
    qty: number;
    _key: string;
    _type: string;
  }[];
  paymenttype: string;
  shippingcost: string;
  shippingdate: string;
  trackingcode: string;
  _createdAt: string;
  _id: string;
} | undefined
