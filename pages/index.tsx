import Head from 'next/head'
import CommitList from '@/components/CommitList.component'
import { getCommitList } from './api/commit';
import { ICommit } from '@/components/CommitCard.component';
import { useQuery } from "react-query";
import { useEffect, useState } from 'react'

export default function Home() {

  const backendRepo = process.env.NEXT_PUBLIC_BACKEND_REPO || "";
  const frontendRepo = process.env.NEXT_PUBLIC_FRONTEND_REPO || "";

  const [backendCommits, setBackendCommits] = useState<ICommit[]>([]);
  const [frontendCommits, setFrontendCommits] = useState<ICommit[]>([]);

  const { 
    data: backendData,
  } = useQuery(['repo', backendRepo], () => getCommitList(backendRepo));

  const { 
    data: frontendData,
  } = useQuery(['repo', frontendRepo], () => getCommitList(frontendRepo));

  useEffect(() => {
    setBackendCommits(backendData);
  }, [backendData]);

  useEffect(() => {
    setFrontendCommits(frontendData);
  }, [frontendData]);

  return (
    <>
      <Head>
        <title>Commits List</title>
        <meta name="description" content="Commits List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/github.ico" />
      </Head>
      <main>
        <h1 className="p-4 text-3xl text-white text-center font-bold font-roboto underline tracking-wider underline-offset-8">
          Github Commits List
        </h1>
        <div className='grid grid-cols-12 mx-auto px-12 lg:px-16 xl:px-40'>
          <CommitList repo={backendRepo} commits={backendCommits} classes='col-span-12 lg:col-span-6'/>
          <CommitList repo={frontendRepo} commits={frontendCommits} classes='col-span-12 lg:col-span-6'/>
        </div>
      </main>
    </>
  )
}
