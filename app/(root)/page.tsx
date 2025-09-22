import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { StartupTypeCard } from '@/components/StartupCard'; 
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { auth } from '@/auth';

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query 
  const params = {search: query || null}

  const session = await auth()
  console.log(session?.id)

  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params})



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

    <SanityLive/>

    </>
  );
}
