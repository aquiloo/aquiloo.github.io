import { getCollection } from "astro:content";

type CollectionName = "projects" | "blog" | "papers";

export async function getSortedCollection<T extends CollectionName>(name: T) {
  const entries = await getCollection(name);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}
