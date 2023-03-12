import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [skillGap, setSkillGap] = React.useState(null);
  const [skillArr, setSkillArr] = useState([]);
  const [workhistory, setWorkhistory] = useState([]);
  useEffect(() => {
    setSkillGap((window.innerWidth - 200 - 250) + 'px');
    let arr = [{ label: 'Html5', value: 4, id: 1 }, { label: 'Css3,Scss', value: 4, id: 2 },
    { label: 'Java Script', value: 4, id: 3 }, { label: 'Type Script', value: 4, id: 3 }, { label: 'Angular 2 ... 10', value: 4, id: 4 },
    { label: 'React js 16 ... 18', value: 4, id: 5 }, { label: 'Vue js 3', value: 3, id: 6 }, { label: 'Karma, jasmine', value: 4, id: 7 },
    { label: 'jest, RTL', value: 4, id: 8 }, { label: 'Cypress', value: 4, id: 9 },
    { label: 'Corejava', value: '3', id: 10 },
    { label: 'Spring Boot 2.6', value: 3, id: 11 }, { label: 'SQL', value: 3, id: 12 }, { label: 'TFS', value: 3, id: 16 },
    { label: 'GIT', value: 4, id: 13 }, { label: 'SVN', value: 4, id: 14 }, { label: 'Jmeter 5', value: 4, id: 15 }];
    setSkillArr(arr);
    let history = [{
      designation: 'Lead Consultant', company: 'Virtusa - polaris, Hyderabad', timespan: '2020-20-03 to till date',
      projects: [`I.CXO-billpay — JPMC 
      CXO ui is a banking application, which is having several modules, in which we are working on bill pay module its having banking add payee and remove payee and see details and request info, it’s basically monolith application  we divided that monolith application into microapp so each modules we are separated micro app and combined to the main app.
      `, `II.ESG - JPMC, Environment Social and Governance : This is new requirement under TAD seal for enabling users to create various combinations of Product under ESG based on available selections and getting approval for them if neede.
      `, `III.VES - JPMC, Verification Engineering Services : validating that a Set of Development and Testing practices to increase the overall quality of feature delivery and decrease time to market are completed.These Practices and tooling adoption applies to all Technology stacks as well as modernized and non-modernized application. VES will provide a suite of tools for the teams to use so that the Acceptance Criteria can be met, which will include capabilities for the teams to use their own tooling, and send the data to VDE framework to be used in the Acceptance Criteria step. Complete these tasks to get started `,
        `IV.GCB - CITI , This is US web internet banking application. In application user can see their bank account, credit card, debit card details. I have worked on the application where user can see personalized offer based on account transcation history.`],
      skills: 'Reactjs 18, Angular 10, ag-grid, git, jmeter, blazemeter, java, spring boot, jboss, cypress, jest, rtl, tslint, aws'
    },
    {
      designation: 'Delivery Module Lead', company: 'Mphasis, Hyderabad', timespan: '25 nov  2019 to 04 mar 2020',
      projects: [`I.pmi-projct management information, it is used for employees to get project releated information and employee communicatio to use chatting and video.
      we have used open-paas tool to create environment for chat and mail.
        `],
      skills: 'Angular 9, git, aws,karma,jasmine,spring boot, java, jboss'
    },
    {
      designation: 'Tech Lead', company: 'HCL, Hyderabad', timespan: '30 Oct 2017 to 08 Nov 2019',
      projects: [`I.ABL — DBS 
      ABL is a banking application, it will help the enduser how to apply for a loan, it will also help the banking staff peoples.It has several roles there (like RM,CRM,ADMIN,OPS,CCU).
      `, `II.TIW— DBS 
      TIW Transaction Initiation Workflow , It's stage wise transaction , for import/export from source to destination.We have total 12 stages (Scan Maker/checker, pre-Processing Maker/Checker , scrutiny,Processing maker/checker,Post processing, QA,Complete) is there to process the end-end transaction complete.
      `],
      skills: 'Angular 9,Reactjs 16, git, jmeter, blazemeter, java, spring boot, jboss, karma, jasmine, cypress'
    },
    {
      designation: 'Sr. Software Enginee', company: 'Tech Mahindra, Hyderabad', timespan: '24 Oct 2016 to 09 May 201',
      projects: [`I.MAGNETONE TEAM 
      Magnet Oneteam is an online space allocation application, where the user can book their meeting rooms/workstation and private space.It has omniture for analytics purposes.
         `],
      skills: 'Angular 4, tfs , java , tomcat'
    },
    {
      designation: 'Business Associat', company: 'Crown Solutions, Hyderabad', timespan: '18 Jan 2016 to 21 Jun 2016',
      projects: [`I.Air2go - it's project related air booking , my role is gathering client requirments fixing the bugs.`],
      skills: 'angularjs 1.2,svn,java , tomcat'
    },
    {
      designation: 'Software Engineer', company: 'Tech Mahindra, Hyderabad', timespan: '12 Aug 2013 to 14 Aug 2015',
      projects: [`I.CONNECT — MSSB
      Connect is an IVR application, where the agent can respond to the call and give the end user appropriate bank related information/transactions. End user can transfer the money, and the user can alter the checks.
         `],
      skills: 'Angular js 1.3, adobe flex, .net , c#, asp.net'
    },
    {
      designation: 'Software Engineer', company: 'Tarento, Bangalore', timespan: '01 Oct 2010 to 04 Feb 2013',
      projects: [`I.TOUCH GUIDE — CLICKBASE
      TouchGuide 2.0 is an application running in Kiosk(Touch Screen Systems) at malls. The purpose of this application is to help the customers of the mall to locate shops and services inside the mall. Using this application the user can locate a shop/service on the map. The interactive map will show a path from his/her current location to the destination Shop/service center. TouchGuide is developed as an integrated runtime to develop desktop based RIA (Rich Internet Application). The data is stored in the Kiosk itself and on an interval, the data will be updated from a central Db located over the internet.
         `, `II.TOUCH ADMIN — CLICKBASE 
         TouchAdmin is a web application running at malls. The purpose of this application is to store shop information to the TouchServer.The customer can fix the slide show timer for malls, they can upload the shop details data. They can give the Areaid names to the mall's map.The Data stored on the Central server and its update to the local server of the KIOSK.
         `],
      skills: 'Adobe catalyst, flex 4, flash 5. .net , c# , asp.net'
    }];
    setWorkhistory(history);
  }, [])
  return (
    <div className="App">

      <div className='maindiv'>
        <div className='sidebardiv'>
          <div style={{ display: 'inline', marginTop: '13px' }}>
            <div className='locationdiv sideicondiv'>
              <span className='fa-solid fa-location-dot location_icon'>
              </span>
            </div>
            <span style={{ paddingTop: '6px', paddingLeft: '3px' }}>karimnagar,</span><span style={{ paddingTop: '6px', display: 'block' }}> india, 505001</span>
          </div>
          <div style={{ display: 'inline', marginTop: '13px' }}>
            <div className='locationdiv sideicondiv'>
              <span className='fa-solid fa-language location_icon'>
              </span>
            </div>
            <span style={{ paddingTop: '6px', paddingLeft: '3px' }}>languages </span>
            <span style={{ paddingTop: '6px', display: 'block', paddingLeft: '40px' }}> Telugu</span>
            <span style={{ paddingTop: '6px', display: 'block', paddingLeft: '40px' }}> Hindi</span>
            <span style={{ paddingTop: '6px', display: 'block', paddingLeft: '40px' }}>English</span>
          </div>

          <div style={{ display: 'inline', marginTop: '13px' }}>
            <div className='locationdiv sideicondiv'>
              <span className='fa-solid fa-certificate location_icon'>
              </span>
            </div>
            <span style={{ paddingTop: '6px', paddingLeft: '3px' }}>Certifications </span>
            <span style={{ paddingTop: '6px', display: 'block' }}> Microsoft html5,css3</span>
            <span style={{ paddingTop: '6px', display: 'block' }}> Adobe Flex 4</span>
            <span style={{ paddingTop: '6px', display: 'block' }}> Adobe Flash cs5</span>
          </div>
          <div style={{ display: 'inline', marginTop: '13px' }}>
            <div className='locationdiv sideicondiv'>
              <span className='fa-solid fa-award location_icon'>
              </span>
            </div>
            <span style={{ paddingTop: '6px', paddingLeft: '3px' }}>Awards </span>
            <span style={{ paddingTop: '6px', display: 'block', whiteSpace: 'nowrap' }}> Virtusa Spot Mar 2020</span>
            <span style={{ paddingTop: '6px', display: 'block' }}>Tarento Appreciation</span>
          </div>


          <div style={{ display: 'flex', gap: '6px', marginTop: '13px', paddingTop: '40px', paddingBottom: '20px' }}>
            <div className='locationdiv'>
              <span className='fa-solid fa-building-columns' style={{ paddingTop: '9px', color: 'white' }}>
              </span>
            </div>
            <span style={{ paddingTop: '6px' }}>Skills</span>
          </div>
          {skillArr.length && skillArr.map(item =>
            <div className='skill_div'>
              <div style={{ width: '350px' }}>
                {item.label}
              </div>
              <div style={{ width: '150px', textAlign: 'left', paddingTop: '4px' }}>
                {item.value >= 1 &&
                  <span className='skilleleactive'></span>}
                {item.value >= 2 &&
                  <span className='skilleleactive'></span>}
                {item.value >= 3 &&
                  <span className='skilleleactive'></span>}
                {item.value >= 4 &&
                  <span className='skilleleactive'></span>}
                {item.value >= 5 &&
                  <span className='skilleleactive'></span>}
                {item.value < 5 &&
                  <span className='skilleleinactive'></span>}
                {item.value < 4 &&
                  <span className='skilleleinactive'></span>}
                {item.value < 3 &&
                  <span className='skilleleinactive'></span>}
                {item.value < 2 &&
                  <span className='skilleleinactive'></span>}
                {item.value < 1 &&
                  <span className='skilleleinactive'></span>}
              </div>
            </div>
          )}
        </div>
        <div className='focusdiv'>
          <div className='div_title_name'>
            <div style={{ fontSize: '26px' }}> Vijay N</div>
            <div style={{ fontSize: '26px' }}>Lead Consultant</div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
              <div className='phonediv'>
                <span className='fa-solid fa-phone' style={{ paddingTop: '9px', color: 'white' }}>
                </span>
              </div>
              <span style={{ paddingTop: '6px' }}>+91 6281253257</span>
            </div>

            <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
              <div className='locationdiv'>
                <span className='fa-regular fa-envelope' style={{ paddingTop: '9px', color: 'white' }}>
                </span>
              </div>
              <span style={{ paddingTop: '6px' }}>vbk586072@gmail.com</span>
            </div>
          </div>
          <div>
            <p>As a Front End Lead with 10 years 8 months of experience, I am a highly skilled and accomplished web developer with a deep understanding of front-end development. My expertise includes programming languages such as HTML, CSS, and JavaScript, and front-end frameworks such as React, Angular, and Vue.
              <br></br><br></br>Throughout my career, I have worked on a variety of web projects, from small-scale to large-scale, and I have an in-depth understanding of the entire development process from design to deployment. I stay up-to-date with the latest trends and best practices in front-end development, ensuring that my team produces high-quality, efficient, and modern code.
            </p>
          </div>

          <div className='workhistorydiv'>
            <div style={{ display: 'flex', gap: '6px', marginTop: '13px' }}>
              <div className='locationdiv'>
                <span className='fa-solid fa-briefcase' style={{ paddingTop: '9px', color: 'white' }}>
                </span>
              </div>
              <span style={{ paddingTop: '6px' }}>Work History</span>
            </div>
            {workhistory.length && workhistory.map(item =>
              <div className='skillMaindiv'>
                <span className='desigspan'>{item.designation}</span><br></br>
                <span className='compayspan'>{item.company}</span> <span className='timespan'>{item.timespan}</span>
                {item.projects.map(data =>
                  <div className='projectdiv'>
                    {data}
                  </div>)}
                <div className='divskills'>
                  skills: {item.skills}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
