import HomeBlogsList from "@/components/custom/HomeBlogsList";
import Intro from "@/components/custom/Intro";

export default function Page() {
    return (
        <div className="divide-y-2 divide-gray-800">
            <Intro />
            <HomeBlogsList />
        </div>
    );
}
