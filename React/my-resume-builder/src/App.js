import React, { useEffect, useState } from 'react';
import './App.css';
import ContactDetailComp from './ContactDetailComp';
import './NameTitlecomp';
import './WorkhistoryComp';
import NameTitlecomp from './NameTitlecomp';
import TellAboutExp from './TellAboutExp';
import WorkhistoryComp from './WorkhistoryComp';
import SliderSkill from './SliderSkill';
import SliderComp from './SliderComp';
import EducationHistoryComp from './EducationHistoryComp';
import CarrerGapComp from './CarrerGapComp';

function App() {
  const [skillGap, setSkillGap] = React.useState(null);
  const [skillArr, setSkillArr] = useState([]);
  useEffect(() => {
    setSkillGap((window.innerWidth - 200 - 250) + 'px');
  }, [])
  return (
    <div className="App">

      <div className='maindiv'>
        <div className='sidebardiv'>
          <SliderComp></SliderComp>
          <SliderSkill></SliderSkill>
        </div>
        <div className='focusdiv'>
          <NameTitlecomp></NameTitlecomp>
          <ContactDetailComp></ContactDetailComp>
          <TellAboutExp></TellAboutExp>
          <WorkhistoryComp></WorkhistoryComp>
          <EducationHistoryComp></EducationHistoryComp>
          <CarrerGapComp></CarrerGapComp>
        </div>
      </div>
    </div>
  );
}

export default App;
