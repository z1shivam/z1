import CustomLink from "./CustomLink";

export default function Intro() {
    return (
        <div className="p-4">
            <div className="text-l text-[#fffff0]">
                <p className="">
                    Hi I&apos;m Shivam and I love to build things!
                </p>
                <p className="pt-4">
                    I usually work with JavaScript and GoLang but can play with
                    python if needed. My recent project,{" "}
                    <CustomLink newTab href="https://eq.z1shivam.in">
                        entre-quiz
                    </CustomLink>{" "}
                    got 150+ users on it&apos;s first day 🎉. I am currently a
                    final year student with Computer Science as my major.
                </p>
                <p className="pt-4">
                    You can find my résumé at{" "}
                    <CustomLink href="https://cv.z1shivam.in/">
                        cv.z1shivam.in
                    </CustomLink>
                </p>
            </div>
        </div>
    );
}
