function SliderComp() {
    return (
     <>
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
            <span style={{ paddingTop: '6px', display: 'block', whiteSpace: 'nowrap' }}> Virtusa Spot Mar 2021</span>
            <span style={{ paddingTop: '6px', display: 'block' }}>Tarento Appreciation</span>
          </div>
     </>
    );
}

export default SliderComp;
