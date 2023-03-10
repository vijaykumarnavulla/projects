import React, { useEffect, useState } from 'react';
import '../../assets/styles/aboutUsComponent.css';

const AboutUsComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let arr: any = [{ id: 'data_0', img: '/assets/images/chapter1.jpg', title: 'Chapter I', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' },
    { id: 'data_1', img: '/assets/images/chapter2.jpg', title: 'Chapter II', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' },
    { id: 'data_2', img: '/assets/images/chapter3.jpg', title: 'Chapter III', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' },
    { id: 'data31', img: '/assets/images/chapter4.jpg', title: 'Chapter IV', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' }];
    setData(arr);
  }, []);

  return (
    <div data-testid="AboutUsComponent">
      <div className='aboutus_heading'>
        About Us
      </div>
      <div className='aboutus_desc'>
        Allow us to tell you a short story...
      </div>
      <div>
        <div className='aboutus_item_main_div'>
          {data && data.map((item: any,index:number) => < React.Fragment key={'about_item'+index}>
            <div className='aboutus_div_items_rel'>
              <div className='aboutus_div_item_common' 
                style={{
                  backgroundImage: `url(${item?.img})`,
                }}>
              </div>
              <div className='aboutus_div_item_box'  >
                <div className='aboutus_flex_cg_5p'  >
                  <div className='aboutus_div_title' >
                    {item.title}
                  </div>
                  <div className=''>
                    {item.desc}
                  </div>
                </div>
              </div>
            </div>

          </React.Fragment>

          )}

        </div>
      </div>
    </div>)
}
export default AboutUsComponent;
