interface ICommitListProps {
  classes?: string;
}

export default function CommitList({ classes }: ICommitListProps){
  return(
    <ul className={`border-4 border-white rounded-md p-4 my-8 mx-4 ${classes}`}>
      <li>Base</li>
    </ul>
  )
}