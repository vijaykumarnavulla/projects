import React, { useEffect, useState } from 'react';

function CarrerGapComp() {
    const [carGap, setCarGap] = useState([]);
    useEffect(() => {
        let arr = [{
            desc: 'I.Post-graduate Degree AND Tarento', timespan: 'Jun-2008 to Sep-2010',
            reason: 'Great Recession United States housing bubble in 2005-2012' //2 years, 3 months
        },
        {
            desc: 'II.Tarento AND Tech Mahindra', timespan: 'Mar-2013 to Jul-2013',
            reason: 'Freelancig, Project work , Career transition'
        },
        {
            desc: 'III.Tech Mahindra AND Crown Solutions India Pvt Ltd', timespan: 'Sep-2015 to Dec-2015',
            reason: 'Taking break for marriage'
        },
        {
            desc: 'IV.Crown Solutions India Pvt Ltd AND Tech Mahindra', timespan: 'Jul-2016 to Sep-2016 ',
            reason: 'personal reasons such as health issues'
        },
        {
            desc: 'V.Tech Mahindra AND HCL', timespan: 'Jun-2017 to Sep-2017',
            reason: 'personal reasons such as health issues'
        }];
        setCarGap(arr);

    }, [])

    return (
        <>
            <div>
                <div style={{ display: 'flex', gap: '6px', marginTop: '13px' }}>
                    <div className='locationdiv'>
                        <span className='fa-solid fa-arrows-left-right-to-line' style={{ paddingTop: '9px', color: 'white' }}>
                        </span>
                    </div>
                    <span style={{ paddingTop: '6px' }}>Breaks Details</span>
                </div>
                <div className='carrer-d-f'>
                    <div>
                        {carGap.length && carGap.map((item, index) =>
                            <div key={'gap_'+index} className='carrer-gap-main-div carrer-d-f'>
                                <div className='carrer-gap-desc'>
                                    <div>{item.desc}
                                    </div>
                                    <div className='carre-gap-time-span'>
                                        {item.timespan}
                                    </div>

                                </div>
                                <div className='carrer-gap-reason'>
                                  <div>{item.reason}</div> 
                                </div>
                            </div>
                        )}

                    </div>
                    {/* <div className='carrer-d-f'>
                        <div className='gradient'>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default CarrerGapComp;