import { Child } from '../global';
export default function BoldText({ children }: Child) {
  return <p className='font-semibold text-lg text-beta'>{children}</p>;
}
