import { Child } from '../global';
export default function Title({ children }: Child) {
  return (
    <p className='font-semibold text-2xl text-alpha text-center mx-auto'>
      {children}
    </p>
  );
}
