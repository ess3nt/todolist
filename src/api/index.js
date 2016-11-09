/**
 * Created by Igor on 05.11.2016.
 */

export const fetchTodos = (filter) => {
    switch (filter) {
        case 'all':
            return fetch('/getall').then((response) => response.json()).then(data => data);
        case 'done':
            return fetch('/getdone').then((response) => response.json()).then(data => data);
        case 'undone':
            return fetch('/getundone').then((response) => response.json()).then(data => data);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
};