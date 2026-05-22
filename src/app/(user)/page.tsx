import ContactSection from "@/components/user/Contact/Contact";
import Hero from "@/components/user/HeroSection/HeroSection";

import Qualification from "@/components/user/Qualification/Qualification";
import AdvancedSkill from "@/components/user/Skill-Tech/Skill-Advanced";
import SkillFlex from "@/components/user/Skill-Tech/Skill-flex/Skill-Flex";
import SkillTabs from "@/components/user/Skill-Tech/Skill-Tabs";
import { Charts } from "../../components/user/Charts/Charts";

import MarqueeSection from "@/components/user/Marquee'/Marquee";




const UserMainPages = () => {
    return (
        <div>
            <Hero/>
            <AdvancedSkill/>
          <MarqueeSection/>
            <SkillTabs/>
            <Charts/>
            <SkillFlex/>
            <Qualification/>
            <ContactSection/>
           
        </div>
    );
};

export default UserMainPages;