import { Profile } from '../models/index.js'
import { createHttpError } from '../utils/httpError.js'

const profileAttributes = ['id', 'user_id', 'name', 'last_name', 'nickname', 'avatar_url']

export const getProfile = async (req, res, next) => {
  try {
    if (req.user.id !== Number(req.params.userId)) {
      throw createHttpError(403, 'No tienes permiso para consultar este perfil')
    }

    const profile = await Profile.findOne({
      where: { user_id: req.user.id },
      attributes: profileAttributes,
    })

    if (!profile) throw createHttpError(404, 'El perfil no fue encontrado')
    return res.json(profile)
  } catch (error) {
    return next(error)
  }
}

export const createProfile = async (req, res, next) => {
  try {
    if (req.user.id !== Number(req.body.user_id)) {
      throw createHttpError(403, 'No tienes permiso para crear este perfil')
    }

    const [profile, created] = await Profile.findOrCreate({
      where: { user_id: req.user.id },
      defaults: req.body,
    })

    if (!created) throw createHttpError(409, 'El usuario ya tiene un perfil')
    return res.status(201).json(profileAttributes.reduce((data, key) => ({ ...data, [key]: profile[key] }), {}))
  } catch (error) {
    return next(error)
  }
}

export const updateProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ where: { id: req.params.id, user_id: req.user.id } })
    if (!profile) throw createHttpError(404, 'El perfil no fue encontrado')

    await profile.update(req.body)
    return res.json(profileAttributes.reduce((data, key) => ({ ...data, [key]: profile[key] }), {}))
  } catch (error) {
    return next(error)
  }
}
