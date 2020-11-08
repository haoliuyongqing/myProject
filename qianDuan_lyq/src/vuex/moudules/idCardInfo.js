const state = {
    NAME: 'liuyongqing',
    IDNUM: '',
    SEX: ''

}
const mutations = {
    setIDCardInfo (state,obj) {
         for (const key in obj) {
             if (obj.hasOwnProperty(key)) {
                  state[key] = obj[key];
                 
             }
         }
    }

}
export default {
    state,
    mutations
}