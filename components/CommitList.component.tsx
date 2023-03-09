import CommitCard, { ICommit } from "./CommitCard.component";

interface ICommitListProps {
  repo: string;
  commits: ICommit[];
  classes?: string;
}

export default function CommitList({ repo, commits, classes }: ICommitListProps){
  return(
    <ul className={`rounded-md p-4 my-8 mx-4 bg-gray-700 h-[50vh] overflow-y-auto scroll-smooth shadow-inner shadow-[#222222] ${classes}`}>
      <li className="text-center text-white text-xl">Repository: {repo}</li>
      {commits?.map( (commit, i) => {
        return (
          <CommitCard key={i} commit={commit} />
        )
      })}
    </ul>
  )
}