/**
 * Created by Lumpychen on 16/2/2.
 */
function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(sub_user){
            return goodUsers.some(function(good_user){
                return good_user.id == sub_user.id;
            });
        });
    };
}

module.exports = checkUsersValid;