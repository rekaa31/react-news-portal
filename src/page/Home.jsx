import Card from "../component/Card";

export default function Home(){

    let data = [
        {
            id : 1,
            title : "Lorem ipsum 1",
            image : "https://via.placeholder.com/150x100",
            description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi itaque doloribus laboriosam modi nobis saepe, culpa iure at dolores blanditiis suscipit nam unde impedit laborum officia totam obcaecati atque omnis."
        },
        {
            id : 2,
            title : "Lorem ipsum 2",
            image : "https://via.placeholder.com/150x100",
            description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi itaque doloribus laboriosam modi nobis saepe, culpa iure at dolores blanditiis suscipit nam unde impedit laborum officia totam obcaecati atque omnis."
        },
        {
            id : 3,
            title : "Lorem ipsum 3",
            image : "https://via.placeholder.com/150x100",
            description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi itaque doloribus laboriosam modi nobis saepe, culpa iure at dolores blanditiis suscipit nam unde impedit laborum officia totam obcaecati atque omnis."
        },
        {
            id : 4,
            title : "Lorem ipsum 4",
            image : "https://via.placeholder.com/150x100",
            description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi itaque doloribus laboriosam modi nobis saepe, culpa iure at dolores blanditiis suscipit nam unde impedit laborum officia totam obcaecati atque omnis."
        }
    ]

    return(
        <div className="row g-2 mt-2">
            {data.map((item) => {
                return(
                    <Card key={item.id} data={item}/>
                )
            })}
        </div>
    )
}