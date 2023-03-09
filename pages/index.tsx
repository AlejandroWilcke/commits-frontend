import Head from 'next/head'
import CommitList from '@/components/CommitList.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Commits List</title>
        <meta name="description" content="Commits List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/github.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <h1 className="p-4 text-3xl text-white text-center font-bold font-roboto underline tracking-wider underline-offset-8">
          Github Commits List
        </h1>
        <div className='grid grid-cols-12 mx-auto px-12 lg:px-16 xl:px-40'>
          <CommitList classes='col-span-12 lg:col-span-6'/>
          <CommitList classes='col-span-12 lg:col-span-6'/>
        </div>
      </main>
    </>
  )
}
