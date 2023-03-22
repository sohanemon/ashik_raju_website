export default function Button({
  children,
  fill,
}: {
  children: React.ReactNode;
  fill?: boolean;
}) {
  return (
    <>
      <button
        className={`${
          fill
            ? 'bg-alpha text-psi hover:bg-psi hover:text-alpha hover:outline outline-alpha'
            : 'bg-psi text-alpha outline outline-alpha hover:bg-alpha hover:text-psi hover:outline-none'
        } rounded-md px-5 py-3 outline-1`}
      >
        {children}
      </button>
    </>
  );
}
