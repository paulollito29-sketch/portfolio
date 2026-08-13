export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-8 px-6">
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          Hecho con <span className="text-zinc-900">♥</span> por Paulo Espinoza
        </p>
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
