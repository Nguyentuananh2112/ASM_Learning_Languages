import { getUserProgress } from "@/app/db/queries";
import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { getTranslations } from "@/lib/server-i18n";

const quests = [
    { value: 20 },
    { value: 50 },
    { value: 100 },
    { value: 500 },
    { value: 1000 },
];


const QuestsPage = async () => {

    const { t } = await getTranslations();

    const userProgressData = getUserProgress();

    const [userProgress] = await Promise.all([userProgressData]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }

    return ( 
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image 
                    src="/quests.svg"
                    alt="Quests"
                    width={90}
                    height={90}
                />
                <h1 className="text-center font-bold text-neutral-800 text-2xl my-6 dark:text-white">
                    {t("quests_title")}
                </h1>
                <p className="text-muted-foreground text-center text-lg mb-6 dark:text-white">
                        {t("quests_description")}
                </p>
               <ul className="w-full"> 
                {quests.map((quest) =>{
                    const progress = (userProgress.points /quest.value) *100;

                    console.log({progress, value: quest.value})

                    return(

                        <div
                        className="flex items-center w-full p-4 gap-x-4 border-t-2"
                        key={quest.value}
                        >
                            <Image
                            src="/points.svg"
                            alt="Points"
                            width={60}
                            height={60}                           
                            />  
                            <div className="flex flex-col gap-y-2 w-full">
                                <p className="text-neutral-700 text-xl font-bold dark:text-white">
                                    {t("quest_earn_xp", { count: quest.value })}
                                </p>
                                <Progress value={progress} className="h-3"/>
                            </div>
                        </div>
                    );
                })}
               </ul>
            </div>
            </FeedWrapper>
            
        </div>
    );
}
 
export default QuestsPage;