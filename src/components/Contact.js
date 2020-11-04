import './Contact.css'

export function Contact() {
    const avatarUrl= 'https://randomuser.me/api/portraits/men/45.jpg';
    const name = 'Micheal Chavez';
    const online = true;
    return (
        <div className='Contact'>
            <img alt='profile picture' className='avatar' srcSet={avatarUrl}/>
            <div>
                <h4 className='name'>{name}</h4>
                <div className='status'>
                    <span className='status-online'/>
                    <p className='status-text'>online</p>
                </div>

            </div>
        </div>
    );
};