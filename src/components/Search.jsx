import { useRef } from "react";

export const Search = ({ fn }) => {
    const artist = useRef();
    return (
        <>
            {/* <label>Artist Name</label> */}
            <div className="row">
                <div className="col-10">
                    <input ref={artist} type='text' className="form-control" placeholder="Search your song..." />
                </div>
                <div className="col-2">
                    <button className="btn btn-success" onClick={() => {
                        fn(artist.current.value);
                    }}>Search</button>
                </div>
            </div>
        </>
    )
}