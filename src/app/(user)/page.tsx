import ContactSection from "@/components/user/Contact/Contact";
import Hero from "@/components/user/HeroSection/HeroSection";
import Marquee from "@/components/user/Marquee'/Marquee";
import Qualification from "@/components/user/Qualification/Qualification";
import AdvancedSkill from "@/components/user/Skill-Tech/Skill-Advanced";
import SkillTabs from "@/components/user/Skill-Tech/Skill-Tabs";
import SkillTech from "@/components/user/Skill-Tech/Skill-Tech";
import Spider from "@/components/user/Spider/Spider";

const UserMainPages = () => {
    return (
        <div>
            <Hero/>
            <AdvancedSkill/>
            <Marquee/>
            <SkillTabs/>
            <SkillTech/>
            <Spider/>
            <Qualification/>
            <ContactSection/>
           
        </div>
    );
};

export default UserMainPages;