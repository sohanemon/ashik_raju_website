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
          fill ? 'bg-alpha text-psi' : 'bg-psi text-alpha border border-alpha'
        } rounded-md px-5 py-3`}
      >
        {children}
      </button>
    </>
  );
}
