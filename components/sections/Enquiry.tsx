import { CiLocationArrow1 } from 'react-icons/ci';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormSchemaType from '../form/FormSchemaType';
import InputError from '../form/InputError';
import { useState, useTransition } from 'react';
import handleEmail from '../form/handleEmail';
import EmailSuccess from '../form/EmailSuccess';
const Enquiry = () => {
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchemaType),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = form;

  const [isPending, startTransition] = useTransition();

  const handleForm = (data: z.infer<typeof FormSchemaType>) => {
    startTransition(() => {
      handleEmail(data)
        .then((data) => {
          if (data?.error) {
            const err = data?.error.toString();
            setErr(err);
          } else if (data?.success) {
            setSuccess(data?.success);
          }
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <section className="enquiry">
      <div className="container">
        <div>
          <p>Contact Us</p>
          <h3>Have questions?</h3>
          <h3>Get in touch!</h3>
        </div>
        <div>
          {success ? (
            <EmailSuccess />
          ) : (
            <form onSubmit={handleSubmit(handleForm)}>
              <div>
                <div className="form-control">
                  <input
                    disabled={isPending}
                    type="text"
                    placeholder="First Name"
                    {...register('firstname')}
                  />
                  <InputError error={errors.firstname?.message} />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    disabled={isPending}
                    placeholder="Last Name"
                    {...register('lastname')}
                  />
                  <InputError error={errors.lastname?.message} />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <input
                    type="email"
                    disabled={isPending}
                    placeholder="Email"
                    {...register('email')}
                  />
                  <InputError error={errors.email?.message} />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    disabled={isPending}
                    placeholder="Phone"
                    {...register('phone')}
                  />
                  <InputError error={errors.phone?.message} />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <input
                    type="text"
                    disabled={isPending}
                    placeholder="Message"
                    {...register('message')}
                  />
                  <InputError error={errors.message?.message} />
                </div>
              </div>

              {isPending ? (
                <p className="waiting">Wait...</p>
              ) : (
                <>
                  <button disabled={isPending}>
                    <CiLocationArrow1 />
                    Get in Touch
                  </button>
                  <span className="serv-error">{err}</span>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
