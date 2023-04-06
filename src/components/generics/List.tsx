type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

const List = <T extends number|string>({items, onClick}: ListProps<T>) => {
    return (   
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>{item}</div>
                )
            })}
        </div>
    )
}

export default List

// type ListProps = {
//     items: string[] | number [],
//     onClick: (value: string|number) => void
// }

// const List = ({items, onClick}: ListProps) => {
//     return (   
//         <div>
//             <h2>List of items</h2>
//             {items.map((item, index) => {
//                 return (
//                     <div key={index} onClick={() => onClick(item)}>{item}</div>
//                 )
//             })}
//         </div>
//     )
// }

// export default List