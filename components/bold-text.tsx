import { Child } from '../global';
export default function BoldText({ children }: Child) {
  return (
    <p className='font-semibold text-beta text-center mx-auto'>{children}</p>
  );
}
