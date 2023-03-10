import React, { useEffect, useState } from 'react';
import '../../assets/styles/exploreComponent.css';
const ExploreComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let arr: any = [{ id:'data_0',img: '/assets/images/explore_one.jpg', desc: 'Room with one king-size bed', amt: ['35$', '28m'], btn: 'Book!' },
    { id:'data_1',img: '/assets/images/explore_two.jpg', desc: 'Penthouse for 8 person', amt: ['2039$', '438m'], btn: 'Book!' },
    {id:'data_2',img: '/assets/images/explore_one.jpg', desc: 'Room with one king-size bed', amt: ['35$', '28m'], btn: 'Book!' },
    {id:'data31',img: '/assets/images/explore_two.jpg', desc: 'Penthouse for 8 person', amt: ['2039$', '438m'], btn: 'Book!' }];
    setData(arr);
  }, [])
  return (
    <>
      <div data-testid="ExploreComponent">
        <div className='explore_heading'>
          Explore
        </div>
        <div className='explore_desc'>
          From one-guest rooms to <br />penthouses with pools and gardens
        </div>
        <div>
          <div className='explore_item_main_div'>
            {data && data.map((item: any ,index:number) =>< React.Fragment key={'explore_item'+index}>
            <div className='explore_div_items_rel'>
            <div className='explore_div_item_common'
                style={{
                  backgroundImage: `url(${item?.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center'
                }}>
                </div>
                 <div className='explore_div_item_box'>
                  <div className='explore_p_5'>
                    {item.desc}
                  </div>
                  <div className='explore_flex_cg_5p'> 
                  {item.amt && item.amt.map((str:any,index:number) =>
                    <div className='explore_div_price' key={item.id+'_'+index}>{str}
                    {str && str.indexOf('m') !== -1 && <span className='explore_span_sup'>2</span>}</div>
                    )}
                    <div className='explore_div_book_btn'>
                    {item.btn}
                    </div>
                    </div>
                 </div>
              </div>
              
            </React.Fragment>
             
            )}

          </div>
        </div>

      </div>


    </>

  )
};

export default ExploreComponent;
