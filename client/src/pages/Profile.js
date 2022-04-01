import Sidebar from "../components/Sidebar"

const Profile = () => {
    return (
        <div>
            <Sidebar />
            <div className="centerProf">
                <div><img src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg" /></div>
                
                <img src="?" />
                <h1>Elon Musk</h1>
                <p>@elonmusk</p>
                <p>Joined June 2009</p>
                {/*  followers and following */}
            </div>
        </div>
    )
}

export default Profile