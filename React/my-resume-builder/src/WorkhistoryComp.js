import { useEffect, useState } from "react";

function WorkhistoryComp() {
const [workhistory, setWorkhistory] = useState([]);
useEffect(() => {
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
}, []);

return(
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
);
}
export default WorkhistoryComp;