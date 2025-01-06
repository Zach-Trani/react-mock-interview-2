import axios from "axios";

const MovieChar = ({ charList }) => {
    
    const getCharList = () => {
        charList.map( async (char) => {
            const response = await axios.get(char)
            console.log(response);
        })

    }
    if (charList){
        getCharList();
    };
    
    return (
        <div>
            <div>
                {charList}
            </div>
        </div>
    );
}

export default MovieChar;