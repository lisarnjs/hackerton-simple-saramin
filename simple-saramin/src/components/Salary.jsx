import { useEffect, useState } from "react";
import {salary} from "../data/object1.js"

// const salary = {
//     0: "회사내규에 따름",
//     3: "1,400 만원 이하",
//     4: "1,400~1,600만원",
//     5: "1,600~1,800만원",
//     6: "1,800~2,000만원",
//     7: "2,000~2,200만원",
//     8: "2,200~2,400만원",
//     9: "2,400~2,600만원",
//     10: "2,600~2,800만원",
//     11: "2,800~3,000만원",
//     12: "3,000~3,200만원",
//     13: "3,200~3,400만원",
//     14: "3,400~3,600만원",
//     15: "3,600~3,800만원",
//     16: "3,800~4,000만원",
//     17: "4,000~5,000만원",
//     18: "5,000~6,000만원",
//     19: "6,000~7,000만원",
//     20: "7,000~8,000만원",
//     21: "8,000~9,000만원",
//     22: "9,000~1억원",
//     23: "1억원 이상",
//     99: "면접후 결정",
// };

export default function Salary() {
    const [list, setList] = useState([])
    
    const setLists = () => {
        const array = [];
        for(let i in salary){
            array.push(i)
        }
        setList(array);
    }

    console.log(list)

    useEffect(() => {setLists()}, [])

    return (
        <ul>
            { list.map((value, index) => (
                <li key={index}>{salary[value]}</li>
            )) }
        </ul>
        
    );
}