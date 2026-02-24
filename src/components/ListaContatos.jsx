import { FlatList } from 'react-native';
import Contato from './Contato';

const contatos = [
    {
        id: '1',
        nome: 'Rafael Santos',
        email: 'rafaelsantos@gmail.com',
        foto: require('../../assets/foto-2.jpg'),
    },
    {
        id: '2',
        nome: 'Gabriela Oliveira',
        email: 'gabrielloiveira@gmail.com',
        foto: require('../../assets/foto-3.jpg'),
    },
    {
        id: '3',
        nome: 'Ruan Costa',
        email: 'ruancosta@gmail.com',
        foto: require('../../assets/foto-4.jpg'),
    },
];

export default function ListaContatos() {
    return (
        <FlatList
            data={contatos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Contato
                    nome={item.nome}
                    email={item.email}
                    foto={item.foto}
                    numero={item.numero}
                />
            )}
        />
    )
}