import { defineQuery } from "next-sanity";

export const ALL_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "excerpt": pt::text(body[0..1]),
    "author": author->{ name },
    "categories": categories[]->{ title }
  }
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    "author": author->{ name, image },
    "categories": categories[]->{ title }
  }
`);

export const ALL_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const ALL_BRANCHES_QUERY = defineQuery(`
  *[_type == "branch"] | order(order asc) {
    _id, zone, name, city, province, address, tables, tags, openHour, closeHour, mapsUrl, photo,
    "slug": slug.current
  }
`);

export const ALL_BRANCH_SLUGS_QUERY = defineQuery(`
  *[_type == "branch" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const BRANCH_BY_SLUG_QUERY = defineQuery(`
  *[_type == "branch" && slug.current == $slug][0] {
    _id, zone, name, city, province, address, tables, tags, openHour, closeHour, mapsUrl, photo, gallery, menuImages
  }
`);

export const MENU_BY_BRANCH_QUERY = defineQuery(`
  *[_type == "menuItem" && branchSlug == $slug] | order(category asc, order asc) {
    _id, branchSlug, category, name, price, description, photo, available
  }
`);

export const ALL_PROMOS_QUERY = defineQuery(`
  *[_type == "promo"] | order(order asc) {
    _id, label, isHot, title, description, validInfo, photo
  }
`);

export const ALL_TOURNAMENTS_QUERY = defineQuery(`
  *[_type == "tournament"] | order(date asc) {
    _id, name, date, location, prize, photo
  }
`);

export const ALL_MERCHANDISE_QUERY = defineQuery(`
  *[_type == "merchandise"] | order(order asc) {
    _id, name, price, originalPrice, badge, photo, tokopediaUrl
  }
`);

export const ALL_FRANCHISE_PACKAGES_QUERY = defineQuery(`
  *[_type == "franchisePackage"] | order(order asc) {
    _id, name, price, priceNote, features, featured
  }
`);

export const ADMIN_STATS_QUERY = defineQuery(`{
  "branches": count(*[_type == "branch"]),
  "promos": count(*[_type == "promo"]),
  "tournaments": count(*[_type == "tournament"]),
  "merchandise": count(*[_type == "merchandise"]),
  "franchisePackages": count(*[_type == "franchisePackage"]),
  "posts": count(*[_type == "post"]),
  "recentPosts": *[_type == "post"] | order(publishedAt desc) [0..4] {
    _id, title, "slug": slug.current, publishedAt
  }
}`);
