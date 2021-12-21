import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { ref, get } from '@firebase/database';

import { database } from '../services/firebase';

import logoImg from '../assets/images/logo.svg';
import illustrationImg from '../assets/images/illustration.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { Aside, HomeContent, GoogleButton, PageAuth, Separator } from '../styles';

export function Home() {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('');
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }
  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = ref(database, `rooms/${roomCode}`);
    const firebaseRoom = await get(roomRef)

    if (!firebaseRoom.exists()) {
      alert('Sala inexistente')
      return
    }

    if (firebaseRoom.val().endedAt) {
      alert('Sala fechada')
      return
    }

    history.push(`rooms/${roomCode}`)
  }

  return (
    <PageAuth>
      <Aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </Aside>
      <HomeContent>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <GoogleButton onClick={handleCreateRoom} >
            <img src={googleIconImg} alt="Logo da Google" />
            Crie sua sala com o Google
          </GoogleButton>
          <Separator>ou entre em uma sala</Separator>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </HomeContent>
    </PageAuth>
  )
}