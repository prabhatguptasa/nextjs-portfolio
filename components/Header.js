import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-32 h-32 rounded-full block mx-auto mb-4 bg-cover bg-center bg-[url('https://i.ibb.co/Ttm1NwD/20220820-132918.jpg')]" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
