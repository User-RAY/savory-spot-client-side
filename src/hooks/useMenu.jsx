import { useEffect, useState } from "react";


const useMenu = () => {

        const [menudata, setMenudata] = useState([]);
        const [menuLoading, setMenuLoading] = useState(true);
    
        useEffect(() => {
            fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenudata(data)
                setMenuLoading(false);
            });
        }, [])

        return [menudata, menuLoading];
};

export default useMenu;