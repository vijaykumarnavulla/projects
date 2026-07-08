import { useEffect, useState } from "react";

function WorkhistoryComp() {
  const [workhistory, setWorkhistory] = useState([]);
  useEffect(() => {
    let history = [
      {
        designation: 'Senior Software Engineer - E', company: 'UniqueHire, Hyderabad', timespan: '2025 July 15 to 2026 May 15',
        projects: [{
          item: `TINK - LLOYDS Bank 
    We have devopled it's a third party payment gateway for all LLoyds application , it's like a Plug-in for all the the LLOYds applicaiton they will navigate our application do the payment and reverse to the original aplicaiton.
    `, time: 'Time Period : 2025 July 15 to 2026 May 15'
        }],
        skills: 'MERN , GCP , Git ,docker , harness'
      },
      {
        designation: 'Lead Consultant', company: 'EPAM, Hyderabad', timespan: '2023 Apr 11 to 2025 May 22',
        projects: [{
          item: `I.AUTEXUI— LSEG AUTEXUI 
    it's a project about invoice details, export invoice details page, We have search functionaliyt , add invoice , edit invoice , we have did crud operation for invoice, Line item , autex and atr For displaying invoices for user all the months , we have used charts.
    `, time: 'Time Period : 2023 Apr 11 to 2025 May 22'
        }],
        skills: ' React-native 0.71, expo sdk 48, React 19, git, jmeter, docker , shell script , Node js , Mongo Db , Nest Js ,python, terraform , aws'
      },
      {
        designation: 'Lead Consultant', company: 'Virtusa - polaris, Hyderabad', timespan: '2020 Mar 20 to 2023 Apr 04',
        projects: [{
          item: `I.CXO-billpay — JPMC 
    CXO ui is a banking application, which is having several modules, in which we are working on bill pay module its having banking add payee and remove payee and see details and request info, it’s basically monolith application  we divided that monolith application into microapp so each modules we are separated micro app and combined to the main app.
    `, time: '2020-aug-01 to 2023-apr-04'
        }],
        skills: 'Reactjs 18, git, jmeter, node js ,blazemeter, java, spring boot, jboss, cypress, jest, rtl, tslint, aws'
      },
      {
        designation: 'Delivery Module Lead', company: 'Mphasis, Hyderabad', timespan: '25 nov  2019 to 04 mar 2020',
        projects: [{
          item: `I.pmi-projct management information, it is used for employees to get project releated information and employee communicatio to use chatting and video.
    we have used open-paas tool to create environment for chat and mail.
      `, time: 'Time Period : 25 nov 2019 to 04 mar 2020'
        }],
        skills: 'Angular 9, git, aws,karma,jasmine,spring boot, java, jboss'
      },
      {
        designation: 'Tech Lead', company: 'HCL, Hyderabad', timespan: '30 Oct 2017 to 08 Nov 2019',
        projects: [{
          item: `I.ABL — DBS 
    ABL is a banking application, it will help the enduser how to apply for a loan, it will also help the banking staff peoples.It has several roles there (like RM,CRM,ADMIN,OPS,CCU).
    `, time: 'Time Period : 30 Oct 2018 to 08 Nov 2019'
        }, {
          item: `II.TIW— DBS 
    TIW Transaction Initiation Workflow , It's stage wise transaction , for import/export from source to destination.We have total 12 stages (Scan Maker/checker, pre-Processing Maker/Checker , scrutiny,Processing maker/checker,Post processing, QA,Complete) is there to process the end-end transaction complete.
    `, time: 'Time Period : 30 Oct 2017 to 08 Nov 2018'
        }],
        skills: 'Angular 9,React-native, git, jmeter, blazemeter, java, spring boot, jboss, karma, jasmine, cypress'
      },
      {
        designation: 'Sr. Software Enginee', company: 'Tech Mahindra, Hyderabad', timespan: '24 Oct 2016 to 09 May 2017',
        projects: [{
          item: `I.MAGNETONE TEAM 
    Magnet Oneteam is an online space allocation application, where the user can book their meeting rooms/workstation and private space.It has omniture for analytics purposes.
       `, time: 'Time Period : 24 Oct 2016 to 09 May 2017'
        }],
        skills: 'Angular 4, tfs , java , tomcat'
      },
      {
        designation: 'Business Associat', company: 'Crown Solutions, Hyderabad', timespan: '18 Jan 2016 to 21 Jun 2016',
        projects: [{ item: `I.Air2go - it's project related air booking , my role is gathering client requirments fixing the bugs.`, time: 'Time Period : 18 Jan 2016 to 21 Jun 2016' }],
        skills: 'angularjs 1.2,svn,java , tomcat'
      },
      {
        designation: 'Software Engineer', company: 'Tech Mahindra, Hyderabad', timespan: '12 Aug 2013 to 14 Aug 2015',
        projects: [{
          item: `I.CONNECT — MSSB
    Connect is an IVR application, where the agent can respond to the call and give the end user appropriate bank related information/transactions. End user can transfer the money, and the user can alter the checks.
       `, time: 'Time Period : 12 Aug 2013 to 14 Aug 2015'
        }],
        skills: 'Angular js 1.3, adobe flex, .net , c#, asp.net'
      },
      {
        designation: 'Software Engineer', company: 'Tarento, Bangalore', timespan: '01 Oct 2010 to 04 Feb 2013',
        projects: [{
          item: `I.TOUCH GUIDE — CLICKBASE
    TouchGuide 2.0 is an application running in Kiosk(Touch Screen Systems) at malls. The purpose of this application is to help the customers of the mall to locate shops and services inside the mall. Using this application the user can locate a shop/service on the map. The interactive map will show a path from his/her current location to the destination Shop/service center. TouchGuide is developed as an integrated runtime to develop desktop based RIA (Rich Internet Application). The data is stored in the Kiosk itself and on an interval, the data will be updated from a central Db located over the internet.
       `, time: 'Time Period : 01 Oct 2010 to 04 Feb 2013'
        }, {
          item: `II.TOUCH ADMIN — CLICKBASE 
       TouchAdmin is a web application running at malls. The purpose of this application is to store shop information to the TouchServer.The customer can fix the slide show timer for malls, they can upload the shop details data. They can give the Areaid names to the mall's map.The Data stored on the Central server and its update to the local server of the KIOSK.
       `, time: 'Time Period : 01 Oct 2010 to 04 Feb 2013'
        }],
        skills: 'Adobe catalyst, flex 4, flash 5. .net , c# , asp.net'
      }];
    setWorkhistory(history);
  }, []);

  return (
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
              {data.item}
              <div className="projectTimediv">
                {data.time}
              </div>
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