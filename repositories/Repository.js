import UserRepository from '~/repositories/UserRepository'
import CatRepository from '~/repositories/CatRepository'

export default ($axios) => ({
  user: UserRepository($axios),
  cat: CatRepository($axios),
})
