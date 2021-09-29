import {Request, Response} from 'express'

import User from '../models/User'

export default class UsersController {
    public async create(request: Request, response: Response){
        const {name, email} = request.body

        const user = await User.create({name, email})

        return response.json(user)
    }

    public async index(request: Request, response: Response){
        const users = await User.findAll()

        return response.json(users)
    }
}