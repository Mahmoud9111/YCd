import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';


export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query 

  const posts = [{
    _createdAt: new Date(),
    views:55,
    author:{id:1, name: 'John Doe'},
    _id:1,
    description:'This is a sample description',
    image:'https://via.placeholder.com/150',
    category:'Tech',
    title:'Sample Post',
  }]

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
        {posts?.length > 0 ? posts.map((post:StartupCardType, index:number) => (
          <StartupCard key={post?._id} post={post} />
        )) : (
          <p className='text-20-semibold'>No posts found</p>
        )}
      </ul>
    </section>

    </>
  );
}
