import Image from "next/image";
import { parseDate } from "@/utils/date";

interface IAuthor {
  handle: string;
  profile_url: string;
  avatar_url: string;
}

export interface ICommit {
  author: IAuthor;
  message: string;
  date: string;
  html_url: string;
}

interface ICommitCardProps {
  commit: ICommit;
}

export default function CommitCard({ commit }: ICommitCardProps){
  const { 
    author, 
    message, 
    date,
    html_url
  } = commit;
  const { 
    handle,
    profile_url,
    avatar_url
  } = author;
  const parsedDate = parseDate(new Date(date));
  return(
    <li className="grid grid-cols-12 my-4 p-2 gap-x-3 rounded-md font-roboto font-bold text-white text-sm bg-slate-600">
      <div className="flex col-span-4 align-center truncate">
        <Image 
          className="rounded-xl mr-4"
          src={avatar_url}
          alt={"Avatar not found"}
          width={30}
          height={30}
        />
        <a className="hover:text-white" target="_blank" href={profile_url}>
          {handle}
        </a>
      </div>
      <a className="col-span-6 text-center hover:text-white truncate" target="_blank" href={html_url}>
        {message}
      </a>
      <p className="col-span-2 truncate text-right">
        {parsedDate}
      </p>
    </li>
  )
}