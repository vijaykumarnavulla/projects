import React, { forwardRef, useRef } from "react";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const star = '<svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>';
let navigate = useNavigate();
  const [refreshRenderer, setRefreshRenderer] = React.useState(false);
  const [selectRating, SetselectRating] = React.useState(null);
  let ref = useRef({btn:false});
  const rdata = [{label:1,value:1,selected:false,radio:false},
    {label:2,value:2,selected:false,radio:false},
    {label:3,value:3,selected:false,radio:false},
    {label:4,value:4,selected:false,radio:false},
    {label:5,value:5,selected:false,radio:false}];
  const [radioBtdData, setRadioBtdData] = React.useState([...rdata]);
  const handleRadioHoverEnter = (data) =>{
    data.radio = true;
    setRefreshRenderer(!refreshRenderer);
  } 
  const handleRadioHoverLeave = (data) =>{
    setRefreshRenderer(!refreshRenderer);
    data.radio = false;
  } 
  const handleRatingonClick = (data) =>{
   let rbdata = radioBtdData;
   for(let ele of rbdata){
    ele.selected = false;
    if(data.label === ele.label){
      ele.selected = true;
    }
   }
   SetselectRating(data.value);
   flushSync(() =>{
    setRadioBtdData([...rbdata]);
  });
  }
  const handleBtnHoverEnter = (evt) =>{
    setRefreshRenderer(!refreshRenderer);
    ref.current.btn = true;
  } 
  const handleBtnHoverLeave = (evt) =>{
    setRefreshRenderer(!refreshRenderer);
    ref.current.btn = false;
  } 
  
  const handleSendButtonClick = (evt) => {
    if(selectRating){
      navigate('/showRating/'+selectRating);
    }
  }
 return (<>
    <div className="home_div" style={{ height: window.innerHeight }}>
      <div className="home_rating_card">
        <div className="home_card_inner_div">
          <div className="home_Star_star">
            <span
              dangerouslySetInnerHTML={{ __html: star }}
              aria-hidden="true"
              focusable="false"
            />
          </div>
          <div className="home_title">
            <h1>How did we do?</h1>
            <p className="home_p">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!</p>
          </div>
          <div className="home_rating_div">
            {radioBtdData && radioBtdData.map(data=>(
              <label className="home_label"  key={data.value}>
              <span className="home_rating_radio_span" key={data.value}
              onMouseEnter={(evt)=>handleRadioHoverEnter(data)}
              onMouseLeave={(evt)=>handleRadioHoverLeave(data)} 
              onClick={()=>handleRatingonClick(data)}
              style={{
                backgroundColor: (data.selected)?"#959eac":(data.radio) ? "#fb7413" : "#252d37",
                cursor: (data.selected)?"default":"pointer"
              }}
              >{data.label}</span>
            </label>))}
            
          </div>
          <button className="home_submit_button"
         onMouseEnter={(evt)=>handleBtnHoverEnter(evt)}
         onMouseLeave={(evt)=>handleBtnHoverLeave(evt)} 
         onClick={(evt)=>{handleSendButtonClick(evt)}}
           style={{
             backgroundColor: (ref.current.btn) ? "#fb7413" : "#252d37",
             color:(ref.current.btn) ? "white" : "#fb7413"
           }}>Submit</button>
        </div>
      </div>
    </div>
  </>

  );
}

export default HomeComponent;