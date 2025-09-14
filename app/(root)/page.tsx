import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { StartupTypeCard } from '@/components/StartupCard'; 

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query 

  const posts = await client.fetch(STARTUPS_QUERY)
  console.log(JSON.stringify(posts, null, 2))



  return (
    <>
    <section className="pink_container bg-pink-600">
      <h1 className="heading mx-auto">pitch your startup <br /> connect with entrepreneurs</h1>
      <p className="sub-heading !max-w-3xl">submit ideas vote on pitches and get noticed in virtual competitions</p>

      <SearchForm query={query} />
    </section>

    <section className='section_container'>
      <p className='text-30-semibold'>
        {query ? `Searching results for ${query}` : 'All Startups'}
      </p>

      <ul className='mt-7 card_grid'>
        {posts?.length > 0 ? posts.map((post:StartupTypeCard, index:number) => (
          <StartupCard key={post?._id} post={post} />
        )) : (
          <p className='text-20-semibold'>No posts found</p>
        )}
      </ul>
    </section>

    </>
  );
}
