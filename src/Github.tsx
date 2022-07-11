import {useState} from "react";

interface GithubUser{
    id: number;
    public_repos: number;
}

export default function Github(){

    const[username, setUserName] = useState('')
    const[user, setUser] = useState<GithubUser>()


    const getUserData = () => {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then((githubUser: GithubUser) => setUser(githubUser));

        }

    return(
        <div>
            <label htmlFor="username">Github Username:</label>
            <input id="username" type="text" value={username} onChange={event => setUserName(event.target.value)}/>

            <button onClick={() => getUserData()}>Get Github user data</button>
            <br/>
            <br/>{
            user ?
            <div>
            ID: {user.id}
            <br/>
            repos: {user.public_repos}
            </div>
                :
                <div>Noch nichts da</div>
        }
        </div>

    )

}