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
  <span style={{ paddingTop: '6px' }}>vijaykumarnavulla@gmail.com</span>
</div>
</div>
    );
}

export default ContactDetailComp;

