import { useEffect, useState } from "react";

function EducationHistoryComp() {
    const [education, setEducation] = useState([]);
    useEffect(() => {
        let arr = [
            {
                school: 'P.R.R COLLEGE COMP. SCIENCE', location: 'Hyderabad — M.C.A',
                passoutUniver: 'May 2005 - May 2008 , Affiliated Osmania University', marks: '60', white: '40'
            },
            {
                school: 'Aurora Degree College', location: 'Warangal — B.sc (M.E.CS)',
                passoutUniver: 'May 2002 - May 2005 , Affiliated Osmania University', marks: '60', white: '40'
            },
            {
                school: 'Nava Vigayna Bharathi Jr. College', location: 'Warangal — M.P.C',
                passoutUniver: 'MAY 2000 - APR 2002, Affiliated A.P', marks: '58.5', white: '41.5'
            },
            {
                school: 'Sri chandra Memorial High School', location: 'Warangal',
                passoutUniver: 'MAY 1999 - APR 2000, Affiliated Kakatiya University', marks: '71.2', white: '28.8'
            }];
        setEducation(arr);
    }, []);
    return (
        <div className='workhistorydiv'>
            <div style={{ display: 'flex', gap: '6px', marginTop: '13px' }}>
                <div className='locationdiv'>
                    <span className='fa-solid fa-graduation-cap' style={{ paddingTop: '9px', color: 'white' }}>
                    </span>
                </div>
                <span style={{ paddingTop: '6px' }}>Education</span>
            </div>
            <div>
                {education && education.map((ele, index) =>
                    <div key={'edu_' + index} style={{ padding: '10px' }}>
                        <div>
                            <div style={{width:'450px',display:'inline-block'}}> 
                                <span>{ele.school}</span> ,<span>{ele.location}</span>
                            </div>

                            <div className="div_eduction_marks" style={{ backgroundImage: `linear-gradient(90deg,#8500ffe6 ${ele.marks}%,white ${ele.white}%` }}>
                                {ele.marks}%
                            </div>
                        </div>
                        <div>
                            <spa className='span_eductio_passout'>
                                {ele.passoutUniver}
                            </spa>
                        </div>
                    </div>
                )}
                <div>

                </div>


            </div>
        </div>
    );
}

export default EducationHistoryComp;
