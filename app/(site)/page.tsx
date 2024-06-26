import Header from '@/components/Header'
import getSongs from "@/actions/getSongs"
import ListItem from '@/components/ListItem'
import PageContent from "./components/PageContent"


export const revalidate = 0;
export default async function Home() {
  const songs = await getSongs()
  return (
        <div className="text-neutral-400 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  )
}