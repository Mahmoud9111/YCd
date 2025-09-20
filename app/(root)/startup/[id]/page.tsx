import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import { formatDate } from '@/lib/utils'
export const experimental_ppr = true
import Image from 'next/image'
import Link from 'next/link'
import  markdownit  from 'markdown-it'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import View from '@/components/View'
const md = markdownit()
const page = async ({params}: {params:Promise<{id: string }>}) => {
    const id = (await params).id

    const post = await client.fetch(STARTUP_BY_ID_QUERY, {id})
    if(!post) return notFound()

  const parsedContent = md.render(post?.pitch || '')

  return (
  <>

    <section className='pink_container bg-pink-600 !min-h-[230px]'>
      <p className='tag bg-yellow-400'>{formatDate(post?._craeteAt)}</p>
      <h1 className='heading'>{post.title}</h1>
      <p className='sub_heading !max-w-5xl'>{post.description}</p>
    </section>

    <section className='section_container'>
      <img src={post.image} alt="thumbnail" className="w-full h-auto rounded-xl"/>

      <div className='space-y-5 mt-10 max-w-4xl '>
        <div className='flex-between gap-5'>
            <Link href={`/user/${post.author?._id}`} className="flex gap-2 items-center mb-3">
              <Image src={post.author.image} alt="avatar" width={64} height={64} className='rounded-full drop-shadow-lg'/>
              <div>
                <p className='text-xl'>{post.author.name}</p>
                <p className='text-md text-gray-600'>@{post.author.username}</p>

              </div>
            </Link>
            <p className='category-tag bg-pink-100'>{post.category}</p>
        </div>
        <h3 className='text-lg'>Pitch Details</h3>
        {parsedContent ? (
            <article className='prose max-w-4xl break-all' dangerouslySetInnerHTML={{__html: parsedContent}}/>
        ) : (
          <p className='not-result'>No details provided</p>
        )}
      </div>
      <hr className='dividor' />

      <Suspense fallback={<Skeleton className='view_skeleton'/>}>
          <View id={id}/>
      </Suspense>
    </section>

    

  </>
  )
}

export default page