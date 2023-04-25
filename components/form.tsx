import UiBtn from './ui/ui-btn';

export default function Form() {
  return (
    <section className='w-full'>
      <div className='relative '>
        <div className='relative  text-gray-500 '>
          <div className='m-auto space-y-8 '>
            <div className='rounded-xl border border-gray-100 bg-alpha shadow-2xl shadow-gray-600/10 backdrop-blur-2xl'>
              <div className='p-8 py-12 sm:p-16'>
                <form action='' className='space-y-8'>
                  <div className='space-y-2'>
                    <label
                      htmlFor='email'
                      className='text-gray-600 dark:text-gray-300'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      autoComplete='username'
                      className='focus:outline-none block w-full rounded-md border border-primary dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='text-gray-600 dark:text-gray-300'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      name='pwd'
                      id='pwd'
                      autoComplete='current-password'
                      className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'
                    />
                  </div>
                  <UiBtn />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
