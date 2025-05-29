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