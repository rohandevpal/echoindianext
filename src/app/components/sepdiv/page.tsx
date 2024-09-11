import next from "next";
const SeperatorHeading = ({title}:{title:string}) =>{
    return (
        <>
            <h1 className="7xl font-semibold text-center p-5 text-5xl text-heading-color">{title}</h1>
        </>
    )
}

export default SeperatorHeading