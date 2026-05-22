import JobSkill from "./JobSkill";
import Qualification from "./Qualification";

const MySkills = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 p-4">
            <JobSkill />
            <Qualification />
        </div>
    );
};

export default MySkills;