import React, {useEffect, useState} from 'react';
import "./styles.css";

const ScrollIndicator = ({url}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [scrollPercentage, setScrollPercentage] = useState(null);
    const fetchData = async (getUrl) => {
        try {
            setLoading(true);
            let response = await fetch(getUrl);
            let data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    const handleScrollBtn = () => {

        const countScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        setScrollPercentage((countScroll / height) * 100)
    }

    useEffect(() => {
        if (url) {
            fetchData(url);
        }
    }, [url]);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollBtn)


        return (() => {
            window.removeEventListener("scroll", () => {
            })
        })
    }, []);

    if (loading) {
        return <div>Loading.. Please Wait</div>;
    }
    if (error) {
        return <div>Uffs! Error Occurred</div>;
    }
    console.log(scrollPercentage)
    return (<>
        <h1>Custom Scroll Indicator</h1>
        <div className="Scroll-container">
            {data && data.length > 0 ? data.map(item => (<p key={item.id}>{item.title}</p>)) : null}
        </div>
    </>);
};

export default ScrollIndicator;
