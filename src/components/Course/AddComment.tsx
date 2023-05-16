import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import supabase from "@/lib/config/supabaseClient";
import {useUser} from "@supabase/auth-helpers-react";

export default function AddComment({course_id}: { course_id: number }) {
    const [comment, setComment] = useState<string>("");
    let [notif, setNotif] = useState<{body:string, color:string}>();
    const user = useUser();
    const sendComment = async () => {
        let data = {
            body: comment,
            course_id: course_id,
            // @ts-ignore
            user_id: user.id,
            is_flagged: false,
            is_validated: true
        }
        const {data: commentData, error} = await supabase.from("comment").insert(data);
        if (error) {
            console.log(error)
            let notif = {
                body: error,
                color: "green"
            }
            // @ts-ignore
            setNotif(notif)
        }
        if(data){
            let notif = {
                body: "Commentaire envoyé",
                color: "green"
            }
            // @ts-ignore
            setNotif(notif)
        }
    }
    return (
        <>
            {notif&&
                <p className={`notification has-background-${notif.color}`}>{notif.body}</p>
            }
            <Form.Group className="mb-3">
                <Form.Label>Commenter</Form.Label>
                <Form.Control type="text" onChange={(e) => {
                    setComment(e.target.value)
                }} placeholder="Comment something"/>
                <Button onClick={sendComment}>Comment</Button>
            </Form.Group>
        </>
    )
}

