import {Request, Response} from 'express'
import User from '../models/User'

import Address from '../models/Address'

export default class AddressesController {
    public async create(request: Request, response: Response){
        const { user_id } = request.params
        const {zipcode, street, number } = request.body

        const user = User.findByPk(user_id)

        if(!user){
            return response.status(400).json({error: 'User not found'})
        }

        const address = await Address.create({zipcode, street, number, user_id})

        return response.json(address)
    }

    public async index(request: Request, response: Response){
        const { user_id } = request.params
        
        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        })

        if(!user){
            return response.status(400).json({error: 'User not found'})
        }

        return response.json(user)
    }
}