'use server'
import { getServerSession } from "next-auth";
import { revalidateTag, unstable_cache } from "next/cache";
import { NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER } from "next/dist/lib/constants";
import { authOptions } from "./api/auth/[...nextauth]/route";


export async function revalidateTagAction(tag: string) {
    revalidateTag(tag);
}
async function getOrphanages(route: string, tag: string[]) {
    const session = await getServerSession(authOptions);
    const res = await fetch(`${process.env.URL_API}/${route}`, {
        next: { tags: tag, revalidate: 60 },
        headers: { 'authorization': session.token! }
    });
    const orpahanges = res.json();
    //console.log(orpahanges);
    return orpahanges;
}
export async function fetchOrphanages(route: string, keys: string[], tag: string[]) {

    const getOrphanagesCache = unstable_cache(
        async () => getOrphanages(route, tag),
        keys,
        {
            revalidate: 90,
            tags: tag,
        }
    );
    return getOrphanagesCache();
}
export async function fetchOrphanagesPending(route: string, keys: string[], tag: string[]) {
    const getOrphangesPending = unstable_cache(
        async () => getOrphanages(route, tag),
        keys,
        {
            revalidate: 90,
            tags: tag,
        }
    );
    return getOrphangesPending();
}