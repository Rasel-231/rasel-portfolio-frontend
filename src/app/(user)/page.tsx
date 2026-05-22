import ContactSection from "@/components/user/Contact/Contact";
import Hero from "@/components/user/HeroSection/HeroSection";
import Marquee from "@/components/user/Marquee'/Marquee";
import Qualification from "@/components/user/Qualification/Qualification";
import AdvancedSkill from "@/components/user/Skill-Tech/Skill-Advanced";
import SkillFlex from "@/components/user/Skill-Tech/Skill-flex/Skill-Flex";
import SkillTabs from "@/components/user/Skill-Tech/Skill-Tabs";
import { Charts } from "../../components/user/Charts/Charts";




const UserMainPages = () => {
    return (
        <div>
            <Hero/>
            <AdvancedSkill/>
            <Marquee/>
            <SkillTabs/>
            <Charts/>
            <SkillFlex/>
            <Qualification/>
            <ContactSection/>
           
        </div>
    );
};

export default UserMainPages;