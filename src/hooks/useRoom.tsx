import { onValue, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('')

  useEffect(() => {
    (async function () {
      const roomRef = ref(database, `rooms/${roomId}`)
      onValue(query(roomRef), snapshot => {
        const firebaseQuestions: FirebaseQuestions = snapshot.val().questions ?? {}

        const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered
          }
        })

        setQuestions(parsedQuestions)
        setTitle(snapshot.val().title)
      })
    })()
  }, [roomId])

  return { questions, title }
}