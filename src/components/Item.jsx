import { useState, useEffect } from 'react'

const Item = ({ title, desc, date, done }) => {

    const [style, setStyle] = useState([{ bg: "bg-medium-blue", text: "text-white", btn: "flex" }]);

    useEffect(() => {
        done === true ? setStyle(estilo => ({ ...style, bg: "bg-light-gray", text: "text-deep-blue", btn: "hidden" })) : setStyle(estilo => ({ ...style, bg: "bg-medium-blue", text: "text-white", btn: "flex" }))
    }, [done]);

    return (
        <div className={`${style.bg} flex flex-col p-3 rounded-md w-[250px]`} >
            <p className={`${style.text} font-roboto text-xs mb-2`} >{date}</p>
            <h4 className={`${style.text} font-roboto pb-2`} >{title}</h4>
            <hr />
            <span className={`${style.text} py-3`}>{desc}</span>
            <div className="">
                <button className={`bg-light-orange p-1 text-xs rounded-md ${style.btn}`}>
                    Mark as done
                </button>
            </div>
        </div>
    )
}

export default Item