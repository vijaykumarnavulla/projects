function ContactDetailComp() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
        <div className='phonediv'>
          <span className='fa-solid fa-phone' style={{ paddingTop: '9px', color: 'white' }}>
          </span>
        </div>
        <span style={{ paddingTop: '6px' }}>+91 8790285016</span>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
        <div className='locationdiv'>
          <span className='fa-regular fa-envelope' style={{ paddingTop: '9px', color: 'white' }}>
          </span>
        </div>
        <span style={{ paddingTop: '6px' }}>vkn607258@gmail.com</span>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
        <div className='locationdiv'>
          <span className='fa-brands fa-linkedin' style={{ paddingTop: '9px', color: 'white' }}>
          </span>
        </div>
        <span style={{ paddingTop: '6px' }}>
          <a href='https://www.linkedin.com/in/vijay-n-9b8824348/' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'none' }}>
            vijay-n-9b8824348
          </a>
        </span>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
        <div className='locationdiv'>
          <span className='fa-brands fa-hackerrank' style={{ paddingTop: '9px', color: 'white' }}>
          </span>
        </div>
        <span style={{ paddingTop: '6px' }}>
          <a href='https://www.hackerrank.com/profile/vijay_navulla' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'none' }}>
            vijay_navulla
          </a>
        </span>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
        <div className='locationdiv'>
          <span className='fa-brands fa-github' style={{ paddingTop: '9px', color: 'white' }}>
          </span>
        </div>
        <span style={{ paddingTop: '6px' }}>
          <a href='https://github.com/vijaykumarnavulla' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'none' }}>
            vijaykumarnavulla
          </a>
        </span>
      </div>
    </div>
  );
}

export default ContactDetailComp;

