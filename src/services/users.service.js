import axios from "axios";

export const getUsers = async () => {
    try{
        return await axios.get('https://swapi.dev/api/people');
    } catch(e){
        console.log(e)
    }
} 