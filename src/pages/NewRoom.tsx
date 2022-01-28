import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { push, ref, set } from 'firebase/database';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button';
import { Aside, HomeContent, PageAuth } from '../styles';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    
    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = ref(database, 'rooms/')
    const firebaseRoom = await push(roomRef);
    set(firebaseRoom, {
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/admin/rooms/${firebaseRoom.key}`)
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Deseja entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </HomeContent>
    </PageAuth>
  )
}