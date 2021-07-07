import React, { useEffect, useState } from "react";
import ViewRankings from "./ViewRankings";
import Type from "./Type";
import BarChartIcon from '@material-ui/icons/BarChart';

function Main(props){
    const [type, setType] = useState("home");
    const [list1, setList1] = useState("");
    const [list2, setList2] = useState("");
    const [list3, setList3] = useState("");
    const [list4, setList4] = useState("");
    const [list5, setList5] = useState("");
    const [list6, setList6] = useState("");
    const [timeRange1, setTimeRange1] = useState("short_term")
    const [timeRange2, setTimeRange2] = useState("medium_term")
    const [timeRange3, setTimeRange3] = useState("long_term")
    
    
    const bearer = "Bearer " + props.token;

    useEffect(() =>{
        if(props.token !== undefined){
            if(list6 === ""){
                console.log(bearer);
                apiCall1();
                apiCall2();
                apiCall3(); 
                apiCall4();
                apiCall5();
                apiCall6();  
            }
        }
        console.log(bearer);
    }, [type]);

    const apiCall1 = async () => {
        const response = await fetch(`https://quiet-temple-13952.herokuapp.com/https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange1}&limit=50`, {
            method: "GET",
            headers: {
                "Authorization": bearer
            }
        });
        const data = await response.json();
        setList1(data.items);
        //console.log(data);
    }

    const apiCall2 = async () => {
        const response = await fetch(`https://quiet-temple-13952.herokuapp.com/https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange2}&limit=50`, {
            method: "GET",
            headers: {
                "Authorization": bearer
            }
        });
        const data = await response.json();
        setList2(data.items);
        //console.log(data);
    }

    const apiCall3 = async () => {
        const response = await fetch(`https://quiet-temple-13952.herokuapp.com/https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange3}&limit=50`, {
            method: "GET",
            headers: {
                "Authorization": bearer
            }
        });
        const data = await response.json();
        setList3(data.items);
        //console.log(data);
    }

    const apiCall4 = async () => {
        const response = await fetch(`https://quiet-temple-13952.herokuapp.com/https://api.spotify.com/v1/me/top/artists?time_range=${timeRange1}&limit=50`, {
            method: "GET",
            headers: {
                "Authorization": bearer
            }
        });
        const data = await response.json();
        setList4(data.items);
        //console.log(data);
    }

    const apiCall5 = async () => {
        const response = await fetch(`https://quiet-temple-13952.herokuapp.com/https://api.spotify.com/v1/me/top/artists?time_range=${timeRange2}&limit=50`, {
            method: "GET",
            headers: {
                "Authorization": bearer
            }
        });
        const data = await response.json();
        setList5(data.items);
        //console.log(data);
    }

    const apiCall6 = async () => {
        const response = await fetch(`https://quiet-temple-13952.herokuapp.com/https://api.spotify.com/v1/me/top/artists?time_range=${timeRange3}&limit=50`, {
            method: "GET",
            headers: {
                "Authorization": bearer
            }
        });
        const data = await response.json();
        setList6(data.items);
        //console.log(data);
    }

    function handleClick1(e){
        e.preventDefault();
        setType("tracks");
        //apiCall1();
        //apiCall2();
        //apiCall3();
    }

    function handleClick2(e){
        e.preventDefault();
        setType("artists");
        //apiCall1();
        //apiCall2();
        //apiCall3();
    }

    const handleClick3 = (e) => {
        e.preventDefault();
        setType("home");
    }

    function displayCharts(){
        if(type === "tracks"){
            if(list3 !== ""){
              return(
                    <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "30px", width: "1000px"}}>
                        <ViewRankings list1={list1} list2={list2} list3={list3} type={list3[0].type}/>
                    </div>
              )  
            }
            
        }
        else if(type === "artists"){
            if(list6 !== ""){
                return(
                    <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "30px", width: "1000px"}}>
                        <ViewRankings list4={list4} list5={list5} list6={list6} type={list6[0].type}/>
                    </div>
                ) 
            }
            
        } 
    }

    return(
        <div className="App">
            {/*props.token*/}
            {(props.data !== undefined) && 
                <div>
                    <header className="appHeader">
                        <div style={{marginLeft: "-85vw" }}>{props.data.body.display_name}'s Spotify</div>
                        <Type display1={handleClick1} display2={handleClick2} display3={handleClick3}/>
                    </header>
                    {(type === "home") &&
                    <div className="profile">
                        <h1>{props.data.body.display_name}</h1>
                        <img src={props.data.body.images[0].url} style={{width: "150px"}}/><br></br>
                        <a href={props.data.body.external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{color: "black"}}>Spotify URI</a><br/>
                        <h1>See your most listened to artists and songs</h1>
                    </div>}
                    {console.log(props.data)}
                    {list6 !== "" && displayCharts()}
                </div>
            }
        
        </div> 
    )
    
}

export default Main;