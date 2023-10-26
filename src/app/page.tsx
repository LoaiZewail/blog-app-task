import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  return (
    <main className="flex h-[80vh] flex-col items-center justify-center ">
      <div className="relative flex-col flex place-items-center ">
        <div className="max-w-5xl w-full items-center justify-center font-mono text-sm flex">
          <p className="text-lg border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 p-6 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Hi&nbsp;
            <code className="font-mono font-bold">Ahmed Gaber</code>
            &nbsp;and&nbsp;
            <code className="font-mono font-bold">Ahmed Atef</code>
            <br />It's me Loai Zewail 👋
          </p>
        </div>
        <Link href="/blog">
          <Button className='my-3'>
            View task
          </Button>
        </Link>
        <Image
          className='border rounded-xl'
          src="/img.jpg"
          width={500}
          height={300}
          alt="Hi !"
        />
      </div>
    </main>
  )
}
