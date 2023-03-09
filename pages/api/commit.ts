export const getCommitList = async (repo: string, branch: string = 'master') => {
  const URL = `${process.env.NEXT_PUBLIC_COMMIT_LIST_ENDPOINT}${repo}/${branch}`
  const response = await fetch(URL)
  return response.json();
}
