import { z } from 'zod';
import FormSchemaType from './FormSchemaType';
import { Section, Img, Text, Heading } from '@react-email/components';

const ReactEmail = (data: z.infer<typeof FormSchemaType>) => {
  const { firstname, lastname, email, phone, message } = data;

  return (
    <Section className="my-[16px]">
      <Img
        alt="Enquiry"
        className="w-full rounded-[12px] object-cover"
        height={320}
        src="https://cdn.sanity.io/images/diw2ozag/production/22f91dd6eb65646b6b16c84d9a8d438f60306854-339x234.jpg"
      />
      <Section className="mt-[32px] text-center">
        <Text className="mt-[16px] font-semibold text-[18px] text-indigo-600 leading-[28px]">
          {firstname} {lastname}
        </Text>
        <Heading
          as="h1"
          className="font-semibold text-[36px] text-gray-900 leading-[40px] tracking-[0.4px]"
        >
          {email}
        </Heading>
        <Text className="mt-[8px] text-[16px] text-gray-500 leading-[24px]">
          {message}
        </Text>
        <Text className="font-semibold text-[16px] text-gray-900 leading-[24px]">
          Phone: {phone}
        </Text>
      </Section>
    </Section>
  );
};

export default ReactEmail;
