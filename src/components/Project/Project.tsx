import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href="https://github.com/Tusharthakre20Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="" /></a> */}
                {/* <a href="https://vote.Tushar.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a> */}
                 </div>
            </header>
            <div className="body">
              <h3>Disk Space Management( Client -Tata Motors )
              </h3>
              <p> "Developed and implemented an efficient disk space management system to monitor and optimize storage usage. Utilized automated tools for tracking file sizes, identifying large files, and creating alerts for potential storage issues. Enhanced system performance and reduced unnecessary storage consumption, improving overall resource allocation.".</p></div>
            <footer> <ul className="tech-list"> <li>REACT JS</li> <li>JAVASCRIPT</li> <li>JAVA</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href="https://github.com/Tusharthakre20AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a> */}
                {/* <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a> */}
              </div>
            </header>
            <div className="body">
              <h3>MBSE JIRA ( Client - Tata Motors )</h3>
              <p>
              Worked on developing and enhancing Java applications to support MBSE initiatives, focusing on automating processes to improve software deployment efficiency, reliability, and collaboration between software and mechanical teams. Led the customization of Jira workflows, dashboards, and automation rules to optimize project management processes. Implemented custom fields, permissions, and integrations to enhance team collaboration and improve reporting. Streamlined workflows to align with business requirements, driving efficiency and productivity across departments.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JAVA</li>
                <li>JIRA</li>
               
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}