import { makeAutoObservable, toJS } from "mobx";
import { findActorsFulInfo, findMovieActors } from "../services/creators-service";
import { ICreators, IRoles } from "../types/types";

export default class CreatorsStore {
    _creators: any;
    _roles: any;

    constructor() {
        this._creators = [];
        this._roles = [];

        makeAutoObservable(this);
    }  

    setCreatros(creators: ICreators) {
        this._creators = creators;
    }

    setRoles(roles: IRoles) {
        this._roles = roles;
    }

    get creators() {
        return toJS(this._creators);
    }

    get roles() {
        return toJS(this._roles);
    }


    getActorsFullInfo(actors: any) {

        if (!actors) {
            return;
        }

        const result = actors.map(async (actor: any) => {
            const response = await findActorsFulInfo(actor.actor.imdb_id);
            response.role = actor.role
            return response;
        });
        Promise.all(result)
            .then((actor: any) => this.setCreatros(actor))
            .catch((e: string) => console.log(e));
    }

    async getActors(id: string) {
        try {
            const response = await findMovieActors(id);
            this.setRoles(response);
            this.getActorsFullInfo(response);
        } catch (e) {
            console.log(e);
        }
    }
}