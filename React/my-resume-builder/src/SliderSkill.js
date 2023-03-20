import { useEffect, useState } from "react";

function SliderSkill() {
  const [skillArr, setSkillArr] = useState([]);
  useEffect(() => {
    let arr = [{ label: 'Html5', value: 4, id: 1 }, { label: 'Css3,Scss', value: 4, id: 2 },
    { label: 'Java Script', value: 4, id: 3 }, { label: 'Type Script', value: 4, id: 3 }, { label: 'Angular 2 ... 10', value: 4, id: 4 },
    { label: 'React js 16 ... 18', value: 4, id: 5 }, { label: 'Vue js 3', value: 3, id: 6 }, { label: 'Karma, jasmine', value: 4, id: 7 },
    { label: 'jest, RTL', value: 4, id: 8 }, { label: 'Cypress', value: 4, id: 9 },
    { label: 'Corejava', value: '3', id: 10 },
    { label: 'Spring Boot 2.6', value: 3, id: 11 }, { label: 'SQL', value: 3, id: 12 }, { label: 'TFS', value: 3, id: 16 },
    { label: 'GIT', value: 4, id: 13 }, { label: 'SVN', value: 4, id: 14 }, { label: 'Jmeter 5', value: 4, id: 15 }];
    setSkillArr(arr);
  }, [])
    return (
        <>
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
       </>
    );
}

export default SliderSkill;
