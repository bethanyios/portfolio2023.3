import sienna from "../images/SIENNA-logo.svg"
import fac from "../images/FAC-logo.svg"
import together from "../images/together-logo.svg"
import yalla from "../images/yalla-logo.svg"

import patch1 from "../images/patch1.svg"
import patch2 from "../images/patch2.svg"
import patch3 from "../images/patch3.svg"


import '../styling/projects.css';

const Projects = () => {
  return (
<>
<img src={patch1} className="bg1" alt="background"/>
<img src={patch2} className="bg2" alt="background"/>
<img src={patch3} className="bg3" alt="background"/>

<div className="project-container">
<div className="logo-column">
<a href="https://www.yallacooperative.com/" rel="noreferrer" target="_blank"><img src={yalla} alt="logo" className="logo-y"/></a>
    <a href="https://www.yallacooperative.com/" rel="noreferrer" target="_blank">yallacooperative.com/</a>
</div>
    <div className="content-column">  
    <h1>Shannon Trust & The Ministry of Justice. </h1>
    <strong><p>UX Designer & Researcher, App Development (2021 - present)</p></strong>
    <p>Shannon Trust has been leading a reading intervention program in prisons for over 20 years, utilising physical books and peer learning.</p>
    <p>Over 50% of adult prisoners in the UK are illiterate, making it a critical social and equality issue. Thanks to the Trust's efforts, 90% of its learners pursue further education. The Ministry of Justice's initiative to reduce reoffending rates provided us with funding to digitise the program into an app.</p>
    <p>My role involved converting reading exercises into digital formats through collaborative work with stakeholders, using a design thinking workshop tailored specifically for this process. As the Research Lead, I have implemented various methodologies, including remote and in-prison usability testing. I've also overseen audio production, a feature incorporated to enhance the accessibility for non-readers.</p>
    <p>Since the pilot launch with 300 prison leavers across the Kent, Surrey and Sussex probation region, I have conducted research for a community rollout, including a longitudinal diary study and user interviews. This effort aims to develop a whitelabel app that could be adopted by various organisations seeking to benefit from it.</p>
      
    <h1>Social Mobility Foundation. </h1>
    <strong><p>UX Designer & Project Manager, Website & Application Form Development (2022-present)</p></strong>
    <p>The Social Mobility Foundation (SMF) enlisted the services of Yalla for the digital transformation of their organisation. </p>
    <p>I undertook the redesign of the student application form with the goal of boosting
      conversion rates and of the Employer Index Report webpage, catering to
      high-level corporations aiming to assess their social mobility impact. To ensure ongoing
      feedback collection, I conducted weekly co-design sessions with young users and held design
      thinking workshops involving stakeholders. As is my process across all projects with research, I
      facilitated usability testing and compiled synthesis documentation using Notion, which I
      subsequently presented to stakeholders along with my recommendations.</p>
    <p>Upon launching the application form, tracked through Google Analytics, SMF observed a
      record-breaking influx of applicants within 24 hours. This outcome of boosted conversion rates stands as a testament to the
      effectiveness of the user-centered design approach I implemented.</p>
      <p>As well as the UX designer, I was tasked with serving as the Project Manager, a welcome challenge for me and an opportunity to develop management skills. We are currently in the second phase of work with this client, working on a full website transformation.</p>
          
    <h1> The Scouts Association. </h1>
    <strong><p>UX Designer, Web App Development (2022 - present)</p></strong>
    <p>The Scouts Association wanted to improve the digital skills of their volunteers. Through many iterations. I designed and tested a tool that has recently been launched, I now manage the SLA maintenance.</p>
    <p>The Digital Skills tool is a place to access learning content and evolved with design thinking to include a personalisation assessment gauging what level the learner is with their skills. Through further workshopping, we incorporated the role of "Digital Champion", users who can support learners by answering questions through a forum or directly mentoring.</p>
    <p> My role across projects includes stakeholder management which as well as presenting insights also involves advocating for users when assumptions are not validated in research. Throughout the process volunteers were involved in co-design workshop sessions and in my research. This level of involvement made sure the tool was highly user-centric and rooted in the needs of actual people.</p>
    <p>The tool has been awarded runner up in the Digital Leaders 100 Awards for Digital Skills or Talent Initiative of the Year (Product or Service) category. You can read more about the tool <a className="inline" href="https://www.scouts.org.uk/news/2023/july/let-s-talk-about-digital-skills-and-why-they-re-so-important/ " rel="noreferrer" target="_blank">here.</a></p>
    
    <h1> Chiltern Music Therapy.</h1>
    <strong><p>UX Designer, Website Development (2022)</p></strong>
    <a href="https://www.chilternmusictherapy.co.uk/" target="_blank" rel="noreferrer">chilternmusictherapy.com/</a>
    <p>We redeveloped the website to transform the digital presence Chiltern Music Therapy and provide better access to their various therapy offerings.</p>
    <p>With the client, I established website goals and KPIs and formulated testable hypotheses. Once that was defined, I orchestrated design thinking workshops conducting user personas and service journey mapping exercises which allowed me to build out user stories to form the site structure.  Additionally, I designed a user-friendly CMS using Webflow, empowering the client to seamlessly make updates and maintain the website.</p>
    <p>My findings showed it was key to focus on streamlining the enquiry process: triaging users through relevant flows such as "who we work with" and "where we work", to enable an intuitive journey through the site for their needs. The user story ends with a referral form where users can select the type of referral they require, creating a new and efficient backend for Chiltern to manage enquiries.</p>
    <p>“From responding to our brief, to in person workshops to bring the vision to life to finally a brand new shiny website, it was a hugely positive experience. The focus that Yalla have on the user when building a website really did set them apart. We are so happy with the website we now have and the ability we have to make changes ourselves and to request changes from the dev team makes everything so much easier to manage.” - Katie Shushter</p> 
    
    
    <h1> Trades Union Congress. </h1>
    <strong><p>UX Researcher & Facilitator, User Research (2023)</p></strong>
    <p>I conducted user research for the Trades Union Congress (TUC) regarding union member experiences with the cost of living crisis. It was a crucial endeavor to gain deep insights into the challenges faced by workers. 
       By engaging in qualitative interviews with members from various unions including the Royal Mail, I moderated research to gather firsthand narratives.</p>
    <p>Using Notion, I put together documentation using my synthesis of the findings to present to a number of TUC stakeholders. I categorised the qualititative research to make the information interpretable and provided stats to show the sway of opinion within the data. This has since been published to the unions with the focus of how TUC can better support members with their content.</p>
    <p>The research will empower the TUC to advocate effectively for policy changes to address the needs and concerns of workers, ensuring that their voices are heard and their struggles acknowledged in the pursuit of creating a fair and sustainable economic landscape for all.</p> 
  </div>

</div>

<div className="project-container">
<div className="logo-column">
<a href="https://sienna-website.vercel.app/" target="_blank" rel="noreferrer"><img src={sienna} alt="logo"/></a>
    <a href="https://sienna-website.vercel.app/" target="_blank" rel="noreferrer">sienna.com/</a>
</div>
    <div className="content-column">
    <h1>Just Like Us.</h1>
    <strong><p>UX Designer (Jan - Mar 2021)</p></strong>
    <p>
    A user research project with CAST/Catalyst for LGBT+ organisation, 
    Just Like Us, to define a resource database and e-learning platform. 
    We built several prototypes and conducted usability and AB testing with a range of educators. Our findings were then compiled for handover to another digital agency.
    </p>
    <p>Made with Figma, Miro, HackMD, Thinkific, LearnDash & Google docs.</p>
  
    <h1>Discovery Learning Programme.</h1>
    <strong><p>UX Designer (Sept - Oct 2020)</p></strong>
    <p>
    A discovery programme for CAST/Catalyst with 9 charity groups 
    to train staff in digital service design. This programme 
    involved guiding the groups through a design sprint to
    come up with solutions that would solve their varied problem areas. 
    With tailored support and coaching calls, we supported the participants 
    in putting together funding applications for development.
    </p>
    <p>We were given the opportunity to design our own workshops to conduct with the various charities. This is something in which we have built our expertise and tailor each project with the most effective design sprint exercises for the user group</p>
    <p>Made with Miro.</p>
  
    <h1>CyberSafe Tool For Schools.</h1>
    <strong><p>UX Designer & Frontend Developer (Jun - Sept 2020)</p></strong>
    <p>
    A survey app for primary schools in Ireland for CyberSafeKids to measure cybersafety
    on all levels: leadership, teacher and students. The tool aims to
    encourage schools to educate on cybersafety for children and be able 
    to display their certification for the public. We are contracted for continued maintenance. 
    </p>
    <p>Made with Gatsby, Firebase, Airtable, Figma & Netlify CMS.</p>
   
    <h1>Cyber Break.</h1>
    <strong><p>UX Designer & Frontend Developer (Oct 2020)</p></strong>
    <p>
      Another project with CyberSafeKids: a family quiz to determine cybersafety at home made for the 
      promotion of digital detox day in Ireland. This was later developed further 
      for future use.
    </p>
    <p>Made with Figma, ReactJS & Airtable.</p>

    <h1>Collaborative Digital Training.</h1>
    <strong><p>UX Designer & Frontend Developer & UX Designer (May - June 2020) </p></strong>
    <p>
    A collaboratively designed MVP built for two charities: Social Action for Health & Pursuing Independent Paths, on a 
    learning programme run by CAST/Catalyst.
    Resource Centre was developed as a companion app to online video learning 
    sessions where charities can post info and links to session 
    resources that are accessible to participants. The programme 
    also involved training the participants in Product Ownership 
    in order to upskill people in digital service design.
    </p>
    <p>Made with Figma, ReactJS & Airtable.</p>

    <h1>My Best Life.</h1>
    <strong><p>UX Designer (Mar - May 2020)</p></strong>
    <p>
    A definition programme with three collaborating youth charities: Leap, The Mix and UK Youth,  
    as part of the second phase of an ongoing project run by 
    National Philanthropy Capital. We defined and prototyped 3 apps: 
    youth vote, youth coin and the recommender; usability testing each 
    with a various groups of young people.
    </p>
    <p>Made with Figma & Miro.</p>
    </div> 
</div>

<div className="project-container">
<div className="logo-column">
<a href="https://www.foundersandcoders.com/" rel="noreferrer" target="_blank"><img src={fac} alt="logo"/></a>
    <a href="https://www.foundersandcoders.com/" rel="noreferrer" target="_blank">foundersandcoders.com/</a>
</div>
    <div className="content-column">  
    <h1>SafeSpace.</h1>
    <strong><p>Scrum Lead (Feb 2020)</p></strong>
    <p>
      A site for the members of the Musician’s Union 
      to report instances of sexual harassment/abuse 
      at work in the music industry 
    </p>
    <p> 
      Made with ReactJs, Netlify Lamdas, Airtable, Figma & Cypress.
      </p>

    <h1>Signpost.</h1>
    <strong><p>UX Lead (Jan 2020)</p></strong>
    <p>
      A student project idea I proposed to create an app for people at risk of homelessness to find categorised services using a map. 
    </p>
    <p>
      Made with ReactJs, Airtable & Figma. 
    </p>
    </div>
</div>

<div className="project-container">
<div className="logo-column">
<a href="https://www.together-uk.org/" rel="noreferrer" target="_blank"><img src={together} alt="logo"/></a>
    <a href="https://www.together-uk.org/" rel="noreferrer" target="_blank">together-uk.org/</a>
</div>
    <div className="content-column">  
    <h1>Together for Mental Wellbeing.</h1>
    <strong><p>HR Administrator (Jan - Oct 2019)</p></strong>
    <p>
      Administrator for the HR team in a mental health charity rooted in service-user involvement. The head office takes care of around 600 employees from services all over the UK. This job involved interacting and supporting staff and managers regularly, as well as minute taking for disciplinaries. This gave me the opportunity to learn about the functionality of a charity from within.  
    </p>
    <p>
       In addition, I contributed to the implementation of a new HR system which was incredibly insightful to be on the charity side of digital integrations. As a developer and UX designer, I have experience in their position which makes me conscious of their perspective.
    </p>
    </div>
</div>

 </>
  );
}

export default Projects;
