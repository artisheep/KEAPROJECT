import{BrowserRouter,
      Routes,
      Route} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './page/MainPage'; 
import PreviewPage from "./page/PreviewPage";

const MainTitleText
= styled.p`
font-size: 24px;
font-weight: bold;
text-align: center;
`;

function App(props) {
  return (
    <div > 
    <BrowserRouter>
    <MainTitleText>Form generator</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} /> 
        <Route path="preview" element={<PreviewPage/>} />
      </Routes>
    </BrowserRouter> 
 
    </div>
  );
}

export default App;
