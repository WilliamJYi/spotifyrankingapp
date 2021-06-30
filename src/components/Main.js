import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import Type from "./Type";

function Main(props){
    const [type, setType] = useState("");
    const [list1, setList1] = useState("");
    const [list2, setList2] = useState("");
    const [list3, setList3] = useState("");
    const [timeRange1, setTimeRange1] = useState("short_term")
    const [timeRange2, setTimeRange2] = useState("medium_term")
    const [timeRange3, setTimeRange3] = useState("long_term")
    
    
    const bearer = "Bearer " + props.token;

    useEffect(() =>{
        if(props.token !== undefined){
            console.log(bearer);
            apiCall1();
            apiCall2();
            apiCall3(); 
        }
        console.log(bearer);
    }, [type]);

    const apiCall1 = async () => {
        const response = await fetch(`https://quiet-temple-13952.herokuapp.com/https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange1}&limit=50`, {
            method: "GET",
            headers: {
                "Authorization": bearer
            }
        });
        const data = await response.json();
        setList1(data.items);
        console.log(data);
    }

    const apiCall2 = async () => {
        const response = await fetch(`https://quiet-temple-13952.herokuapp.com/https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange2}&limit=50`, {
            method: "GET",
            headers: {
                "Authorization": bearer
            }
        });
        const data = await response.json();
        setList2(data.items);
        console.log(data);
    }

    const apiCall3 = async () => {
        const response = await fetch(`https://quiet-temple-13952.herokuapp.com/https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange3}&limit=50`, {
            method: "GET",
            headers: {
                "Authorization": bearer
            }
        });
        const data = await response.json();
        setList3(data.items);
        console.log(data);
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

    return(
        <div className="App">
            {/*props.token*/}
            {(props.data !== undefined) && 
                <div>
                    <header className="appHeader">
                        <div style={{marginLeft: "-85vw" }}>{props.data.body.display_name}'s Spotify</div>
                        <Type display1={handleClick1} display2={handleClick2}/>
                    </header>
                    {console.log(props.data)}
                    {list3 !== "" && 
                        <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "30px", width: "1000px"}}>
                            <Tabs list1={list1} list2={list2} list3={list3}/>
                        </div>
                    }
                </div>
            }
        </div> 
    )
    
}

export default Main;