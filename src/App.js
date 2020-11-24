import "./App.css";
import React, { useEffect, useState } from "react";
import Autocomplete from "react-autocomplete";
import Battle from "./components/Battle";
import Axios from "axios";
import url from "./config/api";

function App() {
    const [location, setLocation] = useState("");
    const [king, setKing] = useState("");
    const [type, setType] = useState("");
    const [places, setPlaces] = useState();
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [errMessage, setErrMessage] = useState();
    const [battles, setBattles] = useState([]);
    const [count, setCount] = useState();

    useEffect(() => {
        Axios.get(url + "/list")
            .then((data) => {
                setPlaces(data.data.data);
                setFilteredPlaces(data.data.data);
            })
            .catch((err) => {
                setErrMessage(err.message);
            });

        Axios.get(url + "/count")
            .then((data) => {
                setCount(data.data.data);
            })
            .catch((err) => {
                setErrMessage(err.message);
            });
    }, []);

    const search = () => {
        const searchBody = {
            king: king ? king : "",
            location: location ? location : "",
            type: type ? type : "",
        };

        let str = [];
        for (var p in searchBody)
            if (searchBody.hasOwnProperty(p)) {
                str.push(
                    encodeURIComponent(p) +
                        "=" +
                        encodeURIComponent(searchBody[p])
                );
            }

        const searchUrl = url + "/search?" + str.join("&");
        Axios.get(searchUrl)
            .then((data) => {
                setBattles(data.data.data);
            })
            .catch((err) => {
                setErrMessage(err.message);
            });
    };
    return (
        <>
            <div className='nav'>
                <div className=' search search1'>
                    <Autocomplete
                        getItemValue={(item) => item}
                        items={filteredPlaces}
                        renderItem={(item, isHighlighted) => (
                            <div
                                key={item}
                                style={{
                                    background: isHighlighted
                                        ? "lightgray"
                                        : "white",
                                }}>
                                {item}
                            </div>
                        )}
                        value={location}
                        onChange={(e) => {
                            setLocation(e.target.value);
                            const filteredPlaces = places.filter((place) => {
                                if (place.startsWith(e.target.value)) {
                                    return true;
                                } else return false;
                            });

                            setFilteredPlaces(filteredPlaces);
                        }}
                        onSelect={(val) => setLocation(val)}
                        renderInput={(props) => {
                            return (
                                <input
                                    {...props}
                                    placeholder='Search Location'
                                />
                            );
                        }}
                    />
                </div>
                <div className='search search2'>
                    <input
                        placeholder='Search King'
                        onChange={(e) => setKing(e.target.value)}
                        value={king}
                    />
                </div>
                <div className='search search3'>
                    <input
                        placeholder='Search Battle type'
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                    />
                </div>

                <button className='button0 button1' onClick={() => search()}>
                    Search
                </button>
            </div>
            {battles.length === 0 ? (
                <p
                    style={{
                        color: "black",
                        fontWeight: "700",
                        marginLeft: 10,
                    }}>
                    Please Select any Search criteria, out of {count} battles.
                </p>
            ) : (
                ""
            )}

            {errMessage ? (
                <p style={{ color: "red", fontWeight: "700", marginLeft: 10 }}>
                    {errMessage}
                </p>
            ) : (
                battles.map((battle, index) => {
                    return <Battle key={index} battle={battle} />;
                })
            )}
        </>
    );
}

export default App;
