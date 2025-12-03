import CustomLink from "./CustomLink";
import RotatingHello from "./RotatingHello";

export default function Intro() {
    return (
        <div>
            <RotatingHello />
            <div className="px-4 pb-5 leading-relaxed">
                <div className="text-l text-[#fffff0]">
                    <p className="">
                        I&apos;m Shivam and I love to build things!
                    </p>
                    <p className="pt-5">
                        I usually work with JavaScript and GoLang but can play
                        with python if needed. My recent project,{" "}
                        <CustomLink newTab href="https://eq.z1shivam.in">
                            entre-quiz
                        </CustomLink>{" "}
                        got 150+ users on it&apos;s first day 🎉. I am currently
                        a final year student with Computer Science as my major.
                    </p>
                    <p className="pt-5">
                        You can find my résumé at{" "}
                        <CustomLink href="https://cv.z1shivam.in/">
                            cv.z1shivam.in
                        </CustomLink>
                    </p>
                </div>
            </div>
        </div>
    );
}
