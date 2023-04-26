import { motion } from 'framer-motion';
import UiBtn from './ui/ui-btn';
import { fadeAnimation } from '@/lib/motion';

export default function Form() {
  return (
    <motion.section {...fadeAnimation} className='w-full '>
      <div className='relative '>
        <div className='relative  text-gray-500 '>
          <div className='m-auto space-y-8 '>
            <div className='rounded-xl border border-gray-100 bg-alpha shadow-2xl shadow-gray-600/10 backdrop-blur-2xl'>
              <div className='p-8 py-12 sm:p-16'>
                <form action='' className='space-y-3'>
                  <div className='space-y-2'>
                    <label className='' htmlFor='email'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='mail@your-domain.com'
                      autoComplete='email'
                      className='focus:outline-none block w-full rounded-md border border-omega  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-omega'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='message'
                      className='text-gray-600 dark:text-gray-300'
                    >
                      Message
                    </label>
                    <textarea
                      name='message'
                      id='message'
                      placeholder='write your message here ...'
                      className='focus:outline-none block w-full rounded-md border border-omega  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-omega'
                    />
                  </div>
                  <br />
                  <UiBtn />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
