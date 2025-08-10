import { Skeleton } from "@/components/ui/skeleton";
import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";

const Loading = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                {/* Skeleton cho UserProgress */}
                <Skeleton className="h-[20px] w-[100px] rounded-full" />
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    {/* Skeleton cho phần header của shop */}
                    <Skeleton className="h-[90px] w-[90px] rounded-full" />
                    <Skeleton className="h-8 w-48 mt-6 mb-4" />
                    <Skeleton className="h-6 w-72 mb-6" />

                    {/* Skeleton cho danh sách Items */}
                    <div className="w-full space-y-4">
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                    </div>
                </div>
            </FeedWrapper>
        </div>
    );
}

export default Loading;