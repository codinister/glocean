'use server';

import { z } from 'zod';
import FormSchemaType from './FormSchemaType';
import { Resend } from 'resend';
import ReactEmail from './ReactEmail';
import { fromZodError } from 'zod-validation-error';

const handleEmail = async (data: z.infer<typeof FormSchemaType>) => {
  const res = FormSchemaType.safeParse(data);

  const config = process.env.RESEND_EMAIL_API_KEY;
  const resend = new Resend(config);

  if (!res.success) {
    return {
      error: fromZodError(res.error),
    };
  }


  try {
    const sendEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'codinister@gmail.com',
      subject: 'Enquiry',
      react: ReactEmail(res?.data),
    });

    if (!!sendEmail) {
      return {
        success: true
      }
    } 
  } catch (err) {
    console.log(err);
  }
};

export default handleEmail;
