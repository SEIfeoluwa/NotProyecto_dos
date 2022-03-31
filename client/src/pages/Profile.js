import Sidebar from "../components/Sidebar"

const Profile = () => {
    return (
        <div>
            <Sidebar />
            <div className="centerProf">
                <img src="?" />
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