import SearchBar from "./SearchBar";
import complainData from "../data";


export default function Complainlist() {
    return (
        <div className="p-4">
            <SearchBar />
            <div className="mt-4 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                {complainData.map((result, index) => (
                    <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
                        <p className="text-xl font-bold mb-2">{result.title}</p>
                        <div>
                            <p className="text-gray-700">{result.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
