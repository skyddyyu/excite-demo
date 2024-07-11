import UserProfileSection from "@/app/components/UserProfileSection";
import ChartSection from "@/app/components/ChartSection";
import LatestDataSection from "@/app/components/LatestDataSection";
import HistoryScoreSection from "@/app/components/HistoryScoreSection";

export default function Home() {
    return (
        <main
            className="w-screen h-screen bg-[rgb(237,_237,_237)] py-10 px-10 grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-5">
            <UserProfileSection/>
            <LatestDataSection/>
            <HistoryScoreSection/>
            <ChartSection/>
        </main>
    );
}
