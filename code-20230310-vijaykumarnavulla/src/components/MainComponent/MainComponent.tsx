import React, { useEffect, useRef, useState } from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { downarrow, downarrowIcon, mobileMenu, serachIcon } from '../../constants/constant_iconst';
import '../../assets/styles/mainComponent.css';

const MainComponent = () => {

  const pathname = useLocation().pathname
  const spanIconEle = useRef<HTMLInputElement>(null);
  const divCitieIcon = useRef<HTMLInputElement>(null);
  const divSearchbtnEle = useRef<HTMLInputElement>(null);
  const hederSpanBottmArrow = useRef<HTMLInputElement>(null);
  const [inputsearchtw, setInputsearchtw] = useState('fit-content');

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const [isShowMobilMenu, setIsShowMobilMenu] = React.useState(false);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
      setInputsearchtw((window.innerWidth / 100 * 20) - 15 + 'px');
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });

  useEffect(() => {
    if (spanIconEle && spanIconEle.current) {
      spanIconEle.current.innerHTML = mobileMenu;
    }
    if (divCitieIcon && divCitieIcon.current) {
      divCitieIcon.current.innerHTML = divCitieIcon.current.innerHTML + ' ' + downarrow;
    }

    if (divSearchbtnEle && divSearchbtnEle.current) {
      divSearchbtnEle.current.innerHTML = serachIcon + '&nbsp;&nbsp;' + 'Search';
    }
    if (hederSpanBottmArrow && hederSpanBottmArrow.current) {
      hederSpanBottmArrow.current.innerHTML = downarrowIcon;
    }

    return () => {
      if (divCitieIcon && divCitieIcon.current) {
        divCitieIcon.current.innerHTML = 'Cities';
      }
      if (divSearchbtnEle && divSearchbtnEle.current) {
        divSearchbtnEle.current.innerHTML = 'Search';
      }
      if (hederSpanBottmArrow && hederSpanBottmArrow.current) {
        hederSpanBottmArrow.current.innerHTML = '';
      }
    }
  }, []);

  const onMobileIconBtnClick = () => {
    setIsShowMobilMenu(!isShowMobilMenu);
  }

  return (<>
    <div className='header_main_div' data-testid="Maincomponent">

      {/* menu items mobile view */}
      <div className='header_logo_mobile' ref={spanIconEle} onClick={onMobileIconBtnClick}></div>

      {/* menu items */}
      <div className='header_menu_div'
        style={{ display: (dimensions.width < 700 && !isShowMobilMenu) ? 'none' : 'flex' }}>
        <div className='header_main_logo'>
          Your Logo
        </div>
        <div className='header_main_menus'>
          <div className='header_menu_common'>
            <Link className={`${pathname === '/explore' ? 'header_active header_w' : 'header_no_active header_w'}`}
              to='/explore'>Explore</Link>
          </div>
          <div className='header_menu_common'>
            <Link className={`${pathname === '/aboutus' ? 'header_active header_w' : 'header_no_active header_w'}`}
              to='/aboutus'>About Us</Link>
          </div>
          <Link className={`${pathname === '/cities' ? 'header_active header_w' : 'header_no_active header_w'}`} to='/cities'>
            <div className='header_menu_common' ref={divCitieIcon}>
              Cities
            </div>
          </Link>
          <div className='header_menu_call'>
            <Link className={`${pathname === '/call' ? 'header_active header_w' : 'header_no_active header_w'}`}
              to='/call'>Call</Link>
          </div>

        </div>
      </div>


      <div className='header_div_header_desc'>
        {/* header content */}

        <div className='header_main_content'>
          Rethink your living <br /> & renting
        </div>

        {/* description content */}
        <div className='header_main_desc'>
          Make your stay painless with us
        </div>
      </div>
      <div className='header_main_height'></div>
      {/* seach contents */}
      <div className='header_main_search_content'>
        {/* select ur city */}
        <div className='header_main_search_common'>
          <span className='header_main_search_span_common'>City</span>
          <input type={'text'} className='header_main_input_common'
            style={{ width: inputsearchtw }} placeholder={'Select your city'}></input>
        </div>
        {/* select ur dates */}
        <div className='header_main_search_common'>
          <span className='header_main_search_span_common'>DATES</span>
          <input type={'text'} className='header_main_input_common'
            style={{ width: inputsearchtw }} placeholder={'Select your dates'}></input>
        </div>
        {/* guests */}
        <div className='header_main_search_common'>
          <span className='header_main_search_span_common'>GUESTS</span>
          <input type={'text'} className='header_main_input_common'
            style={{ width: inputsearchtw }} placeholder={'Add guests'}></input>
        </div>
        <div className='header_main_search_common header_main_serch_btn' ref={divSearchbtnEle}>Search</div>
      </div>
      <div className='header_main_bottom_div'>
        <span ref={hederSpanBottmArrow}></span>
      </div>
    </div>
    <Outlet></Outlet>

    {/* footer implementaion */}
    <div className='header_f_p'>
      <div className='header_d_f'>
        <div className='hedeer_logo_cw_grp'>
          <div className='header_footer_logo'>
            Your Logo
          </div>
          <div className='header_footer_cw'>
            ©  2021  Company Name All rights reserved
          </div>
        </div>
        <div className='header_d_f header_f_menu_grp'>
          <div className='header_footer_menu_common'>
            <Link className={`${pathname === '/explore' ? 'header_active' : 'header_no_active'}`}
              to='/explore'>Explore</Link>
          </div>
          <div className='header_footer_menu_common'>
            <Link className={`${pathname === '/aboutus' ? 'header_active' : 'header_no_active'}`}
              to='/aboutus'>About Us</Link>


          </div>
          <div className='header_footer_menu_common'>
            <Link className={`${pathname === '/cities' ? 'header_active' : 'header_no_active'}`}
              to='/cities'>Cities</Link>

          </div>
          <div className='header_footer_call_btn header_footer_menu_common'>
            <Link className={`${pathname === '/call' ? 'header_active' : 'header_no_active'}`}
              to='/call'>Call</Link>

          </div>

        </div>
      </div>
    </div>
  </>


  );
}

export default MainComponent;
