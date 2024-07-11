import UserProfileSection from "@/app/components/UserProfileSection";
import ChartSection from "@/app/components/ChartSection";
import LatestDataSection from "@/app/components/LatestDataSection";
import HistoryScoreSection from "@/app/components/HistoryScoreSection";

export default function Home() {
    return (
        <main
            className="w-screen h-screen overflow-y-auto bg-[rgb(237,_237,_237)]  p-5 sm:p-10 grid sm:justify-items-stretch sm:grid-cols-2 sm:grid-rows-2 gap-x-10 gap-y-5"
        >
            <UserProfileSection/>
            <LatestDataSection/>
            <HistoryScoreSection/>
            <ChartSection/>
        </main>
    );
}
