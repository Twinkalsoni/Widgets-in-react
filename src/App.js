import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Convert from "./Components/Convert";
import Dropdown from "./Components/Dropdown";
import Header from "./Components/Header";
import Route from "./Components/Route";
import Search from "./Components/Search";
import Translate from "./Components/Translate";

const items=[
    {
        title:"What is React?",
        content:"React is Frontend and Javascript Framework"
    },
    {
        title:"Why use React",
        content:"React is a Favorite Js Library among engineers"
    },
    {
        title:"How do you use React",
        content:"You use React by creating component"
    }
];
const options=[
    {
        label:'The color Red',
        value:'red'
    },
    {
        label:'The color Green',
        value:'Green'
    },
    {
        label:'The Shade of Blue',
        value:'Blue'
    },
];
// const showAccordion=()=>{
//     if(window.location.pathname==='/'){
//         return <Accordion items={items}/>;
//     }
// };
// const showList =()=>{
//     if(window.location.pathname==='/list'){
//         return<Search/>
//     }
// };
// const showDropdown=()=>{
//     if(window.location.pathname==='/deopdown'){
//         return<Dropdown/>
//     }
// };
// const showTranslate =()=>{
//     if(window.location.pathname==='/translate'){
//         return<Translate/>
//     }
// };
export default  () => {
const[selected,setselected]=useState(options[0]);
  return (
    <div>
        <Header/>
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/list">
            <Search/>
        </Route>
        <Route path="/dropdown">
            <Dropdown
            label="Select a color"
            options={options}
            selected={selected}
            onselectedChange={setselected}/>
        </Route>
        <Route path="/translate">
            <Translate/>
        </Route>
    </div>
  )
}

