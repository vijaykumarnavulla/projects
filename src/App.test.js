import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('app comp describe', ()=>{
  let setData, setRes;
  const setSate= jest.fn();
  const useStateMocks = {
    [0]:['2323',setSate],
    [1]:['abc',setSate]};

  it('renders learn react link', async() => {
   

    jest.spyOn(React,'useState').mockImplementation(()=>{
      const useStateMock = useStateMocks[0];
      return useStateMock;
    })
    jest.spyOn(React,'useState').mockImplementation(()=>{
      const useStateMock = useStateMocks[1];
      return useStateMock;
    })
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    const div = await screen.getByTestId('div-click');
    fireEvent.click(div)
  });

  fit('render ustsate',async()=>{
    setData = jest.fn();
    setRes = jest.fn();
    jest.spyOn(React,'useState')
    .mockReturnValueOnce(['abc',()=>{}])
    .mockReturnValueOnce(['def',()=>{}])
    render(<App />);
    const div = await screen.findByTestId('div-click');
    screen.debug(div);
    fireEvent.click(div)

  })

  // let url = '';
  // let body = '';
  // jest.mock("axios", ()=>({
  //   post:jest.fn((_url,_body) =>{
  //     return new Promise((resolve) => {
  //       url = _url
  //       body = _body
  //       resolve(true)
  //     })
  //   })
  // }))

  // const renderweithcontext = (comp) =>{
  //   return{
  //     ...render(
  //       <paycontext.provider value={JSON.parse(sampleJSON)}>
  //         {comp}
  //       </paycontext.provider>
  //     )
  //   }
  // }
  // renderweithcontext(<sampleComp/>);
  // it('sample teste ', async()=>{
  //   renderweithcontext(<sampleComp/>);
  //   (axios.post as jest.MockedFunction<typeof axios.post>).mockReturnValueOnce(() =>
  //   Promise.resolve(testJSONData));
  // })
})

