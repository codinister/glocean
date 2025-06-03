import  validator  from 'validator';
import { z } from 'zod';
const FormSchemaType = z.object({
  firstname: z.string().min(2, { message: 'Valid First Name required!' }),
  lastname: z.string().min(2, { message: 'Valid Last Name required!' }),
  email: z.string().email(),
  phone: z.string().min(10, 'Valid phone number required!').refine(validator.isMobilePhone),
  message: z.string().min(2, 'Message field required!'),
});

export default FormSchemaType;
