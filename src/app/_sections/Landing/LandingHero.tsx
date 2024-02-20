import React from 'react';
import { landingPage } from '@/constants';
import Button from '../../_components/ui/Button';
import Image from 'next/image';

export default function LandingHero() {
  return (
    <section>
      <div className='w-full flex justify-center py-10'>
        <div className='max-w-screen-lg flex flex-col items-center'>
          <h2
            dangerouslySetInnerHTML={{ __html: landingPage.title }}
            className='text-5xl font-bold leading-normal max-w-2xl text-center mb-6 text-secondaryDarkGreen'
          ></h2>
          <h3
            dangerouslySetInnerHTML={{ __html: landingPage.subtitle }}
            className='text-lg max-w-xl text-center text-lightGrey mb-6'
          ></h3>
          <div className='flex justify-center'>
            <Button btnType='primary' text={landingPage.ctaButton} link='#' />
            <Button
              btnType='secondary'
              text={landingPage.contactButton}
              link='#'
            />
          </div>

          <Image
            src='/utils/Landing/Hero-image.svg'
            className='max-w-[70%]'
            width={800}
            height={800}
            alt='hero background'
          />
        </div>
      </div>
    </section>
  );
}
