import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../..';
import { IActor, IRoles } from '../../../types/types';

const ActorsList = observer(() => {
    const movieStore = useContext(Context);

    if (!movieStore.actors) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
        <ul className="list-group list-group-flush">
            {
                movieStore.actors.map((actor: IActor, index: any) => {
                    return (
                        <li key={index} className="list-group-item">
                            <figure className="figure">
                                <img 
                                    src={actor.image_url ? actor.image_url : `https://brilliant24.ru/files/cat/template_01.png`} 
                                    className="bd-placeholder-img rounded-circle" 
                                    alt="portrait"
                                    style={{height: '200px', width: '150px'}} />
                                <h3>{actor.name}</h3>
                                <figcaption className="figure-caption fs-5">As {actor.role}</figcaption>
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    );
});

export default ActorsList;