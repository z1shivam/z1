import HomeBlogsList from "@/components/custom/HomeBlogsList";
import Intro from "@/components/custom/Intro";

export default function Page() {
    return (
        <div className="divide-y-2 divide-gray-900/80">
            <Intro />
            <HomeBlogsList />
        </div>
    );
}
