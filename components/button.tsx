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
            ? 'bg-alpha text-psi hover:bg-psi hover:text-alpha hover:border border-alpha'
            : 'bg-psi text-alpha border border-alpha hover:bg-alpha hover:text-psi hover:border-none'
        } rounded-md px-5 py-3`}
      >
        {children}
      </button>
    </>
  );
}
