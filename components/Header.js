import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-32 h-32 rounded-full block mx-auto mb-4 bg-cover bg-center bg-[url('https://media.licdn.com/dms/image/C5603AQFXD_9RS2ioRw/profile-displayphoto-shrink_200_200/0/1660982756930?e=1684368000&v=beta&t=TFyH0M2Ai9WxIRot98o6CZCztjHa99Q6p2mthle5m7s')]" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
