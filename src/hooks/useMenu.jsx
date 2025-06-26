import { useEffect, useState } from "react";


const useMenu = () => {

        const [menudata, setMenudata] = useState([]);
        const [menuLoading, setMenuLoading] = useState(true);
    
        useEffect(() => {
            fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenudata(data)
                setMenuLoading(false);
            });
        }, [])

        return [menudata, menuLoading];
};

export default useMenu;