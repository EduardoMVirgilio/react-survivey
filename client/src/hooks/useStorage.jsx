import { useState,useEffect } from "react";

const useStorage = (key,defaultValue=null) => {
    const [value,setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    });
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
    },[value]);
    return {value,setValue};
}
export default useStorage