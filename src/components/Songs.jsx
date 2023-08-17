import { Song } from "./Song"
export const Songs =({fn,allsongs})=>{
    console.log('***All Songs', allsongs)
    return(<>
    {allsongs.map((currentSong,index) => (<>
        <div className="card text-center alert alert-light m-2">
        <Song fn = {fn} key={index} song = {currentSong}/>
        </div>
    </>))}
    </>
    )
}