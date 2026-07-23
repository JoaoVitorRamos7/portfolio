import SectionSkills from "./SectionSkills/index.jsx";
import SectionAbout from "./SectionAbout/index.jsx";
import SectionProjects from "./SectionProjects/index.jsx";
import SectionContact from "./SectionContact/index.jsx";


function Main(){
    return(
        <main>
            <SectionSkills/>
            <SectionAbout/>
            <SectionProjects/>
            <SectionContact/>
        </main>
    );
}

export default Main;