export function Title({ children }: { children: string }) {
  return (
    <header>
      <h1 className="text-center text-3xl w-full">{children}</h1>
    </header>
  );
}
