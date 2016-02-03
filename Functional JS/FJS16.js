/**
 * Created by Lumpychen on 16/2/3.
 */
function makeDependency(tree, props) {
    if (props.length == 0) return [];
    var dep = props[0].concat('@', tree[props[0]].version);
    return makeDependency(tree,
        props.slice(1)).concat(getDependencies(tree[props[0]]).concat(dep));
}

function getDependencies(tree) {
    if (tree.hasOwnProperty('dependencies')) {
        var props = Object.getOwnPropertyNames(tree.dependencies);
        return makeDependency(tree.dependencies, props).sort()
            .filter(function(val, index, arr) {
                return index == arr.length || val != arr[index + 1];
            });

    } else {
        return [];
    }

}
module.exports = getDependencies;