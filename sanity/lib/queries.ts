import { client } from "./client";

// ── Case Studies ──
export async function getAllCaseStudies() {
  return client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      client,
      industry,
      tags,
      publishedAt
    }`
  );
}

export async function getCaseStudyBySlug(slug: string) {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      client,
      industry,
      tags,
      body,
      publishedAt
    }`,
    { slug }
  );
}

// ── Blog Posts ──
export async function getAllBlogPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      author,
      category,
      publishedAt
    }`
  );
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      author,
      category,
      body,
      publishedAt
    }`,
    { slug }
  );
}

// ── Careers ──
export async function getAllCareers() {
  return client.fetch(
    `*[_type == "career"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      department,
      location,
      type,
      publishedAt
    }`
  );
}

export async function getCareerBySlug(slug: string) {
  return client.fetch(
    `*[_type == "career" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      department,
      location,
      type,
      description,
      publishedAt
    }`,
    { slug }
  );
}
