import { defineQuery } from "next-sanity"
export const STARTUPS_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
  _id,
  title,
  slug,
  currentAt,
  author-> {
    _id,
    name,
    slug,
    image,
    bio
  },
  views,
  discussion,
  category,
  image
}`)