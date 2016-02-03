/**
 * Created by Lumpychen on 16/2/3.
 */
function loadUsers(userIds, load, done) {
    
    return usersIds.map(function (userId) {
        return load(userId);
    })
}

module.exports = loadUsers