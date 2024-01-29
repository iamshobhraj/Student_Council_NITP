import SearchBar from "./SearchBar";
import complainData from "../data";


export default function Complainlist() {

    return(
        <div>
            <SearchBar />
            <div>
                {complainData.map((result,index) => (
                    <div key={index}>
                        <p>{complainData.title}</p>
                        <div>
                            <p>{complainData.description}</p>
                        </div>
                    </div>
                ))}  

            </div>

        </div>
    )
}
