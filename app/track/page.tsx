'use client';

import Pageherosection from '@/components/sections/Pageherosection';

import Tracker from '@/components/Tracker';

import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import hamdleSearch from '@/actions/hamdleSearch';
import { CustomersType } from '@/types/types';
import Sectiontwo from '@/components/sections/Sectiontwo';
import useGetQuery from '@/data/query/useGetQuery';

export default function Track() {
  const data = useGetQuery('/sections', 'sections');

  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState<CustomersType>();
  const [searchError, setSearchError] = useState('');

  const form = useForm({
    defaultValues: {
      search: '',
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const handleForm = (data: { search: string }) => {
    const { search } = data;

    startTransition(() => {
      hamdleSearch(search)
        .then((data) => {
          setSearchError('');
          if (data?.error) {
            setSearchError(data?.error);
          } else if (data?.success) {
            setSearch(data?.success);
          }
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <>
      <Pageherosection name="Global Package Tracking" />
      <section className="track">
        <div className="container">
          <div>
            Track packages from China, US Post, Canada Post, Royal Mail,
            Deutsche Post, Aliexpress, UPS, Shein, FedEx, Temu, eBay, Amazon
          </div>

          <div>
            <form onSubmit={handleSubmit(handleForm)} noValidate>
              <div>
                <input
                  type="text"
                  {...register('search', {
                    required: {
                      value: true,
                      message: 'Search field required!',
                    },
                  })}
                  placeholder="Enter tracking number"
                />
                <button>TRACK PACKAGE</button>
              </div>

              <p className="err-res">{errors.search?.message}</p>

              {isPending ? (
                <p className="spinner-text">...Wait</p>
              ) : (
                <p className="spinner-text">{searchError}</p>
              )}
            </form>
            {search ? <Tracker data={search} /> : ''}

            <Sectiontwo data={data[1]} />
          </div>
        </div>
      </section>
    </>
  );
}
