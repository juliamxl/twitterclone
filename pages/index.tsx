import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <p className='text-3xl text-teal-500'>hello world</p>
      </main>
    </>
  )
}