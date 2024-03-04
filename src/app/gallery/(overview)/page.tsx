import CharactersList from "@/app/ui/characters/list";
import Header from "@/app/ui/characters/header/header";
import {fetchCharacters} from "@/app/lib/api";
import Pagination from "@/app/ui/characters/pagination";

export default async function Page({searchParams}: {
    searchParams?: {
        page?: string;
        name?: string;
        status?: string
    };
}) {
    const currentPage = Number(searchParams?.page) || 1;
    const currentName = searchParams?.name || '';
    const currentFilter = searchParams?.status || '';
    const data = await fetchCharacters(currentPage, currentName, currentFilter);

    if (data.error) {
        return (
            <>
                <Header />
                <div className="grid place-items-center w-full mt-8">
                    <p className="text-5xl">{data.error}</p>
                </div>
            </>
        );
    }

    const totalPages = data?.info?.pages || 1

    return (
        <>
        <Header/>
        <div className={"grid place-items-center w-full"}>
            <CharactersList data={data}/>
        </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    );
}
