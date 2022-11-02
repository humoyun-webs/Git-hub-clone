import user from '../followers.json'
import followers from '../user.json'
import repo from '../repo.json'

export default {
    getuserInfo: ()=>{
        return user
    },
    getFollowers: ()=>{
        return followers
    },
    getrepo: ()=>{
        return repo
    }
}