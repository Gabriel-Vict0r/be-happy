'use server'
import { revalidateTag, unstable_cache } from "next/cache";


export async function revalidateTagAction() {
    revalidateTag('orphanages');
}

export async function fetchOrphanages(route: string, tag: string) {
    async function getOrphanages() {
        const res = await fetch(`${process.env.URL_API}/${route}`, {
            next: { tags: [tag], revalidate: 60 },
        });
        const orpahanges = res.json();
        //console.log(orpahanges);
        return orpahanges;
    }
    const getOrphanagesCache = unstable_cache(
        async () => getOrphanages(),
        undefined,
        {
            revalidate: 90,
            tags: ["orphanages"],
        }
    );
    return getOrphanagesCache();
}
