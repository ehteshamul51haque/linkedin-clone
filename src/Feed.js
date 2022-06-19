import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Create } from "@material-ui/icons"
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image"
import { Subscriptions, EventNote, CalendarViewDay } from "@material-ui/icons"
import Post from './Post';
import { db, auth } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                ))
            ));
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: "Dash Dash",
            description: "Test",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <Create />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDay} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            {/* Posts */}
            {posts.map(({ id, data: { name, description, message,
                photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed
