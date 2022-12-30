import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-[url('https://media.licdn.com/dms/image/C5603AQFXD_9RS2ioRw/profile-displayphoto-shrink_200_200/0/1660982756930?e=1677715200&v=beta&t=2rYW-_eHLhuJwl4rX3jcEKKxHyMitipSqVtjLQkszCs')]" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
